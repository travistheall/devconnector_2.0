import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExperience } from 'actions/profile';
import formatDate from 'utils/formatDate';
import Table from 'components/Table/Table.js';
import Button from 'components/CustomButtons/Button.js';
import Close from "@material-ui/icons/Close";

const Experience = ({ experience, deleteExperience }) => {
  const simpleButtons = (exp) => [{ color: 'danger', icon: Close }].map((prop, key) => {
    return (
      <Button
        simple
        justIcon
        size="sm"
        color={prop.color}
        key={key}
        onClick={() => deleteExperience(exp._id)}
      >
        <prop.icon />
      </Button>
    );
  });

  const experiences = experience.map((exp) => [
    exp.company,
    exp.title,
    `${formatDate(exp.from)} - ${exp.to ? formatDate(exp.to) : 'Now'}`,
    simpleButtons(exp)
  ]);

  return (

      <Table
        tableHead={['Company', 'Title', 'Years', '']}
        tableData={experiences}
        striped
      />


  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
