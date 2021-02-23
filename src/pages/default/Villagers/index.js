import { useSelector, useDispatch } from 'react-redux';
import { selectVillager } from '@reducers/Villagers/action';

function Villagers() {
    const dispatch = useDispatch();
    const selectList = useSelector((state) => state.Villagers.selectList);
    const path = window.location.hash.substr(window.location.hash.lastIndexOf('/') + 1);

    dispatch(selectVillager(path));

    return (
        <div>
            <p>{selectList.title}</p>
            <img style={{ maxWidth: '100%' }} src={selectList.imgUrl} alt={selectList.title} />{' '}
        </div>
    );
}

export default Villagers;
