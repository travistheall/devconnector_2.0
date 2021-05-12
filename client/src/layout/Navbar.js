import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from 'components/Header/Header';
import GuestLinks from 'routing/NavBarRoutes/GuestLinks';
import AuthLinks from 'routing/NavBarRoutes/AuthLinks';

const Navbar = ({ auth: { isAuthenticated } }) => {
  return (
    <Header
      fixed
      color="transparent"
      brand="TheallTN"
      links={isAuthenticated ? <AuthLinks /> : <GuestLinks />}
      changeColorOnScroll={{ color: 'dark', height: 100 }}
    />
  );
};

Navbar.propTypes = {
  logout: PropTypes.func,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navbar);
