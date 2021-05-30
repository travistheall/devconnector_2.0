import React, { useState } from 'react';
// @material-ui/core components
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @material-ui/icons

import Phone from '@material-ui/icons/Phone';
import Check from '@material-ui/icons/Check';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import InfoArea from 'components/InfoArea/InfoArea.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';

import { init, send } from 'emailjs-com';
import contactsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js';
import { setAlert } from 'actions/alert';
import MyAlert from 'layout/MyAlert';

init('user_UYTLReGGjL61IGrkBI3V9');

const useStyles = makeStyles(contactsStyle);

const SectionContact = ({  setAlert, ...rest }) => {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
  };
  const initFormData = {
    to_name: 'Travis Theall',
    from_name: '',
    message: '',
    reply_to: ''
  }
  const [formData, setFormData] = useState(initFormData);
  const { from_name, message, reply_to } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    send('service_tefcpra', 'template_nx3zz3h', formData).then(
      (result) => {
        console.log(result);
        setFormData(initFormData);
        setChecked(false);
        setAlert(`${result.text}. Email has been sent!`, 'success');
      },
      (error) => {
        console.log(error);
        setAlert(`${error.text}. Email has not been sent!`, 'danger');
      }
    );
  };
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      
      <div
        className={classes.contacts + ' ' + classes.section}
        style={{ backgroundImage: 'url(https://tntheall.s3.amazonaws.com/assets/img/examples/city.jpg)' }}
      >
        <div className={classes.container}>
        <MyAlert />
          <GridContainer>
            <GridItem xs={12} sm={5} md={5}>
              <h2 className={classes.title}>Get in Touch</h2>
              <h5 className={classes.description}>
                You need more information? Please contact me for any more
                details
              </h5>
              <InfoArea
                className={classes.infoArea}
                title="Give me a ring"
                description={
                  <span>
                    Travis Theall
                    <br /> (504) 583-0546
                  </span>
                }
                icon={Phone}
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card className={classes.card1}>
                <form onSubmit={sendEmail}>
                  <CardHeader
                    contact
                    color="primary"
                    className={classes.textCenter}
                  >
                    <h4 className={classes.cardTitle}>Contact Me</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                          labelText="Name"
                          id="from_name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            name: 'from_name',
                            value: from_name,
                            onChange: handleChange,
                            required: true
                          }}
                          
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Email Address"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        name: 'reply_to',
                        onChange: handleChange,
                        value: reply_to,
                        required: true
                      }}
                    />
                    <CustomInput
                      labelText="Your Message"
                      id="message"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        name: 'message',
                        onChange: handleChange,
                        value: message,
                        required: true
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onClick={() => handleToggle()}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                          }}
                        />
                      }
                      classes={{ label: classes.label }}
                      label="I'm not a robot"
                    />
                    {checked ? (
                      <Button
                        color="primary"
                        className={classes.pullRight}
                        type="submit"
                        value="Send"
                      >
                        Send Message
                      </Button>
                    ) : (
                      <Button
                        color="primary"
                        disabled
                        className={classes.pullRight}
                        value="Send"
                      >
                        Send Message
                      </Button>
                    )}
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

SectionContact.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(SectionContact);
