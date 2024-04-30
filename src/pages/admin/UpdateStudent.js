// UpdateStudent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admincss/UpdateStudent.css'; 
import config from '../../config'

export default function UpdateStudent() {
    const [studentList, setStudentList] = useState([]); 
    const [selectedStudent, setSelectedStudent] = useState(null); 
    const [updateData, setUpdateData] = useState({
        fullName: "",
        gender: "",
        department: "",
        email: "",
        contact: "",
        address:"",
        dateOfBirth:""
    });
    const [filterId, setFilterId] = useState(''); 

    const getStudent = async () => {
        try {
            const response = await axios.get(`${config.url}/getstudent`);
            setStudentList(response.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getStudent();
    }, []);

    const handleStudentSelect = (student) => {
        setSelectedStudent(student);
        setUpdateData({
            fullName: student.fullName,
            gender: student.gender,
            department: student.department,
            email: student.email,
            contact: student.contact,
            address: student.address,
            dateOfBirth : student.dateOfBirth
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleUpdateStudent = async () => {
        try {
            await axios.put(`${config.url}/updatestudent/${selectedStudent.studentId}`, updateData);
            getStudent();
            setSelectedStudent(null);
            setUpdateData({
                fullName: "",
                gender: "",
                department: "",
                email: "",
                contact: "",
                address:"",
                dateOfBirth:""
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    const filteredStudentsById = studentList.filter(student => student.studentId.includes(filterId));

    return (
        <div className="update-student-container">
            <h2>Update Student</h2>
            <div className="student-list">
                <h3>Filter by Student ID:</h3>
                <input
                    type="text"
                    placeholder="Enter Student ID"
                    value={filterId}
                    onChange={(e) => setFilterId(e.target.value)}
                />
                <h3>Select Student:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Full Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudentsById.map((student) => (
                            <tr key={student.studentId} onClick={() => handleStudentSelect(student)}>
                                <td>{student.studentId}</td>
                                <td>{student.fullName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedStudent && (
                <div className="update-form">
                    <h3>Update Student Details:</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Full Name:</td>
                                <td><input type="text" name="fullName" value={updateData.fullName} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Gender:</td>
                                <td>
                                    <select name="gender" value={updateData.gender} onChange={handleInputChange}>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Department:</td>
                                <td>
                                    <select name="department" value={updateData.department} onChange={handleInputChange}>
                                        <option value="">Select Department</option>
                                        <option value="CSE">CSE</option>
                                        <option value="EEE">EEE</option>
                                        <option value="Mechanical">Mechanical</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td><input type="email" name="email" value={updateData.email} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Contact:</td>
                                <td><input type="text" name="contact" value={updateData.contact} onChange={handleInputChange} /></td>
                            </tr>
                            <tr><td>Address:</td>
                            <td><textarea id="address" name="address" value={updateData.address} onChange={handleInputChange}></textarea></td>
                        </tr>
                        <tr><td>Date Of Birth:</td>
                            <td><input type="date" id="dateOfBirth" name="dateOfBirth" value={updateData.dateOfBirth} onChange={handleInputChange} /></td>
                        </tr>
                        </tbody>
                    </table>
                    <button onClick={handleUpdateStudent} className="button">Update</button>
                </div>
            )}
        </div>
    );
}
