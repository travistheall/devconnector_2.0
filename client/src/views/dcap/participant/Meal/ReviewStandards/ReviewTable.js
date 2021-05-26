/* eslint-disable */ 
import React, { useState, useEffect } from 'react';
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
import Trow from './Trow';

const useStyles = makeStyles(styles);

const ReviewTable = ({ headCells, mealportions, updateMealPortions }) => {
  const classes = useStyles();
  const u1 = mealportions !== undefined ? mealportions.filter(p=>p["user"]==="609232c6d50a347264bea31d") : [];
  const u2 = mealportions !== undefined ? mealportions.filter(p=>p["user"]==="60922cbfc8ce860fe48126b5") : [];
  const [formData, setFormData] = useState(u1);

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

  useEffect(() => {
    let u1_items = [...u1];
    u1.map((u1_item, i)=>{
        let u2_item = u2.filter(y=>y['food']['_id']===u1_item['food']['_id'])
        u1_item['taken_u2'] = u2_item[0]["taken"]
        u1_item['returned_u2'] = u2_item[0]["returned"]
        u1_items[i] = u1_item;
    });
    setFormData(u1_items)
  }, [mealportions]);

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
            <Trow
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

ReviewTable.propTypes = {
  headCells: PropTypes.arrayOf(PropTypes.object),
  mealportions: PropTypes.array,
  updateMealPortions: PropTypes.func
};

export default connect(null, {updateMealPortions})(ReviewTable);
