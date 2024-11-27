// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import OAuth2Redirect from './components/OAuth2Redirect';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/oauth2/redirect" element={<OAuth2Redirect />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<div>회원가입 페이지</div>} />
      </Routes>
    </Router>
  );
};

export default App;
