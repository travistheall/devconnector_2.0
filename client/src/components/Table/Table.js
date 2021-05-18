import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// Rows
import RetRow from './Row/RetRow';
import PropTotalRow from './Row/PropTotalRow';
import PropPurchaseRow from './Row/PropPurchaseRow';

import styles from 'assets/jss/material-kit-pro-react/components/tableStyle.js';

const useStyles = makeStyles(styles);
export default function CustomTable({
  tableHead,
  tableBody,
  tableHeaderColor,
  hover,
  colorsColls,
  coloredColls,
  customCellClasses,
  customClassesForCells,
  striped,
  tableShopping,
  customHeadCellClasses,
  customHeadClassesForCells
}) {
  const classes = useStyles();
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor]}>
            <TableRow className={classes.tableRow}>
              {tableHead.map((prop, key) => {
                const tableCellClasses =
                  classes.tableHeadCell +
                  ' ' +
                  classes.tableCell +
                  ' ' +
                  cx({
                    [customHeadCellClasses[
                      customHeadClassesForCells.indexOf(key)
                    ]]: customHeadClassesForCells.indexOf(key) !== -1,
                    [classes.tableShoppingHead]: tableShopping
                  });
                return (
                  <TableCell className={tableCellClasses} key={key}>
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableBody.map((row, ind) => {
            var rowColor = '';
            var rowColored = false;
            if (row.color !== undefined) {
              rowColor = row.color;
              rowColored = true;
              row = row.data;
            }
            const tableRowClasses = cx({
              [classes.tableRowHover]: hover,
              [classes[rowColor + 'Row']]: rowColored,
              [classes.tableStripedRow]: striped && ind % 2 === 0
            });
            if (row.total) {
              return (
                <PropTotalRow
                  key={ind}
                  hover={hover}
                  tableHead={tableHead}
                  tableRowClasses={tableRowClasses}
                  classes={classes}
                  prop={row}
                />
              );
            }
            if (row.purchase) {
              return (
                <PropPurchaseRow
                  key={ind}
                  hover={hover}
                  tableRowClasses={tableRowClasses}
                  classes={classes}
                  prop={row}
                />
              );
            }
            return (
              <RetRow
                key={ind}
                row={row}
                colorsColls={colorsColls}
                hover={hover}
                tableRowClasses={tableRowClasses}
                customCellClasses={customCellClasses}
                coloredColls={coloredColls}
                customClassesForCells={customClassesForCells}
              />
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: 'gray',
  hover: false,
  colorsColls: [],
  coloredColls: [],
  striped: false,
  customCellClasses: [],
  customClassesForCells: [],
  customHeadCellClasses: [],
  customHeadClassesForCells: []
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableBody: PropTypes.arrayOf(PropTypes.object),
  // Of(PropTypes.arrayOf(PropTypes.node)) || Of(PropTypes.object),
  hover: PropTypes.bool,
  coloredColls: PropTypes.arrayOf(PropTypes.number),
  // Of(["warning","primary","danger","success","info","rose","gray"]) - colorsColls
  colorsColls: PropTypes.array,
  customCellClasses: PropTypes.arrayOf(PropTypes.string),
  customClassesForCells: PropTypes.arrayOf(PropTypes.number),
  customHeadCellClasses: PropTypes.arrayOf(PropTypes.string),
  customHeadClassesForCells: PropTypes.arrayOf(PropTypes.number),
  striped: PropTypes.bool,
  // this will cause some changes in font
  tableShopping: PropTypes.bool
};
