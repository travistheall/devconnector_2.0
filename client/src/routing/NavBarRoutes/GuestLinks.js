/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LineStyle from '@material-ui/icons/LineStyle';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import VpnKey from '@material-ui/icons/VpnKey';
import List from '@material-ui/core/List';
import MapLinks from './MapLinks';

import styles from '../../assets/jss/material-kit-pro-react/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

const GuestLinks = () => {
  const classes = useStyles();
  const guestLinksList = [
    {
      link: '/about',
      icon: <LineStyle className={classes.icons} />,
      title: 'About Me',
    },    {
      link: '/register',
      icon: <VpnKey className={classes.icons} />,
      title: 'Register',
    },
    {
      link: '/login',
      icon: <MeetingRoomIcon className={classes.icons} />,
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
