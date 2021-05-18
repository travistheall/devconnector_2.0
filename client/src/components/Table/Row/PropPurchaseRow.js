import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function PropPurchaseRow({
  key,
  hover,
  tableRowClasses,
  classes,
  prop
}) {
  return (
    <TableRow key={key} hover={hover} className={tableRowClasses}>
      <TableCell className={classes.tableCell} colSpan={prop.colspan} />
      <TableCell className={classes.tableCell + ' ' + classes.tableCellTotal}>
        Total
      </TableCell>
      <TableCell className={classes.tableCell + ' ' + classes.tableCellAmount}>
        {prop.amount}
      </TableCell>
      <TableCell
        className={classes.tableCell + ' ' + classes.right}
        colSpan={prop.col.colspan}
      >
        {prop.col.text}
      </TableCell>
    </TableRow>
  );
}

PropPurchaseRow.propTypes = {
  key: PropTypes.number,
  classes: PropTypes.object,
  props: PropTypes.object,
  hover: PropTypes.bool,
  prop: PropTypes.object,
  tableRowClasses: PropTypes.string
};
