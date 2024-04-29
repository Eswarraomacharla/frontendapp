import React, { useState } from 'react';
import axios from 'axios';
import './StudentChangePassword.css'; // Import CSS file
import config from '../../config';

const StudentChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }

    try {
      const response = await axios.post(`${config.url}/changePassword`, {
        currentPassword,
        newPassword
      });
      if (response.data.success) {
        setMessage('Password changed successfully.');
        setError('');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      } else {
        setMessage('');
        setError('Failed to change password. Please try again.');
      }
    } catch (error) {
      setMessage('');
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h2 className="message">Password Change Message</h2>
      <h3 align="center"><u>Change Password</u></h3>
      {message ? <h4 style={{ color: "green" }}>{message}</h4> : <h4 style={{ color: "red" }}>{error}</h4>}
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="currentPassword" className="form-label">Current Password:</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword" className="form-label">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password:</label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Change Password</button>
        </div>
      </form>
    </div>
  );
};

export default StudentChangePassword;
