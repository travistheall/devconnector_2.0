import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
//UI Elements
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

//static files
import aboutUsStyle from 'assets/jss/material-kit-pro-react/views/aboutUsStyle.js';

import ParticipantParallax from './ParticipantParallax';
import Meals from './Meal/Meals';

const useStyles = makeStyles(aboutUsStyle);

const Participant = ({ participant: { participant, loading } }) => {
  const classes = useStyles();
  return (
    <div>
      <ParticipantParallax
        name={loading || participant === null ? '' : participant['name']}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        {loading || participant === null ? (
          <></>
        ) : (
          <GridContainer>
            <GridItem xs={2} sm={2} />
            <GridItem xs={10} sm={10}>
              <Meals participant={participant} />
            </GridItem>
          </GridContainer>
        )}
      </div>
    </div>
  );
};

Participant.propTypes = {
  participant: PropTypes.object
};

const mapStateToProps = (state) => ({
  participant: state.participant
});

export default connect(mapStateToProps, null)(Participant);
