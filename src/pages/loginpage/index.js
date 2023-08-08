import React, { useState } from 'react';
import './index.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState("");


  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    if (username && password && email) {
      // Successful login, perform necessary actions
      setLoginMessage("Login successful");
    } else if (username === "" || password === "" || email === "") {
      setLoginMessage("Username, Password and email are required");
    } else {
      // Invalid credential
      setLoginMessage("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h1>Login to Jira</h1>
      <form>
        <div className="input-container">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="login-button" type="button" onClick={handleSubmit}>
          Login
        </button>
        <p className="login-message">{loginMessage}</p>
      </form>
      <div className="links-container">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};


export default LoginPage;
