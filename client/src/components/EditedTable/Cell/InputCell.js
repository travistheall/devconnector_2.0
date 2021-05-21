import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomInput from 'components/CustomInput/CustomInput';

export default function InputCell({ row, row_key, key }) {
  const [val, setVal] = useState(row[row_key]);
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <CustomInput
      key={key}
      id="regular"
      inputProps={{
        placeholder: val,
        value: val,
        onChange: handleChange
      }}
      formControlProps={{
        fullWidth: true
      }}
    />
  );
}

InputCell.propTypes = {
  row: PropTypes.object,
  row_key: PropTypes.string,
  key: PropTypes.number
};
