import React, { useState } from 'react';
import classNames from 'classnames';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
//UI Elements
import Parallax from 'components/Parallax/Parallax.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// My Sections
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
//static files
import food from 'assets/img/food.jpg';
import aboutUsStyle from 'assets/jss/material-kit-pro-react/views/aboutUsStyle.js';
import InputAdornment from '@material-ui/core/InputAdornment';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import NavPills from 'components/NavPills/NavPills';
import SATable from './table/StandardAssigner/SATable';
import RaterTable from './table/Rater/RaterTable';
import ReviewerTable from './table/Reviewer/ReviewerTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Meal from './meal/Meal';
import demo from './table/Rater/json/demo.json';

const useStyles = makeStyles(aboutUsStyle);
import sectionSubscribeLineStyle from 'assets/jss/material-kit-pro-react/views/blogPostsSections/sectionSubscribeLineStyle.js';

const useSubStyles = makeStyles(sectionSubscribeLineStyle);

const Food = ({ participant: { participant, loading } }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleClick = () => {
    setSearched(true);
  };
  const classes = useStyles();
  const subClasses = useSubStyles();
  return (
    <div>
      <Parallax image={food} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={12}
              sm={12}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>
                {loading ? (
                  <></>
                ) : participant !== null ? (
                  `${participant['name']}'s Meals`
                ) : (
                  <></>
                )}
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer>
          <GridItem xs={2} sm={2} />
          <GridItem xs={5} sm={5}>
            {loading ? (
              <></>
            ) : participant !== null ? (
              <Meal participant={participant} />
            ) : (
              <></>
            )}
          </GridItem>
          <GridItem xs={5} sm={5}>
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
                    <Button
                      color="github"
                      size="sm"
                      onClick={handleClick}
                      round
                    >
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
                          <SATable
                            searchTerm={searchTerm}
                            searched={searched}
                          />
                        ) : (
                          <CardBody>Please Search a Food</CardBody>
                        )
                      },
                      {
                        tabButton: 'Rater',
                        tabContent: <RaterTable rows={Object.values(demo)} />
                      },
                      {
                        tabButton: 'Reviewer',
                        tabContent: <ReviewerTable rows={Object.values(demo)} />
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

Food.propTypes = {
  participant: PropTypes.object
};

const mapStateToProps = (state) => ({
  participant: state.participant
});

export default connect(mapStateToProps, null)(Food);
