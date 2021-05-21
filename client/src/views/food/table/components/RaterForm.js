import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import Selecter from './Selecter';
import Button from 'components/CustomButtons/Button.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

const RaterForm = ({ row }) => {
  const [formData, setFormData] = useState({
    portion: '',
    taken: '',
    returned: ''
  });
  const { portion, taken, returned } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };

  return (
    <form onSubmit={onSubmit}>
      <TableCell align="right" key={`${row['_id']}-${row[headCell['id']]}`}>
        <Selecter foodid={row['_id']} portion={portion}/>
      </TableCell>
      <TableCell align="right" key={`${row['_id']}-${row[headCell['id']]}`}>
        <CustomInput
          id="taken"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'number',
            name: 'taken',
            value: taken,
            onChange: onChange,
          }}
        />
      </TableCell>
      <TableCell align="right" key={`${row['_id']}-${row[headCell['id']]}`}>
        <CustomInput
          id="returned"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'number',
            name: 'returned',
            value: returned,
            onChange: onChange,
          }}
        />
      </TableCell>
      <div className={classes.textCenter}>
        <Button simple color="primary" size="lg" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

RaterForm.propTypes = {
  headCells: PropTypes.arrayOf(PropTypes.object)
};

export default RaterForm;
