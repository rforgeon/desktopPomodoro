import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import timer from './timer';
import timerItem from './timerItem';
import list from './list';
import listItems from './listItems';


const rootReducer = combineReducers({
  timer,
  timerItem,
  list,
  listItems,
  routing: routerReducer
});

export default rootReducer;
