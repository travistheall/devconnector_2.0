import React from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import GridItem from 'components/Grid/GridItem.js';
import sectionTextStyle from 'assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js';

const useStyles = makeStyles(sectionTextStyle);

export default function Conclusion() {
  const classes = useStyles();
  return (
    <GridItem xs={12} sm={8} md={8}>
      <h3 className={classes.title}>Conclusion</h3>
      <p>
        I think it{"'"}s important to consider both the most common restaurants
        in each area and the most popular restaurants in each area. A potential
        restaurant opener would want to avoid opening in clusters where their
        restaurant is too common. They would also want to open in a location
        where their restaurant type is more popular. There is much more work
        that can be done to analyze this data further such as looking into which
        specific restaurants are popular or common in each neighborhood.
      </p>
    </GridItem>
  );
}
