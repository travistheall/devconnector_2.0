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
//Forms
import ProfileForm from 'forms/profile-forms/ProfileForm';
import AddExperience from 'forms/profile-forms/AddExperience';
import AddEducation from 'forms/profile-forms/AddEducation';

import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profiles" component={Profiles} />
      <Route exact path="/profile/:id" component={Profile} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/create-profile" component={ProfileForm} />
      <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
      <PrivateRoute exact path="/add-experience" component={AddExperience} />
      <PrivateRoute exact path="/add-education" component={AddEducation} />
      <PrivateRoute exact path="/posts" component={Posts} />
      <PrivateRoute exact path="/posts/:id" component={Post} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
