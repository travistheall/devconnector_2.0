import React, { forwardRef, useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from 'actions/profile';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import FormControl from '@material-ui/core/FormControl';
// @material-ui/icons
import Close from '@material-ui/icons/Close';
// core components
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Datetime from 'react-datetime';
import GridContainer from 'components/Grid/GridContainer.js';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @material-ui/icons
import Check from '@material-ui/icons/Check';

import style from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
    current
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [checked, setChecked] = useState([24, 22]);
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

  const classes = useStyles();
  const [addEduModal, setAddEduModal] = useState(false);
  return (
    <div>
      <Button color="primary" size="sm" onClick={() => setAddEduModal(true)}>
        Add Education
      </Button>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal
        }}
        open={addEduModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setAddEduModal(false)}
        aria-labelledby="login-modal-slide-title"
        aria-describedby="login-modal-slide-description"
      >
        <Card plain className={classes.modalLoginCard}>
          <DialogTitle
            id="login-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <CardHeader
              plain
              color="primary"
              className={`${classes.textCenter} ${classes.cardLoginHeader}`}
            >
              <Button
                simple
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                onClick={() => setAddEduModal(false)}
              >
                {' '}
                <Close className={classes.modalClose} />
              </Button>
              <h4 className={classes.cardTitleWhitee}>Add Your Education</h4>
            </CardHeader>
          </DialogTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addEducation(formData, history);
            }}
          >
            <DialogContent
              id="login-modal-slide-description"
              className={classes.modalBody}
            >
              <CardBody className={classes.cardLoginBody}>
                <p className={`${classes.description} ${classes.textCenter}`}>
                  <i className="fas fa-code-branch" /> Add any school or
                  bootcamp that you have attended
                  <br />
                  <small>* = required field</small>
                </p>
                <CustomInput
                  id="school"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: '* School or Bootcamp',
                    type: 'text',
                    name: 'school',
                    value: school,
                    onChange: onChange
                  }}
                />
                <CustomInput
                  id="degree"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: '* Degree or Certificate',
                    type: 'text',
                    name: 'degree',
                    value: degree,
                    onChange: onChange
                  }}
                />
                <CustomInput
                  id="degree"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: 'Field of Study',
                    type: 'text',
                    name: 'fieldofstudy',
                    value: fieldofstudy,
                    onChange: onChange
                  }}
                />
                <FormControl fullWidth>
                  <Datetime
                    timeFormat={false}
                    inputProps={{
                      placeholder: 'From Date',
                      name: 'from',
                      value: from,
                      onChange: onChange
                    }}
                  />
                </FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onChange={() => {
                        setFormData({ ...formData, current: !current });
                      }}
                      onClick={() => handleToggle(22)}
                      checked={checked.indexOf(22) !== -1 ? true : false}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{ label: classes.label }}
                  label="Current School"
                />

                <FormControl fullWidth>
                  <Datetime
                    timeFormat={false}
                    inputProps={{
                      placeholder: 'To Date',
                      name: 'to',
                      value: to,
                      onChange: onChange
                    }}
                  />
                </FormControl>
                <CustomInput
                  id="description"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: 'Job Description',
                    type: 'text',
                    name: 'description',
                    value: description,
                    onChange: onChange
                  }}
                />
              </CardBody>
            </DialogContent>
            <GridContainer justify="center">
            <DialogActions className={classes.modalFooter}>
              <Button onClick={() => setAddEduModal(false)} color="secondary" >
                Go Back
              </Button>
              <Button color="primary" type="submit">Save changes</Button>
            </DialogActions>
            </GridContainer>

          </form>
        </Card>
      </Dialog>
    </div>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  history: PropTypes.object
};

export default connect(null, { addEducation })(AddEducation);
