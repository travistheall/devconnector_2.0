import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchFoods } from 'actions/food';
import Spinner from 'layout/Spinner';
import FoodTable from './FoodTable';

const SATable = ({ searchTerm, searchFoods, food: { foods, loading } }) => {
  useEffect(() => {
    searchFoods(searchTerm);
  }, [searchTerm, searchFoods]);

  const headCells = [
    { id: 'Code', numeric: true, disablePadding: true, label: 'Food Code' },
    { id: 'Desc', numeric: false, disablePadding: false, label: 'Description' },
    {
      id: 'WWEIA_Cat_Num',
      numeric: true,
      disablePadding: false,
      label: 'Category Number'
    },
    {
      id: 'WWEIA_Cat_Desc',
      numeric: false,
      disablePadding: false,
      label: 'Category Description'
    },
    {
      id: 'AddDescs',
      numeric: false,
      disablePadding: false,
      label: 'Additional Descriptions'
    }
  ];

  return loading || foods === undefined ? (
    <Spinner />
  ) : (
    <FoodTable headCells={headCells} rows={foods} />
  );
};

SATable.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchFoods: PropTypes.func.isRequired,
  food: PropTypes.object
};

const mapStateToProps = (state) => ({
  food: state.food
});

export default connect(mapStateToProps, { searchFoods })(SATable);
