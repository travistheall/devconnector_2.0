import React, { useEffect, useState } from 'react';
//import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'layout/Spinner';
import RatingTable from './RatingTable';
import { getMealPortions } from 'actions/mealportion';

const SearchPortions = ({
  meal,
  getMealPortions,
  mealportion: { mealPortions, loading }
}) => {
  const headCells = [
    { id: 'Code', label: 'Food Code', form: false },
    { id: 'Desc', label: 'Description', form: false },
    { id: 'AddDescs', label: 'Additional Descriptions', form: false },
    { id: 'PortDesc', label: 'Portion Description', form: true },
    { id: 'Taken', label: 'Taken Serving', form: true },
    { id: 'Returned', label: 'Returned Serving', form: true },
    { id: 'Facts', label: 'Nutrition Facts', form: false }
  ];
  const [portsForTable, setPortsForTable] = useState([])
  useEffect(() => {
    getMealPortions(meal['_id']);
  }, [getMealPortions, meal]);
  useEffect(() => {
    setPortsForTable(mealPortions.filter(p=>p["user"]==="609232c6d50a347264bea31d"))
  }, [mealPortions]);


  return loading || mealPortions === undefined ? (
    <Spinner />
  ) : (
    <RatingTable headCells={headCells} mealportions={portsForTable} />
  );
};

SearchPortions.propTypes = {
  meal: PropTypes.object,
  getMealPortions: PropTypes.func.isRequired,
  mealportion: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  mealportion: state.mealportion
});

export default connect(mapStateToProps, { getMealPortions })(SearchPortions);
