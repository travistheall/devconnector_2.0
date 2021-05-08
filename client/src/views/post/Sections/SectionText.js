import React from 'react';
// nodejs library that concatenates classes
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import sectionTextStyle from 'assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js';

const useStyles = makeStyles(sectionTextStyle);

const SectionText = ({ post: { text } }) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>
            Add a Title to the backend for a post
          </h3>
          <p>{text}</p>
        </GridItem>
      </GridContainer>
    </div>
  );
};

SectionText.propTypes = {
  post: PropTypes.object.isRequired
};

export default SectionText;
