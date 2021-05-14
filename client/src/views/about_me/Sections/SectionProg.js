import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import PythonModal from './Modals/PythonModal';
import JavascriptModal from './Modals/JavascriptModal';
import SqlModal from './Modals/SqlModal';

import descriptionStyle from 'assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js';

const useStyles = makeStyles(descriptionStyle);

export default function SectionProg() {
  const classes = useStyles();

  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Programming</h2>
          <h5 className={classes.description}>
            Comfortable using various programming languages
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <PythonModal />
        </GridItem>
        <GridItem md={4} sm={4}>
        <JavascriptModal />
        </GridItem>
        <GridItem md={4} sm={4}>
        <SqlModal />
        </GridItem>
      </GridContainer>
    </div>
  );
}
