import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEducation } from 'actions/profile';

import formatDate from 'utils/formatDate';
import Button from 'components/CustomButtons/Button.js';
import Close from '@material-ui/icons/Close';
import Table from 'components/Table/Table.js';

const Education = ({ education, deleteEducation }) => {
  const simpleButton = (edu) =>
    [{ color: 'danger', icon: Close }].map((prop, key) => {
      return (
        <Button
          simple
          justIcon
          size="sm"
          color={prop.color}
          key={key}
          onClick={() => deleteEducation(edu._id)}
        >
          <prop.icon />
        </Button>
      );
    });

  const educations = education.map((edu) => [
    edu.school,
    edu.degree,
    `${formatDate(edu.from)} - ${edu.to ? formatDate(edu.to) : 'Now'}`,
    simpleButton(edu)
  ]);

  return (
    <Table
      tableHead={['School', 'Degree', 'Years', '']}
      tableData={educations}
      striped
    />
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
