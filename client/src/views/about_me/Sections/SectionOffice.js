import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

<<<<<<< HEAD
import officeStyle from 'assets/jss/material-kit-pro-react/views/aboutUsSections/officeStyle.js';
=======
import officeStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/officeStyle.js";

// office
import office1 from "assets/img/examples/office1.jpg";
import office2 from "assets/img/examples/office2.jpg";
import office3 from "assets/img/examples/office3.jpg";
import office4 from "assets/img/examples/office4.jpg";
import office5 from "assets/img/examples/office5.jpg";

>>>>>>> parent of 6b3025b (fixed up the about me more. made it like the old profile. added modals. modals everywhere)
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
            Here are some pictures from my office. You can see that I am fully equiped with everything you need to get
            the job done working from home.
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
<<<<<<< HEAD
            src={'https://tntheall.s3.amazonaws.com/assets/img/office/office.JPEG'}
            alt="office"
=======
            src={office1}
            alt="office1"
>>>>>>> parent of 6b3025b (fixed up the about me more. made it like the old profile. added modals. modals everywhere)
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
<<<<<<< HEAD
            src={'https://tntheall.s3.amazonaws.com/assets/img/office/workstation.JPEG'}
            alt="workstation"
=======
            src={office2}
            alt="office2"
>>>>>>> parent of 6b3025b (fixed up the about me more. made it like the old profile. added modals. modals everywhere)
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
<<<<<<< HEAD
            src={'https://tntheall.s3.amazonaws.com/assets/img/office/buddy.jpeg'}
            alt="coffee buddy"
=======
            src={office3}
            alt="office3"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office4}
            alt="office4"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office5}
            alt="office5"
>>>>>>> parent of 6b3025b (fixed up the about me more. made it like the old profile. added modals. modals everywhere)
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
