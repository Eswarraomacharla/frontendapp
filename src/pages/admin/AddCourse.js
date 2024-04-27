import React, { useState } from 'react';
import './admincss/AddCourse.css'; 
import axios from 'axios';
import config from '../../config'
export default function AddCourse() {
    const [formData, setFormData] = useState({
        department: '',
        program: '',
        ay: '',
        sem: '',
        year: '',
        ccode: '',
        ctitle: '',
        ltps: '',
        credits: ''
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
            const response = await axios.post(`${config.url}/addcourse`, formData);
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
            <h2 className="heading">Add Course</h2>
            {message && <h3 className="success-message">{message}</h3>}
            {error && <h3 className="error-message">{error}</h3>}
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="department">Department:</label>
                    <select id="department" name="department" value={formData.department} onChange={handleChange} required>
                        <option value="">-Select-</option>
                        <option value="CSE(REGULARS)">CSE(REGULARS)</option>
                        <option value="CSE(HONOURS)">CSE(HONOURS)</option>
                        <option value="CS&IT">CS&IT</option>
                    </select>
                </div>
                <div className="form-row">
                    <label htmlFor="program">Select Program:</label>
                    <select id="program" name="program" value={formData.program} onChange={handleChange} required>
                        <option value="">--Select--</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="M.Tech">M.Tech</option>
                    </select>
                </div>
                <div className="form-row">
                    <label htmlFor="ay">Select Academic Year:</label>
                    <select id="ay" name="ay" value={formData.ay} onChange={handleChange} required>
                        <option value="">--Select--</option>
                        <option value="2023-24">2023-24</option>
                        <option value="2022-23">2022-23</option>
                        <option value="2021-22">2021-22</option>
                    </select>
                </div>
                <div className="form-row">
                    <label htmlFor="sem">Select Semester:</label>
                    <select id="sem" name="sem" value={formData.sem} onChange={handleChange} required>
                        <option value="">--Select--</option>
                        <option value="ODD">ODD</option>
                        <option value="EVEN">EVEN</option>
                    </select>
                </div>
                <div className="form-row">
                    <label htmlFor="year">Enter Year:</label>
                    <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} required min="1" max="4" />
                </div>
                <div className="form-row">
                    <label htmlFor="ccode">Enter Course Code:</label>
                    <input type="text" id="ccode" name="ccode" value={formData.ccode} onChange={handleChange} required />
                </div>
                <div className="form-row">
                    <label htmlFor="ctitle">Enter Course Title:</label>
                    <input type="text" id="ctitle" name="ctitle" value={formData.ctitle} onChange={handleChange} required />
                </div>
                <div className="form-row">
                    <label htmlFor="ltps">LTPS:</label>
                    <input type="text" id="ltps" name="ltps" value={formData.ltps} onChange={handleChange} required placeholder="X-X-X-X" />
                </div>
                <div className="form-row">
                    <label htmlFor="credits">Credits:</label>
                    <input type="number" id="credits" name="credits" value={formData.credits} onChange={handleChange} required min="0" max="8" />
                </div>
                <div className="button-container">
                    <button type="submit" className="button">Add</button>
                    <button type="reset" className="button">Clear</button>
                </div>
            </form>
        </div>
    );
};
