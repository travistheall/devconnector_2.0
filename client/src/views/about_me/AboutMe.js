/*eslint-disable*/
import React, {useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionDescription from "./Sections/SectionDescription.js";
import SectionTeam from "./Sections/SectionTeam.js";
import SectionServices from "./Sections/SectionServices.js";
import SectionOffice from "./Sections/SectionOffice.js";
import SectionContact from "./Sections/SectionContact.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";
import image from 'assets/img/wfh.JPEG';


const useStyles = makeStyles(aboutUsStyle);

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Parallax image={image} filter="dark" small>
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
              <h1 className={classes.title}>About Me</h1>
              <h4>
                Meet the developer behind this project and find out more
                about how I work.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescription />
          <SectionTeam />
          <SectionServices />
          <SectionOffice />
          <SectionContact />
        </div>
      </div>
    </div>
  );
}
export default AboutMe;