import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './StudentCourses.css'; 

function StudentCourses() {
    const [academicYear, setAcademicYear] = useState('');
    const [semester, setSemester] = useState('');
    const [studentId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/student/displaycourses'); 
    };

    return (
        <div>
            <h1 className="heading">Student Dashboard</h1>
            <div className="welcome-message">
                <p>Welcome, Student {studentId}!</p>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="./dashboard">Home</a></li>
                    <li className="nav-item"><a href="/changepassword">Change Password</a></li>
                    <li className="nav-item"><a href="/student/studentcourses">View Courses</a></li>
                    <li className="nav-item"><a href="/viewcoursecontent">View Course Content</a></li>
                    <li className="nav-item"><a href="../studentlogin">Logout</a></li>
                </ul>
            </nav>
            <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>View Courses</h3>
            <form onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center' }}>
                    <label>Academic Year</label>
                    <select name="ay" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} required>
                        <option value="">--Select--</option>
                        <option value="2023-24">2023-24</option>
                        <option value="2022-23">2022-23</option>
                        <option value="2021-22">2021-22</option>
                    </select>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <label>Semester</label>
                    <select name="sem" value={semester} onChange={(e) => setSemester(e.target.value)} required>
                        <option value="">--Select--</option>
                        <option value="ODD">ODD</option>
                        <option value="EVEN">EVEN</option>
                    </select>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <input type="submit" value="View" className="button" />
                    <input type="reset" value="Clear" className="button" />
                </div>
            </form>
        </div>
    );
}

export default StudentCourses;
