import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from 'actions/post';
import Spinner from 'layout/Spinner';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import SectionPost from './SectionPost';
import PubPost from './PubPost';

const SectionAll = ({
  auth: { isAuthenticated, loading },
  getPosts,
  post: { posts }
}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <GridContainer>
      {posts.map((post) => (
        <GridItem xs={12} sm={6} md={6} key={post.id}>
          {loading ? (
            <Spinner />
          ) : isAuthenticated ? (
            <SectionPost post={post} />
          ) : (
            <PubPost post={post} />
          )}
        </GridItem>
      ))}
    </GridContainer>
  );
};

SectionAll.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getPosts })(SectionAll);
