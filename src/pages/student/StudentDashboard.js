// StudentDashboard.js
import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';

const StudentDashboard = () => {
    // State to store student ID
    const [studentId, setStudentId] = useState('');

    // Function to fetch student ID (You need to implement this function)
    const fetchStudentId = () => {
        // Retrieve student ID from storage or backend API
        // For example, you can use sessionStorage, localStorage, or fetch from backend
        const studentIdFromStorage = sessionStorage.getItem('studentId');
        setStudentId(studentIdFromStorage);
    };

    // Fetch student ID when component mounts
    useEffect(() => {
        fetchStudentId();
    }, []);

    return (
        <div className="student-dashboard">
            <h1 className="heading">Student Dashboard</h1>
            <div className="welcome-message">
                <p>Welcome, Student {studentId}!</p>
            </div>
            
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="./dashboard">Home</a></li>
                    <li className="nav-item"><a href="./changepassword">Change Password</a></li>
                    <li className="nav-item"><a href="./studentcourses">View Courses</a></li>
                    <li className="nav-item"><a href="./viewcoursecontent">View Course Content</a></li>
                    <li className="nav-item"><a href="../studentlogin">Logout</a></li>
                </ul>
            </nav>
            <div className="dashboard-options">
                <h2>What You Can Do:</h2>
                <ul>
                    <li>View your enrolled courses</li>
                    <li>Access course content and materials</li>
                    <li>View grades and progress</li>
                    <li>Update your personal information</li>
                    <li>Change your password</li>
                    <li>Logout from your account</li>
                </ul>
            </div>
        </div>
        
    );
};

export default StudentDashboard;
