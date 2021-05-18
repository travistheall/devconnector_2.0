import React, { Fragment } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import InputCell from '../InputCell/InputCell';

const EditRow = ({
  key,
  hover,
  classes,
  prop,
  tableRowClasses,
  customCellClasses,
  coloredColls,
  customClassesForCells,
  colorsColls
}) => {

  return (
    <TableRow
      key={key}
      hover={hover}
      className={classes.tableRow + ' ' + tableRowClasses}
    >
      {prop.map((prop, key) => {
        const tableCellClasses =
          classes.tableCell +
          ' ' +
          cx({
            [classes[colorsColls[coloredColls.indexOf(key)]]]:
              coloredColls.indexOf(key) !== -1,
            [customCellClasses[customClassesForCells.indexOf(key)]]:
              customClassesForCells.indexOf(key) !== -1
          });
        return (
          <Fragment key={key + '2'}>
            <TableCell className={tableCellClasses} key={key}>
              <InputCell prop={prop} />
            </TableCell>
          </Fragment>
        );
      })}
      <TableCell className={classes.tableCell}>
        
      </TableCell>
    </TableRow>
  );
};

EditRow.propTypes = {
  prop: PropTypes.array,
  key: PropTypes.number,
  hover: PropTypes.bool,
  classes: PropTypes.object,
  tableRowClasses: PropTypes.object,
  customCellClasses: PropTypes.arrayOf(PropTypes.string),
  coloredColls: PropTypes.arrayOf(PropTypes.number),
  customClassesForCells: PropTypes.arrayOf(PropTypes.number),
  colorsColls: PropTypes.array
};

export default EditRow;
