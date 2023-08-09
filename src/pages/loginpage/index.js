import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'fr' for French
  const keepLoginEng = " Keep me Logged in";
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const navigate = useNavigate();
  const handleKeepLoggedInChange = () => {
    setKeepLoggedIn(!keepLoggedIn);
  };
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };
  <div className="links-container">
    <a href="/forgot-password">
      {language === 'en' ? 'Forgot Password?' : 'Mot de passe oublié ?'}
    </a>
  </div>
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && email) {
      setLoginMessage(
        language === 'en'
          ? 'Login successful'
          : 'Connexion réussie'
      );

      navigate('/home');
    } else if (username === "" || password === "" || email === "") {
      setLoginMessage(
        language === 'en'
          ? 'Fill in required details'
          : ' sont requis'
      );
    } else {
      setLoginMessage(
        language === 'en'
          ? 'Invalid credentials'
          : 'Identifiants invalides'
      );
    }

  };
  return (
    <div className="login-container">

      <h1> {language === 'en' ? 'Login to Jira' : 'Connexion à Jira'}</h1>

      <form>
        <div className="input-container">
          <label className="label">
            {language === 'en' ? 'Username:' : 'Nom d\'utilisateur :'}
          </label>
          <input
            type="text"
            value={username}
            placeholder='Username'
            className='input-field'
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-container">
          <label className="label">
            {language === 'en' ? 'Email:' : 'Email :'}
          </label>
          <input
            type="text"
            value={email}
            placeholder='Email Address'
            className='input-field'
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-container">
          <label className="label">
            {language === 'en' ? 'Password:' : 'Mot de passe :'}
          </label>
          <input
            type="password"
            value={password}
            placeholder='Password'
            className='input-field'
            onChange={handlePasswordChange}
          />
        </div>
        <div className="input-container">
          <div className="keep-logged-in">
            <input
              className="keep-logged-in-checkbox"
              type="checkbox"
              id="keepLoggedIn"
              checked={keepLoggedIn}
              onChange={handleKeepLoggedInChange}
            />
            <label htmlFor="keepLoggedIn">
              &nbsp;
              {language === 'en' ? keepLoginEng : ' Rester connecté '}
            </label>
          </div>
        </div>
        <div className="login-button-container">
          <button className="login-button" type="button" onClick={handleSubmit}>
            {language === 'en' ? 'Login' : 'Se connecter'}
          </button>
        </div>
        <div className='login-button-container'>
          <p className="login-message">{loginMessage}</p>
        </div>

      </form>
      <div className="links-container">
        <a href="/forgot-password">
          {language === 'en' ? 'Forgot Password?' : 'Mot de passe oublié ?'}
        </a>
      </div>
      <div className="sign-txt">
        {language === 'en' ? 'Not yet a member? ' : 'Pas encore membre ? '}
        <a onClick={() => { navigate("/signup") }}>
          {language === 'en' ? 'Signup now' : 'Inscrivez-vous maintenant'}
        </a>
      </div>
      <p>
        {language === 'en'
          ? 'By logging in, you agree to the '
          : 'En vous , vous acceptez la '}
        <strong>{language === 'en' ? 'Privacy Policy' : 'Polque confidentialité'}</strong>
        <br />
        <br />

      </p><button className="lng-button" onClick={toggleLanguage}>
        {language === 'en' ? 'Switch to French' : 'Passer en anglais'}
      </button>
    </div>

  );
};
export default LoginPage;