import { Types } from './action';

const initState = {
    footerShow: 'block',
};

const App = (state = initState, action) => {
    switch (action.type) {
        case Types.CHANGE_FOOTER_SHOW:
            return {
                ...state,
                footerShow: action.payload.showSwitch,
            };
        default:
            return state;
    }
};

export default App;
