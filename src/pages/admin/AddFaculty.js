import React, { useState } from 'react';
import axios from 'axios';
import './admincss/AddFaculty.css'; // Import CSS for styling
import config from '../../config'

export default function AddFaculty() {
    const [formData, setFormData] = useState({
        facultyId: '',
        fullName: '',
        gender: '',
        department: '',
        qualification: '',
        designation: '',
        email: '',
        contact: '',
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
            const response = await axios.post(`${config.url}/addfaculty`, formData);
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
            <h2 className="heading">Faculty Registration</h2>
            <p className="instruction">Please fill out the following details to register a new faculty member:</p>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="facultyId">Faculty ID:</label>
                <input type="text" id="facultyId" name="facultyId" value={formData.facultyId} onChange={handleChange} />

                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />

                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">-Select-</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <label htmlFor="department">Department:</label>
                <select id="department" name="department" value={formData.department} onChange={handleChange}>
                    <option value="">-Select-</option>
                    <option value="CSE(REGULARS)">CSE(REGULARS)</option>
                    <option value="CSE(HONOURS)">CSE(HONOURS)</option>
                    <option value="CSIT">CSIT</option>
                </select>

                <label htmlFor="qualification">Qualification:</label>
                <select id="qualification" name="qualification" value={formData.qualification} onChange={handleChange}>
                    <option value="">-Select-</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="Ph.D.">Ph.D.</option>
                </select>

                <label htmlFor="designation">Designation:</label>
                <select id="designation" name="designation" value={formData.designation} onChange={handleChange}>
                    <option value="">-Select-</option>
                    <option value="Professor">Professor</option>
                    <option value="Assistant Professor">Assistant Professor</option>
                    <option value="Associate Professor">Associate Professor</option>
                </select>
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

                <label htmlFor="contact">Contact:</label>
                <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} pattern='[6789][0-9]{9}'/>
                
                <div className="button-container">
                    <button type="submit" className="button">Submit</button>
                    <button type="reset" className="button">Clear Form</button>
                </div>
            </form>
        </div>
    );
}
