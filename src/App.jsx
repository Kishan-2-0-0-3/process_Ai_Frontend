// src/App.jsx

import { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      {isLogin ? <Login /> : <Register />}
      <button onClick={toggleForm}>
        {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
      </button>
    </div>
  );
}

export default App;
