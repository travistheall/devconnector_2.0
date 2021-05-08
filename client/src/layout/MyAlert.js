import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';

const MyAlert = ({ alerts }) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return alerts.map((alert, index) => (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      key={`altert-${index}`}
    >
      <Alert
        severity={alert.alertType}
        variant="filled"
        onClose={handleClose}
      >
        {alert.msg}
      </Alert>
    </Snackbar>
  ));
};

MyAlert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(MyAlert);
