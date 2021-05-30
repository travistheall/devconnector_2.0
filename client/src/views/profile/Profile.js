/*eslint-disable*/
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProfileById } from 'actions/profile';
import Palette from '@material-ui/icons/Palette';
import classNames from 'classnames';
import Spinner from 'layout/Spinner';
import ProfileTop from './ProfileTop';

import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';
import Button from 'components/CustomButtons/Button.js';

import NavPills from 'components/NavPills/NavPills.js';
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';

//import Socials from './Socials';

const useStyles = makeStyles(profilePageStyle);

const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, [getProfileById, match.params.id]);
  const classes = useStyles();

  return (
    <div>
      <Parallax image="https://tntheall.s3.amazonaws.com/assets/img/br.jpg" filter="dark" className={classes.parallax} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              {profile === null ? (
                <Spinner />
              ) : (
                <Fragment>
                  <ProfileTop profile={profile} />
                  <div
                    className={classNames(
                      classes.description,
                      classes.textCenter
                    )}
                  >
                    <Button href="/profiles" color="primary">
                      Back To Profiles
                    </Button>
                    {auth.isAuthenticated &&
                      auth.loading === false &&
                      auth.user._id === profile.user._id && (
                        <Button to="/edit-profile" color="github">
                          Edit Profile
                        </Button>
                      )}
                  </div>
                  <div className={classes.profileTabs}>
                    <NavPills
                      alignCenter
                      color="primary"
                      tabs={[
                        {
                          tabButton: 'Experience',
                          tabIcon: Palette,
                          tabContent: (
                            <>
                              {profile.experience.length > 0 ? (
                                <Fragment>
                                  {profile.experience
                                    .slice(0)
                                    .reverse()
                                    .map((experience) => (
                                      <ProfileExperience
                                        key={experience._id}
                                        experience={experience}
                                      />
                                    ))}
                                </Fragment>
                              ) : (
                                <h4>No experience credentials</h4>
                              )}
                            </>
                          )
                        },
                        {
                          tabButton: 'Education',
                          tabIcon: Palette,
                          tabContent: (
                            <>
                              {profile.education.length > 0 ? (
                                <Fragment>
                                  {profile.education.map((education) => (
                                    <ProfileEducation
                                      key={education._id}
                                      education={education}
                                    />
                                  ))}
                                </Fragment>
                              ) : (
                                <h4>No education credentials</h4>
                              )}
                            </>
                          )
                        },
                        {
                          tabButton: 'Github',
                          tabIcon: Palette,
                          tabContent: (
                            <>
                              {profile.githubusername && (
                                <ProfileGithub
                                  username={profile.githubusername}
                                />
                              )}
                            </>
                          )
                        }
                      ]}
                    />
                  </div>
                </Fragment>
              )}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  match: PropTypes.object
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
