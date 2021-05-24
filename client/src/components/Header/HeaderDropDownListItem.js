import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setParticipant } from '../../actions/participant';
// nodejs library that concatenates classes
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';
import Star from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';

const HeaderListDropDownListItem = ({
  participant,
  participantFromMap,
  setParticipant
}) => {
  const fullStar =
    participant !== null
      ? participant['_id'] === participantFromMap['_id']
      : false;

  return (
    <Link to="/part">
      <ListItem
        button
        onClick={() => setParticipant(participantFromMap['_id'])}
      >
        <ListItemIcon>{fullStar ? <Star /> : <StarBorder />}</ListItemIcon>
        <ListItemText primary={participantFromMap['name']} />
      </ListItem>
    </Link>
  );
};

HeaderListDropDownListItem.propTypes = {
  participantFromMap: PropTypes.object,
  participant: PropTypes.object,
  setParticipant: PropTypes.func
};

const mapStateToProps = (state) => ({
  participant: state.participant.participant
});

export default connect(mapStateToProps, {
  setParticipant
})(HeaderListDropDownListItem);
