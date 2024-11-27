import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    moreInfo1: '',
    moreInfo2: '',
    moreInfo3: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 서버로 회원가입 요청 전송
      const response = await axios.post('http://localhost:8081/oauth2/signup', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (response.status === 201) {
        alert('회원가입이 완료되었습니다!');
        navigate('/home'); // 메인 페이지로 이동
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrorMessage('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>추가 정보 입력</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="moreInfo1">추가 정보 1:</label>
          <input
            type="text"
            id="moreInfo1"
            name="moreInfo1"
            value={formData.moreInfo1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="moreInfo2">추가 정보 2:</label>
          <input
            type="text"
            id="moreInfo2"
            name="moreInfo2"
            value={formData.moreInfo2}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="moreInfo3">추가 정보 3:</label>
          <input
            type="text"
            id="moreInfo3"
            name="moreInfo3"
            value={formData.moreInfo3}
            onChange={handleChange}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Signup;
