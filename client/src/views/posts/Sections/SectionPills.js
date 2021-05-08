import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import NavPills from 'components/NavPills/NavPills.js';
import SectionAll from './SectionAll';

import sectionPillsStyle from 'assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.js';

const useStyles = makeStyles(sectionPillsStyle);

const SectionPills = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          <NavPills
            alignCenter
            tabs={[
              {
                tabButton: 'All',
                tabContent: <SectionAll />
              },
              {
                tabButton: 'Crypto',
                tabContent: <SectionAll />
              },
              {
                tabButton: 'Programming',
                tabContent: <SectionAll />
              },
              {
                tabButton: 'Fitness',
                tabContent: <SectionAll />
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};


export default SectionPills;
