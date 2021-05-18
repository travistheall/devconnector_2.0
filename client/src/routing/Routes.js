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
import ExamplePost from 'views/post/ExamplePost';
import AboutMe from 'views/about_me/AboutMe';
import Food from 'views/food/Food';
//import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={AboutMe} />
      <Route exact path="/profiles" component={Profiles} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/post/coursera" component={ExamplePost} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/posts/:id" component={Post} />
      <Route exact path="/food" component={Food} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
