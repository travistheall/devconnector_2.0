import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getParticipantsByStudy,
  setParticipant
} from '../../actions/participant';
// nodejs library that concatenates classes
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import HeaderDropDownListItem from './HeaderDropDownListItem';

const HeaderListDropDown = ({
  studyId,
  getParticipantsByStudy,
  stateParticipant: { participants, loading }
}) => {
  useEffect(() => {
    getParticipantsByStudy(studyId);
  }, [getParticipantsByStudy, studyId]);

  return loading ? (
    <ListItem>
      <ListItemText primary={'Loading'} />
    </ListItem>
  ) : (
    participants.map((part) => (
      <HeaderDropDownListItem participantFromMap={part} key={part['_id']} />
    ))
  );
};

HeaderListDropDown.propTypes = {
  studyId: PropTypes.string,
  getParticipantsByStudy: PropTypes.func,
  stateParticipant: PropTypes.object
};

const mapStateToProps = (state) => ({
  stateParticipant: state.participant
});

export default connect(mapStateToProps, {
  getParticipantsByStudy,
  setParticipant
})(HeaderListDropDown);
