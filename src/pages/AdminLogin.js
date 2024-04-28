import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './AdminLogin.css'; // Import CSS file

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      if (response.data != null) {
        window.location.replace('/admin/dashboard');
      } else {
        setMessage('Login Failed');
        setError('');
      }
    } catch (error) {
      setMessage('');
      setError(error.message);
    }
  };

  return (
    <div className="container"> {/* Updated class name */}
      <br />
      <h3 className="login-heading" align="center"><u>Admin Login</u></h3> {/* Updated class name */}
      {message ? <h4 className="login-message">{message}</h4> : <h4 className="login-message">{error}</h4>} {/* Updated class name */}
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group"> {/* Updated class name */}
          <label className="form-label">Admin Username:</label> {/* Updated class name */}
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <br />
        <div className="form-group"> {/* Updated class name */}
          <label className="form-label">Admin Password:</label> {/* Updated class name */}
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <br />
        <div className="centered">
          <button type="submit" className="submit-button">Login</button> {/* Updated class name */}
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
