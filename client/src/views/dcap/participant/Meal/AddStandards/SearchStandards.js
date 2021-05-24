import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchFoods } from 'actions/food';
import Spinner from 'layout/Spinner';
import AddStandardsTable from './AddStandardsTable';

const SearchStandards = ({ searchTerm, searchFoods, food: { foods, loading }, meal }) => {
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
    <AddStandardsTable headCells={headCells} rows={foods} meal={meal} />
  );
};

SearchStandards.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchFoods: PropTypes.func.isRequired,
  food: PropTypes.object,
  meal: PropTypes.object
};

const mapStateToProps = (state) => ({
  food: state.food
});

export default connect(mapStateToProps, { searchFoods })(SearchStandards);
