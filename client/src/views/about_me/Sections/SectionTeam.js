import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardAvatar from 'components/Card/CardAvatar.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Button from 'components/CustomButtons/Button.js';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import teamStyle from 'assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js';

import SQL from 'assets/img/prog/SQL.png';
import Flutter from 'assets/img/prog/Flutter.png';
import Python from 'assets/img/prog/Python.png';
import ReactPic from 'assets/img/prog/ReactPic.png';

const useStyles = makeStyles(teamStyle);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.team}>
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
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img src={Python} alt="profile-pic" className={classes.img} />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Python</h4>
              <h6 className={classes.textMuted}>
                Backend Web Development / Data Science
              </h6>
              <p className={classes.cardDescription}>Input Github Repos</p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="github">
                <i className="fab fa-github" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img src={ReactPic} alt="profile-pic" className={classes.img} />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Javascript / React</h4>
              <h6 className={classes.textMuted}>Front End Web Development</h6>
              <p className={classes.cardDescription}>
                Included Basic Javscript, CSS, HTML{' '}
              </p>
              <p className={classes.cardDescription}>Input Github Repos</p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="github">
                <i className="fab fa-github" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img src={SQL} alt="profile-pic" className={classes.img} />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>SQL</h4>
              <h6 className={classes.textMuted}>Databases</h6>
              <p className={classes.cardDescription}>
                I have experience working with the following databases:
              </p>
              <ul>
                <li>PostgreSQL</li>
                <li>Microsoft SQL Server</li>
                <li>MySQL</li>
                <li>Microsoft Access</li>
              </ul>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="github">
                <i className="fab fa-github" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img src={Flutter} alt="profile-pic" className={classes.img} />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Flutter</h4>
              <h6 className={classes.textMuted}>Mobile Development</h6>
              <p className={classes.cardDescription}>Input Github Repos</p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="github">
                <i className="fab fa-github" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
