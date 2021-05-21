import React, { useState, useEffect } from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getFoodPortions } from 'actions/foodportions';
import Spinner from 'layout/Spinner';
import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from 'assets/jss/material-kit-pro-react/customSelectStyle.js';

const useStyles = makeStyles(styles);


const Selecter = ({
  foodid,
}) => {
  const [simpleSelect, setSimpleSelect] = useState('');
  const [portions, setPortions] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = `api/foodport/foodid/${foodid}`;
  const handleSimple = (event) => {
    setSimpleSelect(event.target.value);
  };
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await axios(url);
      setPortions(result.data);
      setLoading(false);
    };
    fetchData();    
  }, [foodid]);

  return loading || portions === undefined ? (
    <Spinner />
  ) : (
    <FormControl fullWidth className={classes.selectFormControl}>
      <Select
        MenuProps={{
          className: classes.selectMenu
        }}
        classes={{
          select: classes.select
        }}
        value={simpleSelect}
        onChange={handleSimple}
        inputProps={{
          id: `${foodid}`
        }}
      >
        {portions.map((portion) => {
          return (
            <MenuItem
              key={`${portion['_id']}`}
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value={portion['_id']}
            >
              {portion['PortDesc']} - {portion['Weight']} g
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

Selecter.propTypes = {
  foodid: PropTypes.string,
  getFoodPortions: PropTypes.func.isRequired,
  foodportions: PropTypes.object
};

const mapStateToProps = (state) => ({
  foodportions: state.foodportions
});

export default connect(mapStateToProps, { getFoodPortions })(Selecter);
