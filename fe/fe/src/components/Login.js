// src/components/Login.js
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => window.location.href = 'http://localhost:8081/oauth2/authorization/google'}>
        Google Login
      </button>
      <p>또는 <Link to="/loginwait">로그인 대기</Link> 페이지로 이동하세요.</p>
    </div>
  );
};

export default Login;
