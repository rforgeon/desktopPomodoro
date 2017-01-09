// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Timer from './components/Timer';


export default (

  <Route path="/" component={App}>
    <IndexRoute component={Timer}></IndexRoute>
  </Route>
);

// {window.location.pathname}
