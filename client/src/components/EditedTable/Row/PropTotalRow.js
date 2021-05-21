import React from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export default function PropTotalRow({
  key,
  hover,
  tableHead,
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
      {tableHead.length - (prop.colspan - 0 + 2) > 0 ? (
        <TableCell
          className={classes.tableCell}
          colSpan={tableHead.length - (prop.colspan - 0 + 2)}
        />
      ) : null}
    </TableRow>
  );
}

PropTotalRow.propTypes = {
  key: PropTypes.number,
  classes: PropTypes.object,
  tableHead: PropTypes.object,
  props: PropTypes.object,
  hover: PropTypes.bool,
  prop: PropTypes.object,
  tableRowClasses: PropTypes.string
};
