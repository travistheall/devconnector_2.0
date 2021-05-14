/*eslint-disable*/
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfileById } from 'actions/profile';
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Spinner from 'layout/Spinner';
// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import SectionProg from './Sections/SectionProg.js';
import SectionOffice from './Sections/SectionOffice.js';
import SectionContact from './Sections/SectionContact.js';
import ExpEdu  from './Sections/ExpEdu.js';

import aboutUsStyle from 'assets/jss/material-kit-pro-react/views/aboutUsStyle.js';
import image from 'assets/img/wfh.JPEG';

const useStyles = makeStyles(aboutUsStyle);

const AboutMe = ({ getProfileById, profile: { profile } }) => {
  useEffect(() => {
    getProfileById('609232c6d50a347264bea31d');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, [getProfileById, '609232c6d50a347264bea31d']);

  const classes = useStyles();
  return (
    <div>
      <Parallax image={image} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>About Me</h1>
              <h4>
                Meet the developer behind this project and find out more about
                how I work.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {profile === null ? (
            <Spinner />
          ) : (
            <>
              <SectionProg />
              <ExpEdu profile={profile} />
              <SectionOffice />
              <SectionContact />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileById })(AboutMe);
