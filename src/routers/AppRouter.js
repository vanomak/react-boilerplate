import React from 'react';
import DashboardPage from '../components/dashboard-page';
import LoginPage from '../components/login-page';
import NotFoundPage from '../components/not-found-page';
import createHistory from 'history/createBrowserHistory';
import {Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage} exact={true}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

