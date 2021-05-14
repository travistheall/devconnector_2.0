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
import Accordion from 'components/Accordion/Accordion';
import Badge from 'components/Badge/Badge.js';
import style from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js';
import teamStyle from 'assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js';
import ReactPic from 'assets/img/prog/ReactPic.png';
import ReactIcon from 'views/about_me/Sections/Icon/ReactIcon';

const useTeamStyles = makeStyles(teamStyle);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

const JavascriptModal = () => {
  const classes = useStyles();
  const teamClasses = useTeamStyles();
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className={teamClasses.team}>
        <Card profile plain>
          <CardAvatar profile plain>
            <img src={ReactPic} alt="profile-pic" className={teamClasses.img} />
          </CardAvatar>
          <CardBody plain>
            <h4 className={teamClasses.cardTitle}>Javascript / React</h4>
            <h6 className={teamClasses.textMuted}>Front End Web Development</h6>
          </CardBody>
          <CardFooter className={teamClasses.justifyContent}>
            <Button color="github" onClick={() => setModal(true)} size="sm">
            <ReactIcon /> Click for more
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
                  <ReactIcon />
                  Javascript Project
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
                    title: 'React Frontend',
                    content: (
                      <Card profile plain>
                        <CardHeader>
                          <Badge color="info">React</Badge>
                          <Badge color="info">Redux</Badge>
                          <Badge color="info">Material UI</Badge>
                          <Badge color="info">Axios</Badge>
                          <Badge color="info">JSS</Badge>
                        </CardHeader>
                        <CardBody>
                          <p
                            className={`${classes.description} ${classes.textCenter}`}
                          >
                            The frontend code for my website currently
                          </p>
                        </CardBody>
                        <CardFooter className={teamClasses.justifyContent}>
                          <Button
                            color="github"
                            href="https://github.com/travistheall/devconnector_2.0/tree/main/client"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                          >
                            <i className={' fab fa-github'} /> Frontend Code
                          </Button>
                        </CardFooter>
                      </Card>
                    )
                  },
                  {
                    title: 'Express Backendend',
                    content: (
                      <Card profile plain>
                        <CardHeader>
                          <Badge color="info">Express</Badge>
                          <Badge color="info">Mongoose</Badge>
                          <Badge color="info">MongoDb</Badge>
                        </CardHeader>

                        <CardBody>
                          <p
                            className={`${classes.description} ${classes.textCenter}`}
                          >
                            The backend code for my website currently
                          </p>
                        </CardBody>
                        <CardFooter className={teamClasses.justifyContent}>
                          <Button
                            color="github"
                            href="https://github.com/travistheall/devconnector_2.0"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                          >
                            <i className={' fab fa-github'} /> Backend Code
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

export default JavascriptModal;
