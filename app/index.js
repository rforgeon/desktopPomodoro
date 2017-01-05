import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


//import components
import App from './components/App';
import Timer from './components/Timer';
import TimerItem from './components/TimerItem';


import store, { history } from './store';

const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path={window.location.pathname} component={App}>
      <IndexRoute component={Timer}></IndexRoute>
    </Route>
  </Router>
  </Provider>
)


ReactDOM.render(
  router,
  document.getElementById('root')
);
