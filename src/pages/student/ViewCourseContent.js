import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewCourseContent.css'; 
import config from '../../config';

function ViewCourseContent() {
  const [courseContent, setCourseContent] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourseContent = async () => {
      try {
        const response = await axios.get(`${config.url}/course/content`);
        setCourseContent(response.data);
      } catch (error) {
        setError('Failed to fetch course content. Please try again.');
      }
    };

    fetchCourseContent();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">View Course Content</h2>
      {error && <div className="error-message">{error}</div>}
      <table className="content-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Course</th>
            <th>Link</th>
            <th>Content Image</th>
          </tr>
        </thead>
        <tbody>
          {courseContent.map((content) => (
            <tr key={content._id} className="content-item">
              <td>{content.description}</td>
              <td>{content.course}</td>
              <td><a href={content.link} target="_blank" rel="noopener noreferrer">{content.link}</a></td>
              <td><img src={`${config.url}/${content.contentImage}`} alt="" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewCourseContent;
