import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

//build some fake data
var timer = {
  seconds: 1500,
  index: 0,
  isRunning: false
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

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
