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

const FoodTable = ({ headCells, rows }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    foodid: { portion: 'portionid', taken: 'takne', returned: 'returned' }
  });
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
          {rows.map((row, index) => (
            <TableRow key={`${row.name}-${index}`}>
              {headCells.map((cell, index) =>
                cell['form'] ? (
                  cell['id'] == 'PortDesc' ? (
                    <TableCell align="right" key={`${row['_id']}-${index}`}>
                      <Selecter
                        foodid={row['_id']}
                        setFormData={setFormData}
                        formData={formData}
                      />
                    </TableCell>
                  ) : (
                    <TableCell align="right" key={`${row['_id']}-${index}`}>
                      <CustomInput
                        id={cell['id']}
                        formControlProps={{ fullWidth: true }}
                        inputProps={{
                          placeholder: cell['label'],
                          type: 'number',
                          name: cell['id'],
                          value: formData,
                          onChange: onChange
                        }}
                      />
                    </TableCell>
                  )
                ) : cell['id'] == 'Code' ? (
                  <TableCell
                    component="th"
                    scope="row"
                    key={`${row['_id']}-${index}`}
                  >
                    {row[cell['id']]}
                  </TableCell>
                ) : (
                  <TableCell align="right" key={`${row['_id']}-${index}`}>
                    {row[cell['id']]}
                  </TableCell>
                )
              )}
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

FoodTable.propTypes = {
  headCells: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object)
};

export default FoodTable;
