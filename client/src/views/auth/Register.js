import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import LockIcon from '@material-ui/icons/Lock';
// @material-ui/icons
import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';
import Check from '@material-ui/icons/Check';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

import signupPageStyle from 'assets/jss/material-kit-pro-react/views/signupPageStyle.js';
import image from 'assets/img/bg7.jpg';

import { connect } from 'react-redux';

import { setAlert } from 'actions/alert';
import { register } from 'actions/auth';
import PropTypes from 'prop-types';

import MyAlert from 'layout/MyAlert';

const useStyles = makeStyles(signupPageStyle);

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [checked, setChecked] = useState([0]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      <MyAlert />
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={10} md={10}>
            <Card className={classes.cardSignup}>
              <h2 className={classes.cardTitle}>Register</h2>
              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={5} md={5}>
                    <form className={classes.form} onSubmit={onSubmit}>
                      <CustomInput
                        id="name"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          placeholder: 'Name...',
                          name: 'name',
                          value: name,
                          onChange: onChange,
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        id="email"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          placeholder: 'Email...',
                          type: 'email',
                          name: 'email',
                          value: email,
                          onChange: onChange,
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        id="pass"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          placeholder: 'Password....',
                          name: 'password',
                          value: password,
                          onChange: onChange,
                          type: 'password',
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <LockIcon
                                className={classes.inputAdornmentIcon}
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        id="pass2"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          placeholder: 'Confirm Your Password....',
                          name: 'password2',
                          value: password2,
                          onChange: onChange,
                          type: 'password',
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <LockIcon
                                className={classes.inputAdornmentIcon}
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                      <FormControlLabel
                        classes={{
                          label: classes.label
                        }}
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot
                            }}
                            checked={checked.indexOf(1) !== -1 ? true : false}
                          />
                        }
                        label={
                          <span>
                            I agree to the{' '}
                            <a href="#pablo">terms and conditions</a> Dummy.
                          </span>
                        }
                      />
                      <div className={classes.textCenter}>
                        <Button
                          round
                          color="primary"
                          type="submit"
                          value="Register"
                        >
                          Sign Up
                        </Button>
                      </div>
                    </form>
                  </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                  <CardFooter>
                    Already have an account?
                    <Button color="primary" simple href="/login">
                      Log In
                    </Button>
                  </CardFooter>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
