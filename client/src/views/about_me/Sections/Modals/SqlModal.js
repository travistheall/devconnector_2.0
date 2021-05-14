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
import style from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js';
import teamStyle from 'assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js';
import SQL from 'assets/img/prog/SQL.png';
import SqlIcon from 'views/about_me/Sections/Icon/SqlIcon';
import Accordion from 'components/Accordion/Accordion';
const useTeamStyles = makeStyles(teamStyle);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

const SqlModal = () => {
  const classes = useStyles();
  const teamClasses = useTeamStyles();
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className={teamClasses.team}>
        <Card profile plain>
          <CardAvatar profile plain>
            <img src={SQL} alt="profile-pic" className={teamClasses.img} />
          </CardAvatar>
          <CardBody plain>
            <h4 className={classes.cardTitle}>SQL</h4>
            <h6 className={classes.textMuted}>Databases</h6>
          </CardBody>
          <CardFooter className={teamClasses.justifyContent}>
            <Button color="github" onClick={() => setModal(true)} size="sm">
              <SqlIcon /> Click for more
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
                  <SqlIcon />
                  SQL Projects
                </Button>
              </h4>
            </CardHeader>
          </DialogTitle>
          <DialogContent>
            {' '}
            <CardBody className={classes.cardLoginBody}>
              <Accordion
                active={0}
                collapses={[
                  {
                    title: 'Microsoft SQL Server',
                    content: (
                      <Card profile plain>
                        <CardBody>
                          <p
                            className={`${classes.description} ${classes.textCenter}`}
                          >
                            Helped design the MSSQL database backend for the
                            Data Capture and Analysis Platform at Pennington
                            Biomedical Research Center
                          </p>
                        </CardBody>
                        <CardFooter className={teamClasses.justifyContent}>
                          <Button
                            color="github"
                            href="https://github.com/travistheall/blog"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                            disabled
                          >
                            <i className={' fab fa-github'} /> Schema
                          </Button>
                        </CardFooter>
                      </Card>
                    )
                  },
                  {
                    title: 'PostgreSQL',
                    content: (
                      <Card profile plain>
                        <CardBody>
                          <p
                            className={`${classes.description} ${classes.textCenter}`}
                          >
                            The easiest database to integrate with django.
                            Experience with setting up database using the
                            django admin.
                          </p>
                        </CardBody>
                        <CardFooter className={teamClasses.justifyContent}>
                          <Button
                            color="github"
                            href="https://github.com/travistheall/mysite/blob/main/fndds/models.py"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                          >
                            <i className={' fab fa-github'} /> FNDDS Models
                          </Button>
                          <Button
                            color="github"
                            href="https://github.com/travistheall/mysite/blob/main/t1d/models.py"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                          >
                            <i className={' fab fa-github'} /> Subject/Food Code
                          </Button>
                        </CardFooter>
                      </Card>
                    )
                  },
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

export default SqlModal;
