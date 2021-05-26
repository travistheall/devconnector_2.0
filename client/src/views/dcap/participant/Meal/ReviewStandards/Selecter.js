import React, { useState, useEffect } from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getFoodPortions } from 'actions/foodportions';
import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from 'assets/jss/material-kit-pro-react/customSelectStyle.js';

const useStyles = makeStyles(styles);


const Selecter = ({
  i,
  portionFormData,
  handleChange,
  setPW
}) => {
  const [portionsSelecter, setPortionsSelecter] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = portionFormData === undefined ? "" : `api/foodport/foodid/${portionFormData['food']['_id']}`;
  const classes = useStyles();
  const handleSelect = (e, i) => {
    handleChange(e, i)
    setPW(portionsSelecter[i]['Weight'])
  }
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await axios(url);
      setPortionsSelecter(result.data);
      setLoading(false);
    };
    fetchData();    
  }, [portionFormData]);

  return loading || portionsSelecter === undefined || portionFormData === undefined ? (
    <p>...</p>
  ) : (
    <FormControl fullWidth className={classes.selectFormControl}>
      <Select
        id={`${portionFormData['food']['_id']}`}
        MenuProps={{
          className: classes.selectMenu
        }}
        classes={{
          select: classes.select
        }}
        value={portionFormData['portion'] ? portionFormData['portion'] : ""}
        onChange={e => handleSelect(e, i)}
        inputProps={{
          name: 'portion',
          id: `portion-${i}`
        }}
      >
        {portionsSelecter.map((portion) => {
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
  i: PropTypes.number,
  handleChange: PropTypes.func,
  portionFormData: PropTypes.object,
  portion: PropTypes.object,
  getFoodPortions: PropTypes.func.isRequired,
  foodportions: PropTypes.object,
  setPW: PropTypes.func
};

const mapStateToProps = (state) => ({
  foodportions: state.foodportions
});

export default connect(mapStateToProps, { getFoodPortions })(Selecter);
