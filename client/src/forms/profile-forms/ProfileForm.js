import React, { forwardRef, useState, useEffect, Fragment } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import GridContainer from 'components/Grid/GridContainer.js';
// @material-ui/icons
import Close from '@material-ui/icons/Close';
// core components
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import InputAdornment from '@material-ui/core/InputAdornment';
import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.js";

const style = theme => ({
  ...modalStyle(theme),
  modalRootExample: {
    "& > div:first-child": {
      display: "none"
    },
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
});

const useStyles = makeStyles(style);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(', ');
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  const [editProModal, setEditProModal] = useState(false);

  return (
    <div>
      <Button color="primary" size="sm" onClick={() => setEditProModal(true)}>
        Edit Profile
      </Button>
      <Dialog
        classes={{
          root: `${classes.modalRoot} ${classes.modalRootExample}`,
          paper: classes.modal
        }}
        open={editProModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setEditProModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <Card plain className={classes.modalLoginCard}>
          <DialogTitle
            id="classic-modal-slide-title"
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
                onClick={() => setEditProModal(false)}
              >
                {' '}
                <Close className={classes.modalClose} />
              </Button>
              <h4 className={classes.cardTitleWhitee}>Edit Your Profile</h4>
            </CardHeader>
          </DialogTitle>
          <form onSubmit={onSubmit}>
            <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
            >
              <CardBody className={classes.cardLoginBody}>
                <p className={`${classes.description} ${classes.textCenter}`}>
                  <i className="fas fa-code-branch" />
                  <i className="fas fa-user" /> Add some changes to your profile
                  <br />
                  <small>* = required field</small>
                </p>
                <FormControl fullWidth className={classes.selectFormControl}>
                  <InputLabel htmlFor="status" className={classes.selectLabel}>
                    Single Select
                  </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={status}
                    onChange={onChange}
                    inputProps={{
                      name: 'status',
                      id: 'status'
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                      * Select Professional Status
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="Developer"
                    >
                      Developer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="Junior Developer"
                    >
                      Junior Developer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="Senior Developer"
                    >
                      Senior Developer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="Manager"
                    >
                      Manager
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="Student or Learning"
                    >
                      Student or Learning
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="Instructor or Teacher"
                    >
                      Instructor or Teacher
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="Intern"
                    >
                      Intern
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="Other"
                    >
                      Other
                    </MenuItem>
                  </Select>
                </FormControl>
                <CustomInput
                  id="company"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: '* Company',
                    type: 'text',
                    name: 'company',
                    value: company,
                    onChange: onChange
                  }}
                />
                <CustomInput
                  id="website"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: 'text',
                    name: 'website',
                    value: website,
                    onChange: onChange,
                    placeholder: '* Website'
                  }}
                />
                <CustomInput
                  id="Location"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: '* Location',
                    type: 'text',
                    name: 'location',
                    value: location,
                    onChange: onChange
                  }}
                />
                <CustomInput
                  id="Skills"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: '* Skills',
                    type: 'text',
                    name: 'skills',
                    value: skills,
                    onChange: onChange
                  }}
                />
                <small className="form-text">
                  Please use comma separated values (eg.
                  HTML,CSS,JavaScript,PHP)
                </small>
                <CustomInput
                  id="githubusername"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: 'Github Username',
                    type: 'text',
                    name: 'githubusername',
                    value: githubusername,
                    onChange: onChange
                  }}
                />
                <CustomInput
                  id="bio"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: 'A short bio of yourself',
                    type: 'text',
                    name: 'bio',
                    value: bio,
                    onChange: onChange
                  }}
                />
                <GridContainer justify="center">
                  <Button
                    onClick={() => toggleSocialInputs(!displaySocialInputs)}
                    size="sm"
                    round
                  >
                    Add Social Network Links
                  </Button>
                </GridContainer>
                {displaySocialInputs && (
                  <Fragment>
                    <CustomInput
                      id="twitter"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: 'Twitter URL',
                        type: 'text',
                        name: 'twitter',
                        value: twitter,
                        onChange: onChange,
                        startAdornment: (
                          <InputAdornment position="start">
                            <i className="fab fa-twitter fa-2x" />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="facebook"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: 'Facebook URL',
                        type: 'text',
                        name: 'facebook',
                        value: facebook,
                        onChange: onChange,
                        startAdornment: (
                          <InputAdornment position="start">
                            <i className="fab fa-facebook fa-2x" />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="youtube"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: 'Youtube URL',
                        type: 'text',
                        name: 'youtube',
                        value: youtube,
                        onChange: onChange,
                        startAdornment: (
                          <InputAdornment position="start">
                            <i className="fab fa-youtube fa-2x" />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="linkedin"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: 'Linkedin URL',
                        type: 'text',
                        name: 'linkedin',
                        value: linkedin,
                        onChange: onChange,
                        startAdornment: (
                          <InputAdornment position="start">
                            <i className="fab fa-linkedin fa-2x" />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="instagram"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: 'Instagram URL',
                        type: 'text',
                        name: 'instagram',
                        value: instagram,
                        onChange: onChange,
                        startAdornment: (
                          <InputAdornment position="start">
                            <i className="fab fa-instagram fa-2x" />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Fragment>
                )}
              </CardBody>
            </DialogContent>
            <GridContainer justify="center">
              <DialogActions className={classes.modalFooter}>
                <Button color="primary" type="submit">
                  Save changes
                </Button>
                <Button
                  onClick={() => setEditProModal(false)}
                  color="secondary"
                >
                  Go Back
                </Button>
              </DialogActions>
            </GridContainer>
          </form>
        </Card>
      </Dialog>
    </div>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  history: PropTypes.object
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);
