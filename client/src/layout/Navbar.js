import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from 'components/Header/Header';
import GuestLinks from 'routing/NavBarRoutes/GuestLinks';
import AuthLinks from 'routing/NavBarRoutes/AuthLinks';

const Navbar = ({ auth: { isAuthenticated }, dcap }) => {
  return (
    <Header
      fixed
      dcap={dcap}
      color="transparent"
      brand="TheallTN"
      links={isAuthenticated ? <AuthLinks /> : <GuestLinks />}
      changeColorOnScroll={{ color: 'dark', height: 100 }}
    />
  );
};

Navbar.propTypes = {
  dcap: PropTypes.bool,
  logout: PropTypes.func,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navbar);
