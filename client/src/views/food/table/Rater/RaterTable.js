import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'layout/Spinner';
import FoodTable from './FoodTable';

const RaterTable = ({ rows }) => {
  const loading = false;
  const headCells = [
    { id: 'Code', label: 'Food Code', form: false },
    { id: 'Desc', label: 'Description', form: false },
    { id: 'AddDescs', label: 'Additional Descriptions', form: false },
    { id: 'PortDesc', label: 'Portion Description', form: true },
    { id: 'Taken', label: 'Taken Serving', form: true },
    { id: 'Returned', label: 'Returned Serving', form: true }
  ];


  return loading || rows === undefined ? (
    <Spinner />
  ) : (
    <FoodTable headCells={headCells} rows={rows} />
  );
};

RaterTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object)
};

export default RaterTable;
