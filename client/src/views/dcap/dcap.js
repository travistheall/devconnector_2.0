import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';

import blogPostsPageStyle from 'assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Parallax from 'components/Parallax/Parallax.js';
import bg10 from 'assets/img/bg10.jpg';
import PersistentDrawerLeft from 'layout/PersistentDrawerLeft';
const useStyles = makeStyles(blogPostsPageStyle);

const Dcap = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Parallax image={bg10} small filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                <AccountCircleIcon /> dcap
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <PersistentDrawerLeft />
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12}>
            <Card pricing raised>
              <CardBody pricing>
                    <p className={classes.cardDescription}>
                      dicks
                    </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
};

export default Dcap;
