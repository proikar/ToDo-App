import React, { useState } from 'react';
import './Registration.css';

const Registration = (props) => {
  const [username, setUsername] = useState('zhahansha');
  const [password, setPassword] = useState('zhanuzak');

  const handleRegistration = () => {
    console.log('Регистрация/вход:', { username, password });
    props.onAuthentication();
  };

  return (
    <div className="registration-container">
      <h2 className="text-center mb-4">Hello! Welcome to my ToDo App!</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User name:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary btn-block" onClick={handleRegistration}>
          Continue!
        </button>
      </form>
    </div>
  );
};

export default Registration;
