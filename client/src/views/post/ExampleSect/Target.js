import React from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import GridItem from 'components/Grid/GridItem.js';
import sectionTextStyle from 'assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js';

const useStyles = makeStyles(sectionTextStyle);

export default function Target() {
  const classes = useStyles();
  return (
    <GridItem xs={12} sm={8} md={8}>
      <h3 className={classes.title}>Target Audience</h3>
      <p>
        {' '}
        Restaurants are a great investment, if planned properly. Unfortunately,
        almost half of all restaurants fail during the first year of opening. My
        target audience would be anyone who is looking to start in the
        restaurant business within Baton Rouge area. There are many factors to
        consider such as location, service style, and the actual food being
        sold.{' '}
      </p>
      <p>
        It is essential to understand the variety of restaurants in each
        neighborhood. Identifying a market gap within a specific neighborhood
        could lead to that restaurant being successful. Versus opening a
        restaurant in a neighborhood that doesn’t need your food and failing.{' '}
      </p>
    </GridItem>
  );
}
