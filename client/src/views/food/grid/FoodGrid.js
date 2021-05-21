import React, { useState } from 'react';
import classNames from 'classnames';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
//UI Elements
import Parallax from 'components/Parallax/Parallax.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// My Sections
//import FoodTable from './Sections/Table/FoodTable.js';
// import CardBody from 'components/Card/CardBody';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
//static files
import food from 'assets/img/food.jpg';
import aboutUsStyle from 'assets/jss/material-kit-pro-react/views/aboutUsStyle.js';
import InputAdornment from '@material-ui/core/InputAdornment';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles(aboutUsStyle);
import sectionSubscribeLineStyle from 'assets/jss/material-kit-pro-react/views/blogPostsSections/sectionSubscribeLineStyle.js';

const useSubStyles = makeStyles(sectionSubscribeLineStyle);

const FoodGrid = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 10
  });
  const [searchTerm, setSearchTerm] = useState('');
  //const [searched, setSearched] = useState(false);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleClick = () => {
    //setSearched(true);
    console.log('clicked');
  };
  const classes = useStyles();
  const subClasses = useSubStyles();
  return (
    <div>
      <Parallax image={food} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Food Search</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Card>
            <CardHeader color="primary">
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={8}
                  md={8}
                  className={subClasses.alignItemsCenter}
                >
                  <CustomInput
                    id="foodSearch"
                    formControlProps={{
                      fullWidth: true,
                      className: subClasses.formControl
                    }}
                    inputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FastfoodIcon className={subClasses.icon} />
                        </InputAdornment>
                      ),
                      placeholder: searchTerm || '',
                      value: searchTerm || '',
                      onChange: handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Button color="github" size="sm" onClick={handleClick} round>
                    Search
                  </Button>
                </GridItem>
              </GridContainer>
            </CardHeader>
            <DataGrid
              {...data}
              components={{
                Toolbar: GridToolbar
              }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FoodGrid;
