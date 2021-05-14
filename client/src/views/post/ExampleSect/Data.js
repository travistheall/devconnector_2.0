import React from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import GridItem from 'components/Grid/GridItem.js';
import sectionTextStyle from 'assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js';

const useStyles = makeStyles(sectionTextStyle);

export default function Data() {
  const classes = useStyles();
  return (
    <GridItem xs={12} sm={8} md={8}>
      <h3 className={classes.title}>Data</h3>
      <p>
        Restaurant location is a complex issue in order to answer this I will
        use Zillow{' '}
        <span>
          <a
            href="https://www.zillow.com/baton-rouge-la/home-values/"
            target="_blank"
            rel="noreferrer"
          >
            (1)
          </a>
        </span>
        , a popular house purchasing website, data to get housing information
        for demographics of each neighborhood.
      </p>
      <p>
        Additionally, I will use the foursquare API{' '}
        <span>
          <a href="https://foursquare.com/" target="_blank" rel="noreferrer">
            (2)
          </a>
        </span>{' '}
        to get a better understanding of the competition within each area by
        looking at the types of restaurants that are available in each
        neighborhood to see which is common and which is popular.
      </p>
      <p>
        Geolocation
        <a
          href="https://opendata.arcgis.com/datasets/7c5e82ef83834de2ad2478efc86744ae_0.geojson"
          target="_blank"
          rel="noreferrer"
        >
          (3)
        </a>
        data was utilized getting the neighborhood latitude and longitude
        coordinates for Baton Rouge.
      </p>
    </GridItem>
  );
}
