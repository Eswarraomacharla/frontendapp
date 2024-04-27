import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admincss/DeleteStudent.css'; 
import config from '../config'

export default function DeleteStudent() {
    const [facultyList, setFacultyList] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 

    const getFaculty=async()=>
    {
        try{
                const response = await axios.get(`${config.url}/getfaculty`);
                setFacultyList(response.data);
            }
            catch(error) {
                console.error(error.message);
            }
    }

    useEffect(()=>{
        getFaculty();
    },[]);

    const filteredFaculties = facultyList.filter(faculty =>
        faculty.fullName && faculty.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const deleteFaculty = async(facultyId)=>{
        try{
            await axios.delete(`${config.url}/deletefaculty/${facultyId}`);
            getFaculty();
        }
        catch(error)
        {
            console.error(error.message);
        }
    }
    
    return (
        <div className="faculty-delete-container">
            <h2>Delete Students</h2>
            <div className="faculty-delete-header">
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
                            <th>Faculty ID</th>
                            <th>Full Name</th>
                            <th>Gender</th>
                            <th>Department</th>
                            <th>Qualification</th>
                            <th>Designation</th>
                            <th>Email</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFaculties.map((faculty) => (
                            <tr key={faculty.facultyId}>
                                <td>{faculty.facultyId}</td>
                                <td>{faculty.fullName}</td>
                                <td>{faculty.gender}</td>
                                <td>{faculty.department}</td>
                                <td>{faculty.qualification}</td>
                                <td>{faculty.designation}</td>
                                <td>{faculty.email}</td>
                                <td>{faculty.contact}</td>
                            <td>
                                <button onClick={() => deleteFaculty(faculty.facultyId)} className="button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
