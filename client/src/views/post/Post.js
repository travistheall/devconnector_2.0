import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';

import CreateComment from 'forms/post/CreateComment';
import SectionComment from './Sections/SectionComment';
import SectionText from './Sections/SectionText';
import { getPost } from 'actions/post';

import { makeStyles } from '@material-ui/core/styles';

// core components
import Parallax from 'components/Parallax/Parallax.js';

import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
// sections for this page

import blogPostPageStyle from 'assets/jss/material-kit-pro-react/views/blogPostPageStyle.js';
import bg5 from 'assets/img/bg5.jpg';
const useStyles = makeStyles(blogPostPageStyle);

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);
  const classes = useStyles();

  return (
    <div>
      <Parallax image={bg5} filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>Add a title property</h1>
              <h4 className={classes.subtitle}>And a subtitle property</h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          {loading || post === null ? (
            <Spinner />
          ) : (
            <Fragment>
              <Button to="/posts" color="info" round>
                Back To Posts
              </Button>
              <SectionText post={post} />
              <div className="comments">
                {post.comments.map((comment) => (
                  <SectionComment
                    key={comment._id}
                    comment={comment}
                    postId={post._id}
                  />
                ))}
                <CreateComment postId={post._id} />
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  match: PropTypes.object
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
