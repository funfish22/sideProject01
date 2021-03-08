import { combineReducers } from 'redux';

import App from './App/reducer';
import Home from './Home/reducer';
import Villagers from './Villagers/reducer';

const rootReducer = combineReducers({
    App,
    Home,
    Villagers,
});

export default rootReducer;
