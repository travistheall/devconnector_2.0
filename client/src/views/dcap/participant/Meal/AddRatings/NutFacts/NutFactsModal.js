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
//import CardBody from 'components/Card/CardBody.js';
import style from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js';
import NutFacts from './NutFacts.js';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

const NutFactsModal = () => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  return (
    <>
      <Button color="github" onClick={() => setModal(true)} size="sm">
        Facts
      </Button>
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
              <h4 className={classes.cardTitleWhitee}>Nutrition Facts</h4>
            </CardHeader>
          </DialogTitle>
          <DialogContent>
            <GridContainer justify="center">
              <NutFacts />
            </GridContainer>
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

export default NutFactsModal;
