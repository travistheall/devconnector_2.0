/* eslint-disable */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import Button from 'components/CustomButtons/Button.js';
import styles from 'assets/jss/material-kit-pro-react/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

const MapLinks = ({ linkList }) => {
  const classes = useStyles();
  return (
    <Fragment>
      {linkList.map((link, index) => (
        <ListItem className={classes.listItem} key={`ListItem-${index}`}>
          <Button
            href={link.link}
            color={window.innerWidth < 960 ? 'info' : 'github'}
            className={classes.navButton}
            round
            size="sm"
          >
            {link.icon} {link.title}
          </Button>
        </ListItem>
      ))}
    </Fragment>
  );
};

MapLinks.propTypes = {
  linkList: PropTypes.array.isRequired,
};
export default MapLinks;
