import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
    lists: [
        { id: '01', title: '一', imgUrl: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg' },
        { id: '02', title: '二', imgUrl: 'https://material-ui.com/static/images/cards/paella.jpg' },
        { id: '03', title: '三', imgUrl: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg' },
        { id: '04', title: '四', imgUrl: 'https://material-ui.com/static/images/cards/paella.jpg' },
        { id: '05', title: '五', imgUrl: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg' },
        { id: '06', title: '六', imgUrl: 'https://material-ui.com/static/images/cards/paella.jpg' },
    ],
    selectList: {},
    villager: {
        season: [
            {
                title: '春',
            },
            {
                title: '夏',
            },
            {
                title: '秋',
            },
            {
                title: '冬',
            },
            {
                title: '婚',
            },
        ],
    },
};

const selectVillager = (state = INITIAL_STATE, action) => {
    const newselectList = state.lists.filter((row) => {
        return row.id === action.id;
    });

    return {
        ...state,
        selectList: newselectList[0],
    };
};

const VILLAGERS = {
    [Types.SELECT_VILLAGER]: selectVillager,
};

export default createReducer(INITIAL_STATE, VILLAGERS);
