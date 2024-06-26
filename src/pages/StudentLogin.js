import React, { useState } from 'react';
import axios from 'axios';
import './StudentLogin.css';
import config from '../config';

const StudentLogin = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [robotChecked, setRobotChecked] = useState(false);

  const defaultPassword = "1234"; 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!robotChecked) {
      setError('Please confirm that you are not a robot.');
      return;
    }

    if (password !== defaultPassword) {
      setError('Incorrect password. Please try again.');
      return;
    }

    try {
      const response = await axios.post(`${config.url}/login`);
      if (response.data != null) {
        window.location.replace("/student/dashboard");
      } else {
        setMessage("Login Failed")
        setError("")
      }
    } catch (error) {
      setMessage("")
      setError(error.message)
    }
  };

  const handleCheckboxChange = (e) => {
    setRobotChecked(e.target.checked);
  };

  return (
    <div className="container">
      <h2 className="login-message">Login Message</h2>
      <h3 align="center"><u>Student Login</u></h3>
      {message ? <h4 style={{ color: "green" }}>{message}</h4> : <h4 style={{ color: "red" }}>{error}</h4>}
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentId" className="form-label">Student ID:</label>
          <input
            type="number"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
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
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="robotCheckbox"
              checked={robotChecked}
              onChange={handleCheckboxChange}
              className="checkbox-input"
              required
            />
            <span className="checkbox-checkmark"></span>
          </div>
          <label className="checkbox-label" htmlFor="robotCheckbox">I am not a robot</label>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Login</button>
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;
