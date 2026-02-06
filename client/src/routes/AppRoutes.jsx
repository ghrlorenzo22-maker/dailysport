import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import LeaguePage from '../components/LeaguePage';
import TeamPage from '../components/TeamPage';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/league/:id" component={LeaguePage} />
                <Route path="/team/:id" component={TeamPage} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;