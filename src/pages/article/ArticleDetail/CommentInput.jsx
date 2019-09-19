/**
 * @Author  : liuyuchuan
 * @Date    : 2019-09-17 15:02
 * @File    : CommentsInput.jsx
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
} from '@material-ui/core';
import * as style from './style';

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(2),
  },
}));

function CommentInput({
  label,
  value,
  change,
  handleSend,
}) {
  const classes = useStyles();

  return (
    <style.CommentsInput>
      <TextField
        fullWidth
        label={label}
        variant="standard"
        multiline
        rowsMax="4"
        value={value}
        onChange={(e) => change(e.target.value)}
      />
      <Button
        disabled={value === ''}
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleSend}
      >
        发送
      </Button>
    </style.CommentsInput>
  );
}

CommentInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  handleSend: PropTypes.func,
};

CommentInput.defaultProps = {
  value: '',
  handleSend: () => {},
};

export default CommentInput;
