import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './login.css';

const LoginPage = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const [loginMessage, setLoginMessage] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [language, setLanguage] = useState('en');
  const keepLoginEng = " Keep me Logged in";

  const navigate = useNavigate();

  const handleKeepLoggedInChange = () => {
    setKeepLoggedIn(!keepLoggedIn);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const onSubmit = (data) => {
   
      navigate('/home');
   
  };

  return (
    <div className="login-container">
      <h1> {language === 'en' ? 'Login to Jira' : 'Connexion à Jira'}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <label className="label" htmlFor="username">
            {language === 'en' ? 'Username:' : 'Nom d\'utilisateur :'}
          </label>

          <input
            type="text"
            placeholder='Username'
            className='input-field'
            {...register("username", { required: "Username is required" })}
          />
          <p>{errors.username?.message}</p>
        </div>

        <div className="input-container">
          <label className="label" htmlFor="email">
            {language === 'en' ? 'Email:' : 'Email :'}
          </label>
          <input
            type="text"
            placeholder='Email Address'
            className='input-field'
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="input-container">
          <label className="label" htmlFor="password">
            {language === 'en' ? 'Password:' : 'Mot de passe :'}
          </label>
          <input
            type="password"
            placeholder='Password'
            className='input-field'
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
              }
            })}
          />
          <p>{errors.password?.message}</p>
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
          <button className="login-button" type="submit">
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
      </p>

      <button className="lng-button" onClick={toggleLanguage}>
        {language === 'en' ? 'Switch to French' : 'Passer en anglais'}
      </button>
    </div>
  );
};

export default LoginPage;
