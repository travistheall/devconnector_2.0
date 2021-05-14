import React from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import GridItem from 'components/Grid/GridItem.js';
import sectionTextStyle from 'assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js';

const useStyles = makeStyles(sectionTextStyle);

export default function Intro() {
  const classes = useStyles();
  return (
    <GridItem xs={12} sm={8} md={8}>
      <h3 className={classes.title}>
        Housing Sales Prices & Venues Data Analysis of Baton Rouge, LA
      </h3>
      <p>
        Baton Rouge is the capital city of Louisiana. There are 220,236 people
        living in Baton Rouge alone, making it the second largest city in
        Louisiana behind New Orleans. There are over 800,000 people living in
        the Baton Rouge metropolitan area, and the population has grown 3.4%
        within the past 10 years. I will be focusing on East Baton Rouge Parish,
        the most populated parish in the Baton Rouge Metropolitan area. **
      </p>
      <br />
      <p>
        It is home to Louisiana State University (LSU), one of the top-rated
        universities in Louisiana. LSU is very cheap for both in and out of
        state students combined with having a high acceptance rate means there
        are always new students moving into Baton Rouge. Freshman are required
        to live on campus their first year. It is also the 9th largest port in
        the United States. Workers come and go from the Mississippi River with
        goods to ship and hungry bellies every day.
      </p>
      <br />
      <p>
        All these residents and workers need a place to eat. Students get tired
        of dining halls and don{"'"}t have kitchens in their dorms. Shipping
        workers are excited to have a real meal after coming from overseas.
        Regular working-class adults sometimes forget or are too lazy to cook
        for themselves. Louisiana has a very diverse food culture and almost all
        styles of food have a place in Baton Rouge.
      </p>
    </GridItem>
  );
}
