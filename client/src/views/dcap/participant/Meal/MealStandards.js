import React, { useState } from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
//UI Elements
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// My Sections
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
//static files
import InputAdornment from '@material-ui/core/InputAdornment';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import NavPills from 'components/NavPills/NavPills';

import SearchStandards from './AddStandards/SearchStandards';
import SearchPortions from './AddRatings/SearchPortions';
import ReviewStandards from './ReviewStandards/ReviewStandards';
import PropTypes from 'prop-types';

//import demo from 'views/food/table/Rater/json/demo.json';
import sectionSubscribeLineStyle from 'assets/jss/material-kit-pro-react/views/blogPostsSections/sectionSubscribeLineStyle.js';

const useSubStyles = makeStyles(sectionSubscribeLineStyle);

const MealStandards = ({ meal }) => {
  const [textInp, setTextInp] = useState('');
  const [searchTerm, setSearchTerm] = useState(textInp);
  const [searched, setSearched] = useState(false);
  const handleChange = (e) => {
    setTextInp(e.target.value);
  };
  const handleClick = () => {
    setSearchTerm(textInp);
    setSearched(true);
  };
  const subClasses = useSubStyles();
  return (
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
                placeholder: textInp || '',
                value: textInp || '',
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
      <GridContainer>
        <GridItem xs={12} sm={12}>
          <NavPills
            horizontal={{
              tabsGrid: { xs: 1 },
              contentGrid: { xs: 11 }
            }}
            color="rose"
            tabs={[
              {
                tabButton: 'Standard assigner',
                tabContent: searched ? (
                  <SearchStandards searchTerm={searchTerm} searched={searched} meal={meal} />
                ) : (
                  <CardBody>Please Search a Food</CardBody>
                )
              },
              {
                tabButton: 'Rater',
                tabContent: <SearchPortions meal={meal} />
              },
              {
                tabButton: 'Reviewer',
                tabContent: <ReviewStandards meal={meal} />
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </Card>
  );
};

MealStandards.propTypes = {
  meal: PropTypes.object,
};

export default MealStandards;
