import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// Material UI
//import { makeStyles } from '@material-ui/core/styles';
//UI Elements
import EnhancedTable from 'components/EnhancedTable/EnhancedTable';
//static files
//import style from 'assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.js';
//redux action
import { connect } from 'react-redux';
import { searchFoods } from 'actions/food';
import Spinner from 'layout/Spinner';
//const useStyles = makeStyles(style);

const FoodTable = ({ searchTerm, searchFoods, food: { foods, loading } }) => {
  //const classes = useStyles();
  useEffect(() => {
    searchFoods(searchTerm);
  }, [searchTerm, searchFoods]);
  return loading || foods === undefined ? (
    <Spinner />
  ) : (
    <EnhancedTable rows={Object.values(foods)} />
  );
};

FoodTable.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchFoods: PropTypes.func.isRequired,
  food: PropTypes.object
};

const mapStateToProps = (state) => ({
  food: state.food
});

export default connect(mapStateToProps, { searchFoods })(FoodTable);
