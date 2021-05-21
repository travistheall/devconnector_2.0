import React from 'react';
import Button from 'components/CustomButtons/Button.js';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';

const SimpleButtons = ({ handleEdit }) => {
  const btns = [
    { color: 'success', icon: Edit, onClick: handleEdit },
    { color: 'danger', icon: Close, onClick: handleEdit }
  ];
  return btns.map((prop, key) => (
    <Button
      simple
      justIcon
      size="sm"
      color={prop.color}
      key={key}
      onClick={prop.onClick}
    >
      <prop.icon />
    </Button>
  ));
};

export default SimpleButtons;
