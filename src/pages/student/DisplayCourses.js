import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config'

function DisplayCourses() {
    const [courseList, setCourseList] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(`${config.url}/getcourse`)
            .then(response => {
                setCourseList(response.data);
            })
            .catch(error => {
                setError("Error fetching course data. Please try again later.");
                console.error('Error fetching course data:', error);
            });
    }, []);

    return (
        <div className="view-course-container">
            <h1 className="heading">Student Dashboard</h1>
            <div className="welcome-message">
                <p>Welcome, Student !</p>
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
            <h2 className="view-course-heading">View All Courses</h2>
            {error && <div className="error-message">{error}</div>}
            <table className="course-table">
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>Program</th>
                        <th>Academic Year</th>
                        <th>Semester</th>
                        <th>Year</th>
                        <th>Course Code</th>
                        <th>Course Title</th>
                        <th>LTPS</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {courseList.map(course => (
                        <tr key={course.ccode}>
                            <td>{course.department}</td>
                            <td>{course.program}</td>
                            <td>{course.ay}</td>
                            <td>{course.sem}</td>
                            <td>{course.year}</td>
                            <td>{course.ccode}</td>
                            <td>{course.ctitle}</td>
                            <td>{course.ltps}</td>
                            <td>{course.credits}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayCourses;
