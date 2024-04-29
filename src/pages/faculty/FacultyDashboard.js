import React from 'react';
import './FacultyDashboard.css';

const FacultyDashboard = () => {
    return (
        <div className="faculty-dashboard">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="./dashboard">Home</a></li>
                    <li className="nav-item"><a href="../student/changepassword">Change Password</a></li>
                    <li className="nav-item"><a href="./mycourses">My Courses</a></li>
                    <li className="nav-item"><a href="./addcoursecontent">Course Content</a></li>
                    <li className="nav-item"><a href="../facultylogin">Logout</a></li>
                </ul>
            </nav>
            <div className="faculty-info">
                <h1 className="heading">Faculty Dashboard</h1>
                <p>Welcome, Faculty! You have access to manage your courses, course content, and other related tasks.</p>
            </div>

            
        </div>
    );
};

export default FacultyDashboard;
