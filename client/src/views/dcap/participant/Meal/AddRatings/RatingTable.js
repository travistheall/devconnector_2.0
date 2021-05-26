/* eslint-disable */ 
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateMealPortions } from 'actions/mealportion';
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
import DDRow from './DDRow';

const useStyles = makeStyles(styles);

const RatingTable = ({ headCells, mealportions, updateMealPortions }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState(mealportions);

  const makeFoodJustId = (item, old, id) => {
    let temp = Object.assign({}, item);
    if (temp.food === old) {
        temp.food = id;
    }
    return temp}

  const onClick = () => {
    let nfd = formData.map(x => makeFoodJustId(x, x['food'], x['food']['_id']))
    updateMealPortions(nfd);
  };
  
  const handleChange = (e, i) => {
    let items = [...formData];
    let item = { ...items[i] };
    e.target.name === 'taken' || e.target.name === 'returned'
      ? (item[e.target.name] = parseFloat(e.target.value))
      : (item[e.target.name] = e.target.value);
    items[i] = item;
    setFormData(items);
  };

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
          {formData.map((portion, i) => (
            <DDRow
              portion={portion}
              handleChange={handleChange}
              i={i}
              key={i}
            />
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
  mealportions: PropTypes.array,
  updateMealPortions: PropTypes.func
};

export default connect(null, {updateMealPortions})(RatingTable);
