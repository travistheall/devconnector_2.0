import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Button from 'components/CustomButtons/Button.js';

import blogPostsPageStyle from 'assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js';
import RemoveIcon from '@material-ui/icons/Remove';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Parallax from 'components/Parallax/Parallax.js';
import bg10 from 'assets/img/bg10.jpg';
const useStyles = makeStyles(blogPostsPageStyle);

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Parallax image={bg10} small filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                <AccountCircleIcon /> Welcome {user && user.name}
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12}>
            <Card pricing raised>
              <CardBody pricing>
                {profile === null ? (
                  <Fragment>
                    <p className={classes.cardDescription}>
                      You have not yet setup a profile, please add some info
                    </p>
                    <Button href="/create-profile" size="sm" color="primary">
                      Create Profile
                    </Button>
                  </Fragment>
                ) : (
                  <Fragment>
                    <h1 className={classes.cardTitle}>
                      <small>Experience Credentials</small>
                    </h1>
                    <Experience experience={profile.experience} />
                    <h1 className={classes.cardTitle}>
                      <small>Education Credentials</small>
                    </h1>
                    <Education education={profile.education} />
                  </Fragment>
                )}
              </CardBody>
              <GridContainer justify="center">
                <CardFooter>
                  <DashboardActions />
                  <Button
                    color="danger"
                    onClick={() => deleteAccount()}
                    size="sm"
                  >
                    <RemoveIcon /> Delete My Account
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

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
