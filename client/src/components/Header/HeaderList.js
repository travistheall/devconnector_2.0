import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setStudy } from 'actions/study';
// nodejs library that concatenates classes
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import HeaderListDropDown from './HeaderListDropDown';
import { Link } from 'react-router-dom';
import Spinner from 'layout/Spinner';

const HeaderList = ({ study, studyFromMap, setStudy }) => {
  const dropdown = study['loading'] === false && study['study'] !== null ? study['study']['_id'] == studyFromMap['_id'] : false;
  const handleClick = () => {
    setStudy(studyFromMap['_id']);
  };

  return study['loading'] ? (
    <Spinner />
  ) : (
    <>
      <Link to={`/dcap/${studyFromMap['Abbrev']}`}>
        <ListItem button onClick={handleClick}>
          <ListItemText primary={studyFromMap['Abbrev']} />
          {dropdown ? <></> : <ExpandMore />}
        </ListItem>
      </Link>
      <Collapse in={dropdown} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <HeaderListDropDown studyId={studyFromMap['_id']} />
        </List>
      </Collapse>
      <Divider />
    </>
  );
};

HeaderList.propTypes = {
  setStudy: PropTypes.func.isRequired,
  study: PropTypes.object.isRequired,
  studyFromMap: PropTypes.object,
  index: PropTypes.number
};

const mapStateToProps = (state) => ({
  study: state.study
});

export default connect(mapStateToProps, { setStudy })(HeaderList);
