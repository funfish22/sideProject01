import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFooterShow } from '@reducers/App/action';
import { selectVillager } from '@reducers/Villagers/action';

function Villagers() {
    const dispatch = useDispatch();
    const selectList = useSelector((state) => state.Villagers.selectList);
    const path = window.location.hash.substr(window.location.hash.lastIndexOf('/') + 1);

    useEffect(() => {
        dispatch(changeFooterShow('none'));
        dispatch(selectVillager(path));

        return () => {
            dispatch(changeFooterShow('block'));
        };
    }, []);

    return (
        <div>
            <p>{selectList.title}</p>
            <img style={{ maxWidth: '100%' }} src={selectList.imgUrl} alt={selectList.title} />{' '}
        </div>
    );
}

export default Villagers;
