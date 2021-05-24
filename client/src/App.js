import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import MyFooter from './layout/MyFooter';
// Routing
import Routes from './routing/Routes';
import { LOGOUT } from './actions/types';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

//import './App.css';
import 'assets/scss/material-kit-pro-react.scss?v=1.9.0';

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar dcap={true}/>
          <Switch>
            <Routes />
          </Switch>
          <MyFooter />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
