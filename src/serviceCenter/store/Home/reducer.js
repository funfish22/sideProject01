import { createReducer } from 'reduxsauce';

const INITIAL_STATE = {
    banner: {
        speed: 5000,
        lists: [
            { id: '01', imgUrl: 'https://fakeimg.pl/1920x600/', title: 'banner 1' },
            { id: '02', imgUrl: 'https://fakeimg.pl/1920x600/', title: 'banner 2' },
            { id: '03', imgUrl: 'https://fakeimg.pl/1920x600/', title: 'banner 3' },
        ],
    },
    homeTabs: [
        {
            title: 'Item One',
        },
        {
            title: 'Item Two',
        },
        {
            title: 'Item Three',
        },
    ],
};

const HOME = {};

export default createReducer(INITIAL_STATE, HOME);
