import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Feed from './feed';
import Profile from './profile'


const Main = () => (
    
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/feed" component={Feed} />
        <Route path="/profile" component={Profile} />   
    </Switch>
)

export default Main;