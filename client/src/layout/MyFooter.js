import React from 'react';
import Footer from 'components/Footer/Footer.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Favorite from '@material-ui/icons/Favorite';

import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.js';
import { makeStyles } from '@material-ui/core/styles';

const MyFooter = () => {
  const useStyles = makeStyles(presentationStyle);
  const classes = useStyles();
  return (
    <Footer
      content={
        <div>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a href="/" className={classes.block}>
                  TheallTN
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="/dashboard" className={classes.block}>
                  Dashboard
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="/posts" className={classes.block}>
                  Blog Posts
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , made with{' '}
            <Favorite className={classes.icon} /> by{' '}
            <a
              href="https://www.creative-tim.com?ref=mkpr-signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Tim
            </a>{' '}
            for a better web.
          </div>
        </div>
      }
    />
  );
};
export default MyFooter;
