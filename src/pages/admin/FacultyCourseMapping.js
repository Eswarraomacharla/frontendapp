import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admincss/FacultyCourseMapping.css'
import config from '../../config'

function AddFraming() {
    const [facultys, setFacultys] = useState([]);
    const [courses, setCourses] = useState([]);
    const [ltps, setLTPS] = useState('');
    const [formData, setFormData] = useState({
        facultyid: '',
        ccode: '',
        component: [],
        section: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const fetchCourses = async () => {
        try {
            const response = await axios.get(`${config.url}/getcourse`);
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching course data:', error);
        }
    };

    const fetchFacultys = async () => {
        try {
            const response = await axios.get(`${config.url}/getfaculty`);
            setFacultys(response.data);
        } catch (error) {
            console.error('Error fetching faculty data:', error);
        }
    };

    useEffect(() => {
        fetchFacultys();
        fetchCourses();
    }, []);

    const handlechange = (e) => {
        const { id, value, type, checked } = e.target;
        if (id === 'ccode') {
            const selectedCourse = courses.find(course => course.ccode === value);
            setFormData({ ...formData, [id]: value });
            setLTPS(selectedCourse ? selectedCourse.ltps : '');
        } else if (type === 'checkbox') {
            let updatedComponents = [...formData.component]; 
            if (checked) {
                updatedComponents.push(value); 
            } else {
                updatedComponents = updatedComponents.filter(component => component !== value); 
            }
            setFormData({ ...formData, [id]: updatedComponents }); 
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const selectedCourse = courses.find(course => course.ccode === formData.ccode);
            const selectedFaculty = facultys.find(faculty => faculty.facultyId === formData.facultyid);
            const newData = {
                ...formData,
                ctitle: selectedCourse ? selectedCourse.ctitle : '',
                fullName: selectedFaculty ? selectedFaculty.fullName : ''
            };
            const response = await axios.post("http://localhost:1234/insertfcm", newData);
            if (response.status === 200) {
                setFormData({
                    facultyid: '',
                    ccode: '',
                    component: [],
                    section: ''
                });
                setMessage(response.data);
                setError('');
            }
        } catch (error) {
            setError(error.response.data);
            setMessage('');
        }
    };
    return (
        <div>
            <div>
                <div>
                    <h2>Faculty Course Mapping</h2>
                    <form onSubmit={handleSubmit}>
                        {message ? <h4 style={{ color: 'green' }}>{message}</h4> : <h4 style={{ color: 'red' }}>{error}</h4>}
                        <div>
                            <label>Course Code: </label>
                            <select id="ccode" onChange={handlechange} required>
                                <option value="">--Select--</option>
                                {courses.map(course => (
                                    <option key={course.ccode} value={course.ccode}>{course.ccode} - {course.ctitle}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>LTPS: </label>
                            <span>{ltps}</span>
                        </div>
                        <div>
                            <label>Faculty: </label>
                            <select id='facultyid' onChange={handlechange} required>
                                <option value="">--Select--</option>
                                {facultys.map(faculty => (
                                    <option key={faculty.facultyId} value={faculty.facultyId}>{faculty.facultyId} - {faculty.fullName}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <input type='checkbox' id='component' value={'L'} onChange={handlechange} />Lecture&nbsp;&nbsp;&nbsp;
                            <input type='checkbox' id='component' value={'T'} onChange={handlechange} />Tutorial&nbsp;&nbsp;&nbsp;
                            <input type='checkbox' id='component' value={'P'} onChange={handlechange} />Practical&nbsp;&nbsp;&nbsp;
                            <input type='checkbox' id='component' value={'S'} onChange={handlechange} />Skill&nbsp;&nbsp;&nbsp;
                        </div>
                        <div>
                            <label>Section:</label>
                            <input type='number' min={1} max={30} id='section' onChange={handlechange} required />
                        </div>
                        <button type='submit'>Add</button>&nbsp;&nbsp;&nbsp;
                        <button type='reset'>Clear</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddFraming;
