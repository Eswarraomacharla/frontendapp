import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admincss/ViewCourse.css'; // Import CSS file for styling
import config from '../../config'

export default function ViewCourse() {
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
};
