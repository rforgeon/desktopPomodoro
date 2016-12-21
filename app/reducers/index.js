import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import timer from './timer';
import list from '.list';
import listItem from '.listItem';

const rootReducer = combineReducers({timer, list, listItem,});

export default rootReducer;
