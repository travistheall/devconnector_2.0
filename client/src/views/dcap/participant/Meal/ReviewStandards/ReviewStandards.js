import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'layout/Spinner';
import ReviewTable from './ReviewTable';
import { getMealPortions } from 'actions/mealportion';

const ReviewStandards = ({
  meal,
  getMealPortions,
  mealportion: { mealPortions, loading }
}) => {
  const headCells = [
    { id: 'Code', label: 'Food Code', form: false },
    { id: 'Desc', label: 'Description', form: false },
    { id: 'PortDesc', label: 'Portion Description', form: true },
    { id: 'Taken_U1', label: 'Taken Serving U1', form: true },
    { id: 'Returned_U1', label: 'Returned Serving U1', form: true },
    { id: 'Taken_U2', label: 'Taken Serving U2', form: true },
    { id: 'Returned_U2', label: 'Returned Serving U2', form: true }
  ];
  useEffect(() => {
    getMealPortions(meal['_id']);
  }, [getMealPortions, meal]);



  return loading || mealPortions === undefined ? (
    <Spinner />
  ) : (
    <ReviewTable headCells={headCells} mealportions={mealPortions} />
  );
};

ReviewStandards.propTypes = {
  meal: PropTypes.object,
  getMealPortions: PropTypes.func.isRequired,
  mealportion: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  mealportion: state.mealportion
});

export default connect(mapStateToProps, { getMealPortions })(ReviewStandards);
