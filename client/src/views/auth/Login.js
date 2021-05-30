import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from 'actions/auth';
// core components
import Email from '@material-ui/icons/Email';

import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

import loginPageStyle from 'assets/jss/material-kit-pro-react/views/loginPageStyle.js';

import MyAlert from 'layout/MyAlert';

const useStyles = makeStyles(loginPageStyle);

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: 'url(https://tntheall.s3.amazonaws.com/assets/img/bg7.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      <MyAlert />
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form} onSubmit={onSubmit}>
                <CardHeader
                  color="primary"
                  signup
                  className={classes.cardHeader}
                >
                  <h4 className={classes.cardTitle}>Login</h4>
                </CardHeader>
                <CardBody signup>
                  <CustomInput
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: 'Email...',
                      type: 'email',
                      name: 'email',
                      value: email,
                      onChange: onChange,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    id="pass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: 'Password....',
                      name: 'password',
                      value: password,
                      onChange: onChange,
                      type: 'password',
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                      autoComplete: 'off'
                    }}
                  />
                </CardBody>
                <div className={classes.textCenter}>
                  <Button simple color="primary" size="lg" type="submit">
                    Log In
                  </Button>
                </div>
              </form>
              <GridContainer justify="center">
                <CardFooter>
                  Don{"'"}t have an account?
                  <Button color="primary" simple href="/register">
                    Sign Up
                  </Button>
                </CardFooter>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
