import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Parallax from 'components/Parallax/Parallax.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';

import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.js';

const useStyles = makeStyles(presentationStyle);

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    console.log(isAuthenticated);
    return <Redirect to="/dashboard" />;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: 'url(https://tntheall.s3.amazonaws.com/assets/img/wfh.JPEG)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      <Parallax
        image={"https://tntheall.s3.amazonaws.com/assets/img/wfh.JPEG"}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <Button type="button" color="info" href="/register">
                  Sign Up
                </Button>
<<<<<<< HEAD
=======
                <Button type="button" href="/login">
                  Log in
                </Button>
>>>>>>> parent of 6b3025b (fixed up the about me more. made it like the old profile. added modals. modals everywhere)
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
