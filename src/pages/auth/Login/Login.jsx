import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import api from '@/api';

export default function Login({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    api.auth.register({
      username,
      password,
    }).then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <TextField
        label="用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <TextField
        label="密码"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleLogin}>登录</Button>
      <Button color="primary" onClick={handleRegister}>注册</Button>
    </div>
  );
}
