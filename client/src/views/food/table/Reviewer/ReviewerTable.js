import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'layout/Spinner';
import FoodTable from '../components/FoodTable';


const ReviewerTable = ({rows}) => {
  const loading = false;
  const headCells = [
    { id: 'Code', numeric: true, disablePadding: true, label: 'Food Code' },
    { id: 'Desc', numeric: false, disablePadding: false, label: 'Description' },
    { id: 'AddDescs', numeric: false, disablePadding: false, label: 'Additional Descriptions' }
  ];

  return loading || rows === undefined ? (
    <Spinner />
  ) : (
    <FoodTable headCells={headCells} rows={rows} />
  );
}

ReviewerTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object)
};

export default ReviewerTable;
