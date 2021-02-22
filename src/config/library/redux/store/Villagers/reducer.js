import { Types } from './action';

const initState = {
    lists: [
        { id: '01', title: '一', imgUrl: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg' },
        { id: '02', title: '二', imgUrl: 'https://material-ui.com/static/images/cards/paella.jpg' },
    ],
    selectList: {},
};

const Villagers = (state = initState, action) => {
    switch (action.type) {
        case Types.SELECT_VILLAGER:
            const newselectList = state.lists.filter((row) => {
                return row.id === action.payload.id;
            });

            return {
                ...state,
                selectList: newselectList[0],
            };
        default:
            return state;
    }
};

export default Villagers;
