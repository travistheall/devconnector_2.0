import React from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
// @material-ui/icons
import GridItem from 'components/Grid/GridItem.js';
import sectionTextStyle from 'assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js';
import GridContainer from 'components/Grid/GridContainer';

const useStyles = makeStyles(sectionTextStyle);

export default function Results() {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={10} md={10} className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={10} md={10}>
            <h3 className={classes.title}>Results</h3>
            <p>
              I used the python folium library to visualize geographic details
              of Baton Rouge and its neighborhoods.
            </p>
            <br />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={5} sm={5} md={5}>
            <h3 className={classes.title}>Baton Rouge Neighborhoods</h3>
            <img src={"https://tntheall.s3.amazonaws.com/assets/data/foliummap.PNG"} alt="folium map" className={imgClasses} />
            <p>
              A map created from geospatial data of the East Baton Rouge Area
            </p>
            <a
              href="https://opendata.arcgis.com/datasets/7c5e82ef83834de2ad2478efc86744ae_0.geojson"
              target="_blank"
              rel="noreferrer"
            >
              Housing Data
            </a>
          </GridItem>
          <GridItem xs={5} sm={5} md={5}>
            <h3 className={classes.title}>Pandas Data Frame Head</h3>

            <img
              src={"https://tntheall.s3.amazonaws.com/assets/data/avgCoordDataFrame.PNG"}
              alt="Pandas Data Frame Coordinates Head"
              className={imgClasses}
            />
            <p>
              A map created from geospatial data of the East Baton Rouge Area
            </p>
            <a
              href="https://opendata.arcgis.com/datasets/7c5e82ef83834de2ad2478efc86744ae_0.geojson"
              target="_blank"
              rel="noreferrer"
            >
              Housing Data
            </a>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={10} md={10}>
            <p>
              I utilized the Foursquare API to explore the restaurants in each
              neighborhood and segment them. I designed the limit as 50 venues.
              I used the section {'"'}food{'"'} and sorted by popularity. The
              radius is the maximum distance between the two geolocations
              converted to meters from each neighborhood based on their given
              latitude and longitude information. The radius is the maximum
              distance between the two geolocations converted to meters from
              each neighborhood based on their given latitude and longitude
              information.
            </p>
            <p>
              The search resulted in 1514 venues with 57 unique Restaurant
              Categories
            </p>
            <p>
              Each of these results was run through a KMeans clustering
              algorithm. The best K was determined using the elbow method. 3
              clusters was determined to be the best grouping.
            </p>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={5} sm={5} md={5}>
            <h3>Elbow Method using distortion</h3>

            <img
              src={"https://tntheall.s3.amazonaws.com/assets/data/elbowDistortion.PNG"}
              alt="eblow method using distortion"
              className={imgClasses}
            />
          </GridItem>
          <GridItem xs={5} sm={5} md={5}>
            <h3>Elbow Method using intertia</h3>
            <img
              src={"https://tntheall.s3.amazonaws.com/assets/data/elbowIntertia.PNG"}
              alt="eblow method using intertia"
              className={imgClasses}
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={10} md={10}>
            <h3>Baton Rouge Neighborhoods Most Common Restaurants Clusters</h3>
            <img
              src={"https://tntheall.s3.amazonaws.com/assets/data/foliumCluster.PNG"}
              className={imgClasses}
              alt="Map of Baton Rouge Neighborhood Clusters"
            />
            <p>
              A map created from K-means clustering of the East Baton Rouge
              Area. The Zillow Housing Score was added to make a Cholorpleth
              map. Data could not be obtained for the black neighborhoods. The
              darker green neighborhoods where housing is more expensive. While
              the lighter green neighborhoods are cheaper.
            </p>
            <a
              href="https://www.zillow.com/baton-rouge-la/home-values/"
              target="_blank"
              rel="noreferrer"
            >
              Housing Data
            </a>
            <a
              href="https://github.com/travistheall/Coursera_Capstone/blob/master/notebooks/Api%20Popular%20Restaurants.ipynb"
              target="_blank"
              rel="noreferrer"
            >
              Jupytr Notebook
            </a>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
        <GridItem xs={3} sm={3} md={3}>
            <h3>Cluster 0 (Red Dots) Common Categories</h3>
            <img
              src={"https://tntheall.s3.amazonaws.com/assets/data/MostCommonCluster0.PNG"}
              alt="Cluster 0 bar graph"
              className={imgClasses}
            />
            <p>
              Most Common Restaurants in this cluster are primarily American
              Restaurants and burger joints. These are located in the Northern
              Most neighborhoods and the Southern half of Baton Rouge. This is
              located in the area where the average housing index is the highest
              at $218,431
            </p>
          </GridItem>
          <GridItem xs={3} sm={3} md={3}>
            <h3>Cluster 1 (South Purple Dots) Common Categories</h3>
            <img
              src={"https://tntheall.s3.amazonaws.com/assets/data/MostCommonCluster1.PNG"}
              alt="Cluster 1 bar graph"
              className={imgClasses}
            />
            <p>
              Most Common Restaurants in this cluster are {'"'}Food{'"'} This
              means that they are not typical restaurants. These are places that
              serve food, but aren{"'"}t restaurants like a food bank. This is
              located in the area where the average housing index is the lowest
              at $77,200
            </p>
          </GridItem>
          <GridItem xs={3} sm={3} md={3}>
            <h3>Cluster 2 (Greene Dots) Common Categories</h3>
            <img
              src={"https://tntheall.s3.amazonaws.com/assets/data/MostCommonCluster2.PNG"}
              alt="Cluster 2 bar graph"
              className={imgClasses}
            />
            <p>
              Most Common Restaurants in this cluster are Fast Food Take Out
              locations. This is located in the area where the average housing
              index is in the middle at $92,246
            </p>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={10} md={10}>
            <h3>Baton Rouge Neighborhoods Popular Restaurants Clusters</h3>
            <img src={"https://tntheall.s3.amazonaws.com/assets/data/foliumPop.PNG"} className={imgClasses} />
            <p>
              A map created from K-means clustering of the East Baton Rouge
              Area. The Zillow Housing Score was added to make a Cholorpleth
              map. Data could not be obtained for the black neighborhoods. The
              darker green neighborhoods where housing is more expensive. While
              the lighter green neighborhoods are cheaper.
            </p>
            <a
              href="https://www.zillow.com/baton-rouge-la/home-values/"
              target="_blank"
              rel="noreferrer"
            >
              Zillow Data (2)
            </a>
            <a
              href="https://github.com/travistheall/Coursera_Capstone/blob/master/notebooks/Api%20Popular%20Restaurants.ipynb"
              target="_blank"
              rel="noreferrer"
            >
              Jupyter Notebook
            </a>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={3} sm={3} md={3}>
            <h3>Popular Cluster 0 bar graph</h3>

            <img
              src={"https://tntheall.s3.amazonaws.com/assets/data/popClust0.PNG"}
              alt="Popular Cluster 0 bar graph"
              className={imgClasses}
            />
            <p>
              Most Popular Restaurants in this cluster are primarily Italian
              Restaurants and burger joints. These are located in the Northern
              Most neighborhoods and the Southern half of Baton Rouge. This is
              located in the area where the average housing index is in the
              middle at $166,025
            </p>
          </GridItem>
          <GridItem xs={3} sm={3} md={3}>
            <h3>Popular Cluster 1 bar graph</h3>
            <img
              src={"https://tntheall.s3.amazonaws.com/assets/data/popClust1.PNG"}
              alt="Popular Cluster 1 bar graph"
              className={imgClasses}
            />
            <p>
              Most Common Restaurants in this cluster are Fast Food restaurants.
              This is located in the area where the average housing index is the
              highest at $192,875
            </p>
          </GridItem>
          <GridItem xs={3} sm={3} md={3}>
            <h3>Popular Cluster 2 bar graph</h3>
            <img
              src={"https://tntheall.s3.amazonaws.com/assets/data/popClust2.PNG"}
              alt="Popular Cluster 2 bar graph"
              className={imgClasses}
            />
            <p>
              Most Common Restaurants in this cluster are American Restaurants.
              This is located in the area where the average housing index is in
              the middle at $66,175
            </p>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  );
}
