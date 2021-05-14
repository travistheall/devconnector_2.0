/*eslint-disable*/

import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';
// core components
import Parallax from 'components/Parallax/Parallax.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
// sections for this page
import SectionText1 from './Sections/SectionText1.js';
import SectionBlogInfo from './Sections/SectionBlogInfo.js';
import SectionComments from './Sections/SectionComments.js';
import SectionSimilarStories from './Sections/SectionSimilarStories.js';

import blogPostPageStyle from 'assets/jss/material-kit-pro-react/views/blogPostPageStyle.js';
import br from 'assets/img/br.jpg';
const useStyles = makeStyles(blogPostPageStyle);

export default function BlogPostPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Parallax image={br} filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>Coursera Capstone Post</h1>
              <h4 className={classes.subtitle}>August 5, 2020</h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionText1 />
        </div>
      </div>
    </div>
  );
}
