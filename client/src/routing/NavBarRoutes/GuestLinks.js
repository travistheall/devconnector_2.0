/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LineStyle from '@material-ui/icons/LineStyle';
import List from '@material-ui/core/List';
import MapLinks from './MapLinks';

import styles from '../../assets/jss/material-kit-pro-react/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

const GuestLinks = () => {
  const classes = useStyles();
  const guestLinksList = [
    {
      link: '/register',
      icon: <LineStyle className={classes.icons} />,
      title: 'Register',
    },
    {
      link: '/login',
      icon: <LineStyle className={classes.icons} />,
      title: 'Login',
    },
  ];
  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      <MapLinks linkList={guestLinksList} />
    </List>
  );
};

export default GuestLinks;
