import React, { useEffect } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { useSelector, useDispatch } from 'react-redux';

import ActionApp from '@reducers/App/action';
import ActionVillager from '@reducers/Villagers/action';

function withVillagersDetailPageContainer({ Component }) {
    function VillagersDetailPageContainer() {
        const dispatch = useDispatch();

        const path = window.location.hash.substr(window.location.hash.lastIndexOf('/') + 1);

        const { changeFooterShow, changeBackShow } = ActionApp;
        const { selectVillager, changeStar } = ActionVillager;

        const selectList = useSelector((state) => state.Villagers.selectList);
        const villager = useSelector((state) => state.Villagers.villager);

        const { season } = villager;

        const { title, imgUrl, id, star } = selectList;

        const handleChangeStar = (id) => {
            dispatch(changeStar(id));
        };

        useEffect(() => {
            dispatch(changeFooterShow('none'));
            dispatch(changeBackShow(true));
            dispatch(selectVillager(path));

            return () => {
                dispatch(changeFooterShow('block'));
                dispatch(changeBackShow(false));
            };
        }, [dispatch, changeFooterShow, changeBackShow, selectVillager, path]);

        return (
            <Component
                season={season}
                id={id}
                title={title}
                imgUrl={imgUrl}
                star={star}
                changeStar={(id) => handleChangeStar(id)}
            />
        );
    }

    hoistNonReactStatic(VillagersDetailPageContainer, withVillagersDetailPageContainer);
    return VillagersDetailPageContainer;
}

export default withVillagersDetailPageContainer;
