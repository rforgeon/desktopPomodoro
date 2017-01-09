import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { hashHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

//build some fake data

var workTimerItem = {
  seconds: 1500,
  isRunning: false,
  cycleIndex: 0,
  id: 0
}

var shortBreakTimerItem = {
  seconds: 300,
  isRunning: false,
  cycleIndex: 0,
  id: 1
}

var longBreakTimerItem = {
  seconds: 1800,
  isRunning: false,
  cycleIndex: 0,
  id: 2
}

var timer = {
  timerItems: [workTimerItem, shortBreakTimerItem, longBreakTimerItem]
}

var list = {
  listItems: []
}

var listItem = {
  itemId: 1,
  itemText: "This is a thing I need to do",
  isCompleted: false
}

//create an object for the default data
const defaultState = {
  timer,
  list,
  listItem
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
