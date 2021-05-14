/*eslint-disable*/
import React, { Fragment } from 'react';
import classNames from 'classnames';
import Palette from '@material-ui/icons/Palette';
import PropTypes from 'prop-types';
import ProfileExperience from 'views/profile/ProfileExperience';
import ProfileEducation from 'views/profile/ProfileEducation';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import NavPills from 'components/NavPills/NavPills.js';
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
const useStyles = makeStyles(profilePageStyle);

const ExpEdu = ({ profile }) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.mainRaised)}>
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
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
                }
              ]}
            />
          </div>
        </GridItem>
      </GridContainer>
    </div></div>
  );
};

ExpEdu.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ExpEdu;
