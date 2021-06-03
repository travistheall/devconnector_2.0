//import React, { useEffect } from 'react';
import React from 'react';
//import { useState } from 'react';
//UI Elements
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
//import ImageGallery from 'react-image-gallery';
import { makeStyles } from '@material-ui/core/styles';
// My Sections
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import PropTypes from 'prop-types';

const styles = {
  productContainer: {
    '& .image-gallery-slide img': {
      borderRadius: '3px',
      maxWidth: '300px',
      height: 'auto'
    },
    '& .image-gallery-swipe': {
      margin: '30px 0px',
      overflow: 'hidden',
      width: '100%',
      height: 'auto',
      textAlign: 'center'
    },
    '& .image-gallery-thumbnails > .image-gallery-thumbnails-container a': {
      '&.active > div': {
        opacity: '1',
        borderColor: '#DDDDDD'
      },
      '& > div': {
        width: '80%',
        maxWidth: '85px',
        margin: '0 auto',
        padding: '8px',
        display: 'block',
        border: '1px solid transparent',
        background: 'transparent',
        borderRadius: '3px',
        opacity: '.8'
      },
      '& > div img': {
        borderRadius: '3px',
        width: '100%',
        height: 'auto',
        textAlign: 'center'
      }
    }
  }
};

const useStyles = makeStyles(styles);


/* 
  const MealPictures = ({ participant, meal }) => {
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    setImgs(
      meal['photos'].map((photo) => ({
        original: photo,
        thumbnail: photo
      }))
    );
  }, [participant, meal]);
  <ImageGallery
   showFullscreenButton={false}
   showPlayButton={false}
   startIndex={0}
   items={imgs}
 /> */


const MealPictures = ({ meal }) => {
  const classes = useStyles();


  return (
    <Card>
      <CardHeader color="primary">{meal['_id']}</CardHeader>
      <div className={classes.productContainer}>
        <GridContainer>
          <GridItem xs={12} sm={12}>

            <p>{meal['desc']}</p>
            <ul>
              {meal['notes'].map((note, ind) => (
                <li key={ind}>{note}</li>
              ))}
            </ul>
          </GridItem>
        </GridContainer>
      </div>
    </Card>
  );
};

MealPictures.propTypes = {
  meal: PropTypes.object,
  participant: PropTypes.object
};

export default MealPictures;
