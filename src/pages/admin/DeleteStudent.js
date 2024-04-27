import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admincss/DeleteStudent.css'; 
import config from '../config'

export default function DeleteStudent() {
    const [studentList, setStudentList] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 

    const getStudent=async()=>
    {
        try{
                const response = await axios.get(`${config.url}/getstudent`);
                setStudentList(response.data);
            }
            catch(error) {
                console.error(error.message);
            }
    }

    useEffect(()=>{
        getStudent();
    },[]);

    const filteredStudents = studentList.filter(student =>
        student.fullName && student.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const deleteStudent = async(studentId)=>{
        try{
            await axios.delete(`${config.url}/deletestudent/${studentId}`);
            getStudent();
        }
        catch(error)
        {
            console.error(error.message);
        }
    }
    
    return (
        <div className="student-delete-container">
            <h2>Delete Students</h2>
            <div className="student-delete-header">
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
                        <th>Action</th>
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
                            <td>
                                <button onClick={() => deleteStudent(student.studentId)} className="button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
