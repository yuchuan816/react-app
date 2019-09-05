import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import {
  Button,
  TextField,
  Divider,
  Typography,
} from '@material-ui/core';
import {
  LoginWrapper,
  LoginCoreWrapper,
  AccountInputWrapper,
  ButtonWrapper,
  RegisterButtonWrapper,
} from './styled';
import api from '@/api';

export default function Login({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = () => {
    api.auth.login({
      username,
      password,
    }).then((data) => {
      localStorage.setItem('token', data.access);
      history.push({ pathname: '/' });
    });
  };

  const handleRegister = () => {
    enqueueSnackbar('注册功能开发中！', { variant: 'info' });
    // api.auth.register({
    //   username,
    //   password,
    // }).then((data) => {
    //   console.log(data);
    // });
  };

  return (
    <LoginWrapper>
      <LoginCoreWrapper elevation={6}>
        <Typography variant="h6" gutterBottom color="primary">L-Y-C BLOG</Typography>
        <Divider />
        <AccountInputWrapper>
          <TextField
            fullWidth
            label="用户名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </AccountInputWrapper>
        <TextField
          fullWidth
          label="密码"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonWrapper>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>登录</Button>
          <RegisterButtonWrapper>
            <Button color="primary" onClick={handleRegister}>注册</Button>
          </RegisterButtonWrapper>
        </ButtonWrapper>
      </LoginCoreWrapper>
    </LoginWrapper>
  );
}
