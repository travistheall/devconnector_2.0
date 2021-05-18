import React, { useState } from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import RetCell from '../Cell/RetCell';
import SimpleButtons from '../SimpleButtons/SimpleButtons';
import styles from 'assets/jss/material-kit-pro-react/components/tableStyle.js';
const useStyles = makeStyles(styles);

const RetRow = ({
  row,
  colorsColls,
  hover,
  tableRowClasses,
  customCellClasses,
  coloredColls,
  customClassesForCells
}) => {
  const [editing, setEditing] = useState(false);
  const handleEdit = () => {
    setEditing(!editing);
  };
  const classes = useStyles();
  const rowCols = ["Code", "Desc", "CatNum", "CatDesc", "AddDescs"]
  return (
    <TableRow
      hover={hover}
      className={classes.tableRow + ' ' + tableRowClasses}
      id={row["_id"]}
    >
      {rowCols.map((row_key, ind) => {
        const tableCellClasses =
          classes.tableCell +
          ' ' +
          cx({
            [classes[colorsColls[coloredColls.indexOf(ind)]]]:
              coloredColls.indexOf(ind) !== -1,
            [customCellClasses[customClassesForCells.indexOf(ind)]]:
              customClassesForCells.indexOf(ind) !== -1
          });
        return (
          <TableCell className={tableCellClasses} key={ind}>
            <RetCell
              editing={editing}
              prop={`${row[row_key]}`}
            />
          </TableCell>
        );
      })}
      <TableCell className={classes.tableCell}>
        <SimpleButtons handleEdit={handleEdit} />
      </TableCell>
    </TableRow>
  );
};

RetRow.propTypes = {
  row: PropTypes.object,
  hover: PropTypes.bool,
  tableRowClasses: PropTypes.string,
  customCellClasses: PropTypes.arrayOf(PropTypes.string),
  coloredColls: PropTypes.arrayOf(PropTypes.number),
  customClassesForCells: PropTypes.arrayOf(PropTypes.number),
  colorsColls: PropTypes.array
};

export default RetRow;
