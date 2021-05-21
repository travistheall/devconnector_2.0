import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import FilterListIcon from '@material-ui/icons/FilterList';
import styles from "assets/jss/material-kit-pro-react/components/tableStyle.js";

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight: {
    color: theme.palette.success.main,
    backgroundColor: lighten(theme.palette.success.light, 0.85)
  },
  title: {
    flex: '1 1 100%'
  }
}));

const FoodTableToolbar = ({ numSelected }) => {
  const classes = useToolbarStyles(styles);
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Add To Meal">
          <IconButton aria-label="add">
            <Icon className="fa fa-plus-circle" style={{ color: green[500] }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

FoodTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export default FoodTableToolbar;
