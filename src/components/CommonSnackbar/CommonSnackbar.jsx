import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { amber, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {
  SnackbarContent,
  IconButton,
  Snackbar,
  Slide,
} from '@material-ui/core';
import {
  Info as InfoIcon,
  Close as CloseIcon,
} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

export default function CommonSnackbar(props) {
  const classes = useStyles();
  const {
    message, open, onClose, variant,
  } = props;
  const Icon = InfoIcon;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      TransitionComponent={SlideTransition}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <SnackbarContent
        className={clsx(classes[variant])}
        aria-describedby="client-snackbar"
        message={(
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
      )}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
    </Snackbar>

  );
}

CommonSnackbar.propTypes = {
  message: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

CommonSnackbar.defaultProps = {
  message: 'This is a message!',
  onClose: () => {},
};
