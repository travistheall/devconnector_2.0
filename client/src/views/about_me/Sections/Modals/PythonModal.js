/*eslint-disable*/
import React, { forwardRef, useState } from 'react';
//import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import GridContainer from 'components/Grid/GridContainer.js';
// @material-ui/icons
import Close from '@material-ui/icons/Close';

// core components
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CardAvatar from 'components/Card/CardAvatar.js';
import CardFooter from 'components/Card/CardFooter.js';
import Badge from 'components/Badge/Badge.js';
import PythonIcon from 'views/about_me/Sections/Icon/PythonIcon';
import Python from 'assets/img/prog/Python.png';

import Accordion from 'components/Accordion/Accordion';

import style from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js';
import teamStyle from 'assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const useTeamStyles = makeStyles(teamStyle);
const useStyles = makeStyles(style);

const PythonModal = () => {
  const classes = useStyles();
  const teamClasses = useTeamStyles();
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className={teamClasses.team}>
        <Card profile plain>
          <CardAvatar profile plain>
            <img src={Python} alt="profile-pic" className={teamClasses.img} />
          </CardAvatar>
          <CardBody plain>
            <h4 className={teamClasses.cardTitle}>Python</h4>
            <h6 className={teamClasses.textMuted}>
              Backend Web Development / Data Science
            </h6>
          </CardBody>
          <CardFooter className={teamClasses.justifyContent}>
            <Button color="github" onClick={() => setModal(true)} size="sm">
              <PythonIcon /> Click for code
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="login-modal-slide-title"
        aria-describedby="login-modal-slide-description"
      >
        <Card plain className={classes.modalLoginCard}>
          <DialogTitle
            id="login-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <CardHeader
              plain
              color="primary"
              className={`${classes.textCenter} ${classes.cardLoginHeader}`}
            >
              <Button
                simple
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                onClick={() => setModal(false)}
              >
                {' '}
                <Close className={classes.modalClose} />
              </Button>
              <h4 className={classes.cardTitleWhitee}>
                <Button simple size="lg">
                  <PythonIcon />
                  Python Projects
                </Button>
              </h4>
            </CardHeader>
          </DialogTitle>

          <DialogContent
            id="login-modal-slide-description"
            className={classes.modalBody}
          >
            <CardBody className={classes.cardLoginBody}>
              <Accordion
                active={0}
                collapses={[
                  {
                    title: 'Data Science',
                    content: (
                      <Card profile plain>
                        <CardHeader>
                          <Badge color="info">Numpy</Badge>
                          <Badge color="info">Scipy</Badge>
                          <Badge color="info">Pandas</Badge>
                          <Badge color="info">PostgreSQL</Badge>
                          <Badge color="info">Jupyter Notebook</Badge>
                          <Badge color="info">HTML</Badge>
                          <Badge color="info">CSS</Badge>
                          <Badge color="info">Javscript</Badge>
                          <Badge color="info">Selenium</Badge>
                        </CardHeader>
                        <CardBody>
                          <p
                            className={`${classes.description} ${classes.textCenter}`}
                          >
                            Created a script that web scraped zillow's housing
                            data and used the foursquare api to analyze where to
                            open a restaurant in Baton Rouge. I published the
                            article on my website. Previously created using
                            django as a backend with html, css, and django
                            template tags
                          </p>
                        </CardBody>
                        <CardFooter className={teamClasses.justifyContent}>
                          <Button color="primary" size="sm" href="post/coursera">
                            Read Article
                          </Button>
                          <Button
                            color="github"
                            href="https://github.com/travistheall/Coursera_Capstone"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                          >
                            <i className={' fab fa-github'} /> Course Code
                          </Button>
                          <Button
                            color="github"
                            href="https://github.com/travistheall/blog"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                          >
                            <i className={' fab fa-github'} /> Site Code
                          </Button>
                        </CardFooter>
                      </Card>
                    )
                  },
                  {
                    title: 'Food Tracker - Django Site',
                    content: (
                      <Card profile plain>
                        <CardHeader>
                          <Badge color="info">PostgreSQL</Badge>
                          <Badge color="info">Django</Badge>
                          <Badge color="info">Django Rest Framework</Badge>
                          <Badge color="info">HTML</Badge>
                          <Badge color="info">CSS</Badge>
                          <Badge color="info">Javscript</Badge>
                        </CardHeader>

                        <CardBody>
                          <p
                            className={`${classes.description} ${classes.textCenter}`}
                          >
                            Created simple websites using the Food and Nutrient
                            Database for Dietary Studies. You could search the
                            database and select the foods consumed and add them
                            to your profile. I used Postgres as my backend. It
                            started as a simple django application (V1). It grew
                            into using the django rest framework to create an
                            API (V2) with React as a frontend framework.
                          </p>
                        </CardBody>
                        <CardFooter className={teamClasses.justifyContent}>
                          <Button
                            color="github"
                            href="https://github.com/travistheall/microsDjangoBackend"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                          >
                            <i className={' fab fa-github'} /> V2 Code
                          </Button>
                          <Button
                            color="github"
                            href="https://github.com/travistheall/nutritionWeb"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                          >
                            <i className={' fab fa-github'} /> V1 Code
                          </Button>
                        </CardFooter>
                      </Card>
                    )
                  },
                  {
                    title: 'Web Scraping - ETL',
                    content: (
                      <Card profile plain>
                        <CardHeader>
                          <Badge color="info">Pandas</Badge>
                          <Badge color="info">Selenium</Badge>
                          <Badge color="info">requests</Badge>
                        </CardHeader>

                        <CardBody>
                          <p
                            className={`${classes.description} ${classes.textCenter}`}
                          >
                            Proficient in extracting tranforming and Loading
                            data. I have reated scripts to scrape shopify
                            website backends to create a growing product
                            database of e-cigarettes and e-liquids. Additionally
                            I scrape my company's site for large json data that
                            they expect me to copy, paste, and modify.
                          </p>
                        </CardBody>
                        <CardFooter className={teamClasses.justifyContent}>
                          <Button
                            color="github"
                            href="https://github.com/travistheall/scraping"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                          >
                            <i className={' fab fa-github'} /> Shoppify Code
                          </Button>
                          <Button
                            color="github"
                            href="https://github.com/travistheall/work"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                          >
                            <i className={' fab fa-github'} /> Work Scraping Code
                          </Button>
                        </CardFooter>
                      </Card>
                    )
                  }
                ]}
              />
            </CardBody>
          </DialogContent>
          <GridContainer justify="center">
            <DialogActions className={classes.modalFooter}>
              <Button onClick={() => setModal(false)} color="primary">
                Close Modal
              </Button>
            </DialogActions>
          </GridContainer>
        </Card>
      </Dialog>
    </>
  );
};

export default PythonModal;
