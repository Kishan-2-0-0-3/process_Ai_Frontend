// src/components/WelcomePage.jsx

import React from 'react';

const WelcomePage = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>You are logged in as {user.role}.</p>
      <button onClick={() => alert('Redirecting to dashboard')}>Go to Dashboard</button>
    </div>
  );
};

export default WelcomePage;
