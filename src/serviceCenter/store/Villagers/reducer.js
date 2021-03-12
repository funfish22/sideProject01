import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
    lists: [
        {
            id: '01',
            title: '1',
            imgUrl: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
            sex: 'Male',
            star: true,
        },
        {
            id: '02',
            title: '2',
            imgUrl: 'https://material-ui.com/static/images/cards/paella.jpg',
            sex: 'Female',
            star: false,
        },
        {
            id: '03',
            title: '3',
            imgUrl: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
            sex: 'Female',
            star: false,
        },
        {
            id: '04',
            title: '4',
            imgUrl: 'https://material-ui.com/static/images/cards/paella.jpg',
            sex: 'Male',
            star: false,
        },
        {
            id: '05',
            title: '5',
            imgUrl: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
            sex: 'Male',
            star: false,
        },
        {
            id: '06',
            title: '6',
            imgUrl: 'https://material-ui.com/static/images/cards/paella.jpg',
            sex: 'Male',
            star: false,
        },
    ],
    selectList: {},
    villagersTabs: [
        {
            title: 'Star',
        },
        {
            title: 'All',
        },
        {
            title: 'Normal',
        },
        {
            title: 'Male',
        },
        {
            title: 'Female',
        },
    ],
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

const changeStar = (state = INITIAL_STATE, action) => {
    const newselectList = state.lists.find((row) => {
        return row.id === action.id;
    });

    newselectList.star = !state.selectList.star;

    return {
        ...state,
        selectList: Object.assign({}, newselectList),
    };
};

const VILLAGERS = {
    [Types.SELECT_VILLAGER]: selectVillager,
    [Types.CHANGE_STAR]: changeStar,
};

export default createReducer(INITIAL_STATE, VILLAGERS);
