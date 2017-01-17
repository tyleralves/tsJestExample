import * as React from 'react';
import { hashHistory, Route, Router } from 'react-router';

import { MainContainer } from 'containers';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}/>
  </Router>
);

export default routes;
