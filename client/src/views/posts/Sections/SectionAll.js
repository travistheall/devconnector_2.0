import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from 'actions/post';

import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import SectionPost from './SectionPost';

const SectionAll = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <GridContainer>
      {posts.map((post) => (
        <GridItem xs={12} sm={6} md={6} key={post.id}>
          <SectionPost post={post} />
        </GridItem>
      ))}
    </GridContainer>
  );
};

SectionAll.defaultProps = {
  showActions: true
};

SectionAll.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(SectionAll);
