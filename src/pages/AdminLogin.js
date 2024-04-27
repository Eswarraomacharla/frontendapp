import React, { useState } from 'react';
import axios from 'axios'
import config from '../config';
const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      if (response.data!=null) 
      {
        // navigate("/adminhome")
        window.location.replace("/admin/dashboard")
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
    <div>
      <br />
      <h3 align="center"><u>Admin Login</u></h3>
      {
        message? <h4 style={{color:"green"}}>{message}</h4>:<h4 style={{color:"red"}}>{error}</h4>
      }
      <br />
      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center' }}>
          <label>Admin Username:</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '200px' ,height:'25px'}} // Adjust the width as needed
          />
        </div>
        <br />
        <div style={{ textAlign: 'center' }}>
          <label>Admin Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '200px' ,height:'20px'}} // Adjust the width as needed
          />
        </div>
        <br />
        <div style={{ textAlign: 'center' }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
