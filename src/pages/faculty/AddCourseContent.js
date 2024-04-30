import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddCourseContent.css'; 
import config from '../../config';

function AddCourseContent() {
  const [facultyList, setFacultyList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [contentImage, setContentImage] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const response = await axios.get(`${config.url}/getfaculty`);
        setFacultyList(response.data);
      } catch (error) {
        setError('Failed to fetch faculty data. Please try again.');
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${config.url}/getcourse`);
        setCourseList(response.data);
      } catch (error) {
        setError('Failed to fetch course data. Please try again.');
      }
    };

    fetchFaculties();
    fetchCourses();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('faculty', selectedFaculty);
      formData.append('course', selectedCourse);
      formData.append('description', description);
      formData.append('link', link);
      formData.append('contentImage', contentImage);

      const response = await axios.post(`${config.url}/course/content/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        setSelectedFaculty('');
        setSelectedCourse('');
        setDescription('');
        setLink('');
        setContentImage(null);
        setSuccessMessage('Course content added successfully.');
        setError('');
      }
    } catch (error) {
      setError('Failed to add course content. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Add Course Content</h2>
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="faculty">Faculty:</label>
          <select
            id="faculty"
            value={selectedFaculty}
            onChange={(e) => setSelectedFaculty(e.target.value)}
            className="form-input"
            required
          >
            <option value="">--Select--</option>
            {facultyList.map((faculty) => (
              <option key={faculty.facultyId} value={faculty.facultyId}>
                {faculty.facultyId} - {faculty.fullName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <select
            id="course"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="form-input"
            required
          >
            <option value="">--Select--</option>
            {courseList.map((course) => (
              <option key={course.ccode} value={course.ccode}>
                {course.ccode} - {course.ctitle}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-input"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="link">Link:</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contentImage">Content Image:</label>
          <input
            type="file"
            id="contentImage"
            onChange={(e) => setContentImage(e.target.files[0])}
            className="form-input"
            accept="image/*"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Add Content</button>
        </div>
      </form>
    </div>
  );
}

export default AddCourseContent;
