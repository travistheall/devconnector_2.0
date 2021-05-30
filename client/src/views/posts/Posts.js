import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'layout/Spinner';

import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import SectionPills from './Sections/SectionPills.js';
import CreatePost from 'forms/post/CreatePost';
import blogPostsPageStyle from 'assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js';

const useStyles = makeStyles(blogPostsPageStyle);

const Posts = ({ auth: { isAuthenticated, loading } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Parallax image={"https://tntheall.s3.amazonaws.com/assets/img/bg10.jpg"} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                Crypto, Programing, Fitness Posts
              </h2>
              <h4 className={classes.title}>
                <i className="fas fa-user" /> Welcome to the community
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          {loading ? (
            <Spinner />
          ) : isAuthenticated ? (
            <CreatePost />
          ) : (
            <Fragment />
          )}
          <SectionPills />
        </div>
      </div>
    </div>
  );
};

Posts.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.component
};
const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Posts);
