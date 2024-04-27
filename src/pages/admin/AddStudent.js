// AddStudent.js
import React, { useState } from 'react';
import axios from 'axios';
import './admincss/AddStudent.css';
import config from '../config'

export default function AddStudent() {
    const [formData, setFormData] = useState({
        studentId: '',
        fullName: '',
        gender: '',
        department: '',
        email: '',
        contact: '',
        address: '',
        dateOfBirth: ''
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${config.url}/addstudent`, formData);
            if (response.status === 200) {
                setMessage(response.data);
                setError('');
            }
        } catch (error) {
            setError(error.response.data);
            setMessage('');
        }
    };


    return (
        <div className="container">
            <h2 className="heading">Student Registration</h2>
            <p className="instruction">Please fill out the following details to register a new student:</p>
            {message ? <p className="success-message">{message}</p> : null}
            {error ? <p className="error-message">{error}</p> : null}
            <form onSubmit={handleSubmit}>
                <table className="form-table">
                    <tbody>
                        <tr>
                            <td><label htmlFor="studentId">Student ID</label></td>
                            <td><input type="text" id="studentId" name="studentId" value={formData.studentId} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="fullName">Full Name</label></td>
                            <td><input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="gender">Gender</label></td>
                            <td>
                                <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="department">Department</label></td>
                            <td>
                                <select id="department" name="department" value={formData.department} onChange={handleChange} required>
                                    <option value="">--Select Department--</option>
                                    <option value="CSE(Honours)">CSE(Honours)</option>
                                    <option value="CSE(Regulars)">CSE(Regulars)</option>
                                    <option value="CSIT">CS&IT</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="contact">Contact</label></td>
                            <td><input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="address">Address</label></td>
                            <td><textarea id="address" name="address" value={formData.address} onChange={handleChange}></textarea></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="dateOfBirth">Date of Birth</label></td>
                            <td><input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="button-container">
                    <button type="submit" className="button">Add Student</button>
                    <button type="reset" className="button">Clear Form</button>
                </div>
            </form>
        </div>
    );
};
