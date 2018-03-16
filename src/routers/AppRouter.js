import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import TodoPage from '../components/TodoPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={LoginPage} exact={true}/>
            <Route path="/app" component={TodoPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;