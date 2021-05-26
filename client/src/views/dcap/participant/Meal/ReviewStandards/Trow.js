import React, { useState} from 'react';
import TableCell from '@material-ui/core/TableCell';
import Selecter from './Selecter';
import CustomInput from 'components/CustomInput/CustomInput';

import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';


const Trow = ({ portion, handleChange, i }) => {
  const [pw, setPW] = useState(null);
  return (
      <TableRow key={portion['_id']}>
        <TableCell component="th" scope="row">
          {portion['food']['Code']}
        </TableCell>
        <TableCell align="right">{portion['food']['Desc']}</TableCell>
        <TableCell align="right">
          <Selecter
            portionFormData={portion}
            pw={pw}
            setPW={setPW}
            i={i}
            handleChange={handleChange}
          />
        </TableCell>
        <TableCell align="right">
          <CustomInput
            id={`${portion['_id']}-taken`}
            type={'number'}
            formControlProps={{ fullWidth: true }}
            inputProps={{
              placeholder: 'taken',
              name: 'taken',
              value: portion['taken'],
              onChange: (e) => handleChange(e, i)
            }}
          />
        </TableCell>
        <TableCell align="right">
          <CustomInput
            id={`${portion['_id']}-returned`}
            type={'number'}
            formControlProps={{ fullWidth: true }}
            inputProps={{
              placeholder: 'returned',
              name: 'returned',
              value: portion['returned'],
              onChange: (e) => handleChange(e, i)
            }}
          />
        </TableCell>
        <TableCell align="right">
          <CustomInput
            id={`${portion['_id']}-taken2`}
            type={'number'}
            formControlProps={{ fullWidth: true }}
            inputProps={{
              placeholder: 'taken u2',
              name: 'taken_u2',
              value: portion['taken_u2'],
              onChange: (e) => handleChange(e, i)
            }}
          />
        </TableCell>
        <TableCell align="right">
          <CustomInput
            id={`${portion['_id']}-returned2`}
            type={'number'}
            formControlProps={{ fullWidth: true }}
            inputProps={{
              placeholder: 'returned u2',
              name: 'returned_u2',
              value: portion['returned_u2'],
              onChange: (e) => handleChange(e, i)
            }}
          />
        </TableCell>
      </TableRow>
  );
};

Trow.propTypes = {
  portion: PropTypes.object,
  handleChange: PropTypes.func,
  i: PropTypes.number
};

export default Trow;
