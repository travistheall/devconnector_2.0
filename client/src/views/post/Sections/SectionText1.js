import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

// core components

import br1 from 'assets/img/br1.jpg';
import br2 from 'assets/img/br2.jpg';
import br3 from 'assets/img/br3.jpg';
import brf from 'assets/img/brf.jpg';
import brf1 from 'assets/img/brf1.png';
import sectionTextStyle from 'assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js';
import Data from '../ExampleSect/Data';
import Target from '../ExampleSect/Target';
import Intro from '../ExampleSect/Intro';
import Results from '../ExampleSect/Results';
import References from '../ExampleSect/References';
import Conclusion from '../ExampleSect/Conclusion';

const useStyles = makeStyles(sectionTextStyle);

export default function SectionText1() {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <Intro />
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img src={br1} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={br2} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={br3} alt="..." className={imgClasses} />
            </GridItem>
          </GridContainer>
        </GridItem>
        <Target />
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <img src={brf} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <img src={brf1} alt="..." className={imgClasses} />
            </GridItem>
          </GridContainer>
        </GridItem>
        
        <Data />
        <Results />
        <Conclusion />
        <References />
      </GridContainer>
    </div>
  );
}
