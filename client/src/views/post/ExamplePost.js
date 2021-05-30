import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Parallax from 'components/Parallax/Parallax.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// sections for this page
import SectionText1 from './Sections/SectionText1.js';

import blogPostPageStyle from 'assets/jss/material-kit-pro-react/views/blogPostPageStyle.js';
const useStyles = makeStyles(blogPostPageStyle);

export default function BlogPostPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Parallax image={'https://tntheall.s3.amazonaws.com/assets/img/br.jpg'} filter="dark">
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
