import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
    footerShow: 'block',
    backShow: false,
};

const changeFooterShow = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        footerShow: action.showSwitch,
    };
};

const changeBackShow = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        backShow: action.showSwitch,
    };
};

const APP = {
    [Types.CHANGE_FOOTER_SHOW]: changeFooterShow,
    [Types.CHANGE_BACK_SHOW]: changeBackShow,
};

export default createReducer(INITIAL_STATE, APP);
