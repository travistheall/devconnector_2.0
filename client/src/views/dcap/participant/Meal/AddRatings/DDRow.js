import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Selecter from './Selecter';
import CustomInput from 'components/CustomInput/CustomInput';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import NutFactsModal from './NutFacts/NutFactsModal';

const DDRow = ({ portion, handleChange, i }) => {
  const [dropDown, setDropDown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const [pw, setPW] = useState(null);
  const [ingredientAmountSum, setIngredientAmountSum] = useState(0);
  const [ingredientWeightSum, setIngredientWeightSum] = useState(0);
  const url =
    portion === undefined
      ? ''
      : `api/foodingredient/foodid/${portion['food']['_id']}`;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(url);
      setIngredients(result.data);
      let a = result.data.map((x) => x['Amount']).reduce(reducer);
      setIngredientAmountSum(a);
      let w = result.data.map((x) => x['IngredWeight']).reduce(reducer);
      setIngredientWeightSum(w);
      setLoading(false);
    };
    fetchData();
  }, [portion]);
  return (
    <>
      <TableRow key={portion['_id']}>
        <TableCell component="th" scope="row">
          {portion['food']['Code']}
        </TableCell>
        <TableCell align="right">{portion['food']['Desc']}</TableCell>
        <TableCell align="right">{portion['food']['AddDescs']}</TableCell>
        <TableCell align="right">
          <Selecter
            portionFormData={portion}
            pw={pw}
            setPW={setPW}
            i={i}
            handleChange={handleChange}
          />
        </TableCell>
        <TableCell align="right">
          <CustomInput
            id={`${portion['_id']}-taken`}
            type={'number'}
            formControlProps={{ fullWidth: true }}
            inputProps={{
              placeholder: 'taken',
              name: 'taken',
              value: portion['taken'],
              onChange: (e) => handleChange(e, i)
            }}
          />
        </TableCell>
        <TableCell align="right">
          <CustomInput
            id={`${portion['_id']}-returned`}
            type={'number'}
            formControlProps={{ fullWidth: true }}
            inputProps={{
              placeholder: 'returned',
              name: 'returned',
              value: portion['returned'],
              onChange: (e) => handleChange(e, i)
            }}
          />
        </TableCell>
        <TableCell>
          <NutFactsModal />
        </TableCell>
        <TableCell>
          {' '}
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setDropDown(!dropDown)}
          >
            {dropDown ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={dropDown} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Ingredients
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Ingredient Code</TableCell>
                    <TableCell>Ingredient Description</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Measure</TableCell>
                    <TableCell align="right">Portion Description</TableCell>
                    <TableCell align="right">Retention Code</TableCell>
                    <TableCell align="right">Ingredient Weight (g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell>Loading...</TableCell>
                    </TableRow>
                  ) : (
                    ingredients.map((row) => (
                      <TableRow key={row._id}>
                        <TableCell>{row.IngredCode}</TableCell>
                        <TableCell align="right">{row.IngredDesc}</TableCell>
                        <TableCell align="right">
                          {parseFloat(
                            (row.Amount / ingredientAmountSum) *
                              (pw * (portion['taken'] - portion['returned']))
                          ).toFixed(1)}
                        </TableCell>
                        <TableCell align="right">{row.Measure}</TableCell>
                        <TableCell align="right">{row.PortDesc}</TableCell>
                        <TableCell align="right">{row.RetCode}</TableCell>
                        <TableCell align="right">
                          {parseFloat(
                            (row.IngredWeight / ingredientWeightSum) *
                              (pw * (portion['taken'] - portion['returned']))
                          ).toFixed(1)}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

DDRow.propTypes = {
  portion: PropTypes.object,
  handleChange: PropTypes.func,
  i: PropTypes.number
};

export default DDRow;
