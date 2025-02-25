import { useState } from 'react';
import axios from 'axios';
//import jwt_decode from 'jwt-decode'; // Make sure to import jwt-decode for decoding the token
import WelcomePage from './WelcomePage';  // Import WelcomePage

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);  // State to store user info

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setToken('');
    setUser(null); // Reset user state on each attempt

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);  // Corrected API URL
      const { token } = response.data;

      // Decode the token to get user info (optional but useful for the welcome page)
      const decoded = jwt_decode(token);
      setToken(token);  // Store the token
      setUser(decoded); // Store user info

      // Optionally, store the token in localStorage to keep user logged in
      localStorage.setItem('token', token);

    } catch (err) {
      setError(err.response?.data?.message || 'Error logging in');
    }
  };

  if (user) {
    return <WelcomePage user={user} />;  // Show the WelcomePage after login
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {token && <p style={{ color: 'green' }}>Login successful. Token: {token}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
