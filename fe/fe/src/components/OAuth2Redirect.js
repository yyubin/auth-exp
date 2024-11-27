// src/components/OAuth2Redirect.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveTokens } from '../utils/auth';

const OAuth2Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    const refreshToken = urlParams.get('refreshToken');
    const isNewUser = urlParams.get('isNewUser');

    if (accessToken && refreshToken) {
      saveTokens({ accessToken, refreshToken });
      // 로그인 후 메인 페이지로 리다이렉트
      navigate(isNewUser === 'true' ? '/signup' : '/home');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return <div>로딩 중...</div>;
};

export default OAuth2Redirect;
