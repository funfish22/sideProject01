import { useSelector, useDispatch } from 'react-redux';

function Villagers() {
    const selectList = useSelector((state) => state.Villagers.selectList);

    return (
        <div>
            <p>{selectList.title}</p>
            <img style={{ maxWidth: '100%' }} src={selectList.imgUrl} alt={selectList.title} />{' '}
        </div>
    );
}

export default Villagers;
