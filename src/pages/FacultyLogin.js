import React, { useState } from 'react';
import axios from 'axios';
import './FacultyLogin.css'; 
import config from '../config';
const FacultyLogin = () => {
  const [facultyId, setfacultyId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const defaultPassword = "1234"; // Set your default password here

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== defaultPassword) {
      setError('Incorrect password. Please try again.');
      return;
    }

    try 
    {
      const response = await axios.post(`${config.url}/login`);
      if (response.data!=null) 
      {
        window.location.replace("/faculty/dashboard")
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div className="container">
      <h2 className="login-message">Login Message</h2>
      <h3 align="center"><u>Faculty Login</u></h3>
      {
        message? <h4 style={{color:"green"}}>{message}</h4>:<h4 style={{color:"red"}}>{error}</h4>
      }
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="facultyId" className="form-label">Faculty ID:</label>
          <input
            type="number"
            id="facultyId"
            value={facultyId}
            onChange={(e) => setfacultyId(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Login</button>
        </div>
      </form>
    </div>
  );
};

export default FacultyLogin;