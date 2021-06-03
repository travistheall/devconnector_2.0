import React, { useEffect } from 'react';
//UI Elements
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// My Sections
import { getMealsByParticipant } from 'actions/meal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MealPictures from './MealPictures';
import MealStandards from './MealStandards';

const Meals = ({
  participant,
  getMealsByParticipant,
  meal: { meals, loading }
}) => {
  useEffect(() => {
    getMealsByParticipant(participant['_id']);
  }, [participant, getMealsByParticipant]);

  return loading || meals === null ? (
    <></>
  ) : (
    meals.map((meal) => (
      <GridContainer key={meal['_id']}>
        <GridItem xs={6} sm={6}>
          <MealPictures meal={meal} />
        </GridItem>
        <GridItem xs={6} sm={6}>
          <MealStandards meal={meal} participant={participant} />
        </GridItem>
      </GridContainer>
    ))
  );
};

Meals.propTypes = {
  getMealsByParticipant: PropTypes.func.isRequired,
  meal: PropTypes.object,
  participant: PropTypes.object
};

const mapStateToProps = (state) => ({
  meal: state.meal
});

export default connect(mapStateToProps, { getMealsByParticipant })(Meals);
