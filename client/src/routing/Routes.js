import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Layout
import NotFound from '../layout/NotFound';
import Landing from 'layout/Landing';
// Views
import Register from 'views/auth/Register';
import Login from 'views/auth/Login.js';
import Dashboard from 'views/dashboard/Dashboard';
import Profiles from 'views/profiles/Profiles';
import Profile from 'views/profile/Profile';
import Posts from 'views/posts/Posts';
import Post from 'views/post/Post';
import AboutMe from 'views/about_me/AboutMe';
import Participant from 'views/dcap/participant/Participant';
import Dcap from 'views/dcap/dcap';

import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={AboutMe} />
      <Route exact path="/profiles" component={Profiles} />
      <Route exact path="/profile/:id" component={Profile} />
<<<<<<< HEAD
      <Route exact path="/post/coursera" component={ExamplePost} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/posts" component={Posts} />
      <PrivateRoute exact path="/posts/:id" component={Post} />
      <Route exact path="/part" component={Participant} />
      <Route exact path="/dcap/:abbrev" component={Dcap} />
=======
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/posts" component={Posts} />
      <PrivateRoute exact path="/posts/:id" component={Post} />
>>>>>>> parent of 6b3025b (fixed up the about me more. made it like the old profile. added modals. modals everywhere)
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
