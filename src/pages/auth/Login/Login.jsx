import React, { useState } from 'react';
import api from '@/api';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    api.auth.login({
      username,
      password,
    }).then((data) => {
      localStorage.setItem('token', data.access);
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
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <br />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>登录</button>
      <button onClick={handleRegister}>注册</button>
    </div>
  );
}
