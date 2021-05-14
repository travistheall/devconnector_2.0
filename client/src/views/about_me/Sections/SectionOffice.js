import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import officeStyle from 'assets/jss/material-kit-pro-react/views/aboutUsSections/officeStyle.js';

// office
import buddy from 'assets/img/office/buddy.jpeg';
import office from 'assets/img/office/office.JPEG';
import workstation from 'assets/img/office/workstation.JPEG';

const useStyles = makeStyles(officeStyle);

export default function SectionOffice() {
  const classes = useStyles();
  return (
    <div className={classes.office}>
      <GridContainer className={classes.textCenter}>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>My office is my home</h2>
          <h4 className={classes.description}>
            Here are some pictures from my office. You can see that I am fully
            equiped with everything you need to get the job done working from
            home if needed.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office}
            alt="office"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={workstation}
            alt="workstation"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={buddy}
            alt="coffee buddy"
          />
        </GridItem>

      </GridContainer>
    </div>
  );
}
