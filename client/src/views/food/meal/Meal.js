import React, { useEffect } from 'react';
import { useState } from 'react';
//UI Elements
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import ImageGallery from 'react-image-gallery';
import { makeStyles } from '@material-ui/core/styles';
// My Sections
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import { getMealsByParticipant } from 'actions/meal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const Meal = ({
  participant,
  getMealsByParticipant,
  meal: { meals, loading }
}) => {
  const classes = useStyles();
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    getMealsByParticipant(participant['_id']);
    loading
      ? setImgs([])
      : setImgs(
          meals[0]['photos'].map((photo) => ({
            original: photo,
            thumbnail: photo
          }))
        );
    console.log(imgs);
  }, [loading, participant, getMealsByParticipant]);

  return (
    <Card>
      <CardHeader color="primary">
        {loading ? <></> : meals[0]['_id']}
      </CardHeader>
      <div className={classes.productContainer}>
        <GridContainer>
          <GridItem xs={12} sm={12}>
            {loading ? (
              <></>
            ) : (
              <>
                <ImageGallery
                  showFullscreenButton={false}
                  showPlayButton={false}
                  startIndex={0}
                  items={imgs}
                />
                <p>{meals[0]['desc']}</p>
              </>
            )}
          </GridItem>
        </GridContainer>
      </div>
    </Card>
  );
};

Meal.propTypes = {
  getMealsByParticipant: PropTypes.func.isRequired,
  meal: PropTypes.object,
  participant: PropTypes.object
};

const mapStateToProps = (state) => ({
  meal: state.meal
});

export default connect(mapStateToProps, { getMealsByParticipant })(Meal);
