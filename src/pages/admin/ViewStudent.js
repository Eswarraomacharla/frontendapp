import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admincss/ViewStudent.css'; // Import CSS file for styling
import config from '../../config'

export default function ViewStudent() {
    const [studentList, setStudentList] = useState([]); // Define studentList state variable
    const [searchTerm, setSearchTerm] = useState(''); // Define state variable for search term

    useEffect(() => {
        axios.get(`${config.url}/getstudent`)
            .then(response => {
                setStudentList(response.data);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });
    }, []);

    // Filter the studentList based on search term
    const filteredStudents = studentList.filter(student =>
        student.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="view-student-container">
            <h2>View All Students</h2>
            <div className="view-student-header">
                <input
                    type="text"
                    placeholder="Search by Name"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map(student => (
                        <tr key={student.studentId}>
                            <td>{student.studentId}</td>
                            <td>{student.fullName}</td>
                            <td>{student.gender}</td>
                            <td>{student.department}</td>
                            <td>{student.email}</td>
                            <td>{student.contact}</td>
                            <td>{student.address}</td>
                            <td>{student.dateOfBirth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
