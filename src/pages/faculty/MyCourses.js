import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyCourses.css'; // Import CSS file
import config from '../../config';

function MyCourses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${config.url}/getcourse`); // Update the endpoint according to your backend route
      setCourses(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h2 align="left">My Courses</h2>
      <table className="responsive-table" border={1} align="center">
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
          {courses.map((course) => (
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

export default MyCourses;
