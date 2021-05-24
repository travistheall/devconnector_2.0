import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import Button from 'components/CustomButtons/Button';
import Paper from '@material-ui/core/Paper';
import styles from 'assets/jss/material-kit-pro-react/components/tableStyle.js';
import Selecter from './Selecter';
import CustomInput from 'components/CustomInput/CustomInput';

const useStyles = makeStyles(styles);

const RatingTable = ({ headCells, mealportions }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({});
  const onClick = () => {
    console.log(formData);
  };
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {headCells.map((headCell, index) =>
              headCell['id'] == 'Code' ? (
                <TableCell key={`${headCell['id']}-${index}`}>
                  {headCell['label']}
                </TableCell>
              ) : (
                <TableCell align="right" key={`${headCell['id']}-${index}`}>
                  {headCell['label']}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {mealportions.map((portion) => (
            <TableRow key={portion['_id']}>
              <TableCell component="th" scope="row">
                11000000
              </TableCell>
              <TableCell align="right" />
              <TableCell align="right" />
              <TableCell align="right">
                <Selecter
                  foodid={portion['food']}
                  setFormData={setFormData}
                  formData={formData}
                />
              </TableCell>
              <TableCell align="right">
                <CustomInput
                  id={'taken'}
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                    placeholder: 'taken',
                    type: 'number',
                    name: 'taken',
                    value: formData,
                    onChange: onChange
                  }}
                />
              </TableCell>
              <TableCell align="right">
                <CustomInput
                  id={'returned'}
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                    placeholder: 'returned',
                    type: 'number',
                    name: 'returned',
                    value: formData,
                    onChange: onChange
                  }}
                />
              </TableCell>
            </TableRow>
          ))}

          <TableRow className={classes.right}>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell>
              <Button color={'primary'} onClick={onClick}>
                Submit
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

RatingTable.propTypes = {
  headCells: PropTypes.arrayOf(PropTypes.object),
  mealportions: PropTypes.array
};

export default RatingTable;
