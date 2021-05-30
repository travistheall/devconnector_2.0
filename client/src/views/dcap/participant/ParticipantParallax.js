import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
//UI Elements
import Parallax from 'components/Parallax/Parallax.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
//static files
import aboutUsStyle from 'assets/jss/material-kit-pro-react/views/aboutUsStyle.js';
const useStyles = makeStyles(aboutUsStyle);

const ParticipantParallax = ({ name }) => {
  const classes = useStyles();
  return (
    <Parallax image={"https://tntheall.s3.amazonaws.com/assets/img/food.jpg"} filter="dark" small>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem
            md={12}
            sm={12}
            className={classNames(
              classes.mlAuto,
              classes.mrAuto,
              classes.textCenter
            )}
          >
            <h1 className={classes.title}>{`${name}'s Meals`}</h1>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  );
};
ParticipantParallax.propTypes = {
  name: PropTypes.string
};
export default ParticipantParallax;
