import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomInput from 'components/CustomInput/CustomInput';

const RetCell = ({ editing, prop }) => {
  const [cellVal, setCellVal] = useState(prop);
  const handleChange = (e) => {
    setCellVal(e.target.value);
  };
  return editing ? (
    <CustomInput
      id="regular"
      inputProps={{
        placeholder: cellVal,
        value: cellVal,
        onChange: handleChange
      }}
      formControlProps={{
        fullWidth: true
      }}
    />
  ) : (
    cellVal 
  );
};

RetCell.propTypes = {
  editing: PropTypes.bool,
  prop: PropTypes.string
};

export default RetCell;
