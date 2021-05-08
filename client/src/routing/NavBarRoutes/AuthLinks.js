/* eslint-disable */
import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import AccountBalance from '@material-ui/icons/AccountBalance';
import ArtTrack from '@material-ui/icons/ArtTrack';
import ViewQuilt from '@material-ui/icons/ViewQuilt';

import ListItem from '@material-ui/core/ListItem';
import Button from 'components/CustomButtons/Button.js';

import MapLinks from './MapLinks';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
import { logout } from 'actions/auth';

import styles from 'assets/jss/material-kit-pro-react/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

const AuthLinks = ({ logout }) => {
  const classes = useStyles();
  const authLinksList = [
    {
      link: '/posts',
      icon: <ArtTrack className={classes.icons} />,
      title: 'Posts',
    },
    {
      link: '/dashboard',
      icon: <ViewQuilt className={classes.icons} />,
      title: 'Dashboard',
    },
    {
      link: '/profiles',
      icon: <AccountBalance className={classes.icons} />,
      title: 'Developers',
    },
    
  ];
  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      <MapLinks linkList={authLinksList} />
      <ListItem className={classes.listItem} key={'ListItem-logout'}>
        <Button
          color={'warning'}
          className={classes.navButton}
          round
          size="sm"
          onClick={logout}
        >
          <ViewQuilt className={classes.icons} />Logout
        </Button>
      </ListItem>
    </List>
  );
};

AuthLinks.propTypes = {
  logout: PropTypes.func.isRequired
};
export default connect(null, { logout })(AuthLinks);
