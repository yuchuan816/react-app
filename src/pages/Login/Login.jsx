import React, { useState } from 'react';


export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log(userName, password);
  };
  return (
    <div>
      <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
      <br />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
}
