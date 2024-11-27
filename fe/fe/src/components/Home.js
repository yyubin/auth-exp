// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { isAuthenticated, getAccessToken } from '../utils/auth';
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated()) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/any', {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`
            }
          });
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
        </div>
      ) : (
        <h1>Loading user data...</h1>
      )}
    </div>
  );
};

export default Home;
