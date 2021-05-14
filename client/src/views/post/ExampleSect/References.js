import React from 'react';
// @material-ui/icons
import GridItem from 'components/Grid/GridItem.js';

export default function References() {
  return (
    <GridItem xs={12} sm={8} md={8}>
      <ol>
        <li>
          <a
            href="https://opendata.arcgis.com/datasets/7c5e82ef83834de2ad2478efc86744ae_0.geojson"
            target="_blank"
            rel="noreferrer"
          >
            https://opendata.arcgis.com/datasets/7c5e82ef83834de2ad2478efc86744ae_0.geojson
          </a>
        </li>
        <li>
          <a
            href="https://www.zillow.com/baton-rouge-la/home-values/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.zillow.com/baton-rouge-la/home-values/
          </a>
        </li>
        <li>
          <a href="https://foursquare.com/" target="_blank" rel="noreferrer">
            https://foursquare.com/
          </a>
        </li>
        <li>
          <a
            href="https://github.com/travistheall/Coursera_Capstone"
            target="_blank"
            rel="noreferrer"
          >
            My Github Repo
          </a>
        </li>
      </ol>
    </GridItem>
  );
}
