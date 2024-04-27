import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admincss/DeleteCourse.css'; 
import config from '../config'

export default function DeleteCourse() {
    const [courseList, setCourseList] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 

    const getCourse=async()=>
    {
        try{
                const response = await axios.get(`${config.url}/getcourse`);
                setCourseList(response.data);
            }
            catch(error) {
                console.error(error.message);
            }
    }

    useEffect(()=>{
        getCourse();
    },[]);

    const filteredCourses = courseList.filter(course =>
        course.ccode.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    
    const deleteCourse = async(ccode)=>{
        try{
            await axios.delete(`${config.url}/deletecourse/${ccode}`);
            getCourse();
        }
        catch(error)
        {
            console.error(error.message);
        }
    }
    
    return (
        <div className="course-delete-container">
            <h2>Delete Courses</h2>
            <div className="course-delete-header">
                <input
                    type="text"
                    placeholder="Search by course code"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
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
                    {filteredCourses.map((course) => (
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
                            <td>
                                <button onClick={() => deleteCourse(course.ccode)} className="button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
