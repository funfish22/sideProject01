import { combineReducers } from 'redux';

import App from './App/reducer';
import Villagers from './Villagers/reducer';

const rootReducer = combineReducers({
    App,
    Villagers,
});

export default rootReducer;
