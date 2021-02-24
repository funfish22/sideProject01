import { Types } from './action';

const initState = {
    footerShow: 'block',
    backShow: false,
};

const App = (state = initState, action) => {
    switch (action.type) {
        case Types.CHANGE_FOOTER_SHOW:
            return {
                ...state,
                footerShow: action.payload.showSwitch,
            };

        case Types.CHANGE_BACK_SHOW:
            return {
                ...state,
                backShow: action.payload.showSwitch,
            };
        default:
            return state;
    }
};

export default App;
