// UpdateFaculty.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admincss/UpdateFaculty.css'; 
import config from '../../config'

export default function UpdateFaculty() {
    const [facultyList, setFacultyList] = useState([]); 
    const [selectedFaculty, setSelectedFaculty] = useState(null); 
    const [updateData, setUpdateData] = useState({
        fullName: "",
        gender: "",
        department: "",
        qualification: "",
        designation: "",
        email: "",
        contact: ""
    });
    const [filterId, setFilterId] = useState(''); // State for filtering by faculty ID

    const getFaculty = async () => {
        try {
            const response = await axios.get(`${config.url}/getfaculty`);
            setFacultyList(response.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getFaculty();
    }, []);

    const handleFacultySelect = (faculty) => {
        setSelectedFaculty(faculty);
        setUpdateData({
            fullName: faculty.fullName,
            gender: faculty.gender,
            department: faculty.department,
            qualification: faculty.qualification,
            designation: faculty.designation,
            email: faculty.email,
            contact: faculty.contact
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleUpdateFaculty = async () => {
        try {
            await axios.put(`${config.url}/updatefaculty/${selectedFaculty.facultyId}`, updateData);
            getFaculty();
            setSelectedFaculty(null);
            setUpdateData({
                fullName: "",
                gender: "",
                department: "",
                qualification: "",
                designation: "",
                email: "",
                contact: ""
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    // Filter faculty by ID
    const filteredFacultyById = facultyList.filter(faculty => faculty.facultyId.includes(filterId));

    return (
        <div className="update-faculty-container">
            <h2>Update Faculty</h2>
            <div className="faculty-list">
                <h3>Filter by Faculty ID:</h3>
                <input
                    type="text"
                    placeholder="Enter Faculty ID"
                    value={filterId}
                    onChange={(e) => setFilterId(e.target.value)}
                />
                <h3>Select Faculty:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Faculty ID</th>
                            <th>Full Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFacultyById.map((faculty) => (
                            <tr key={faculty.facultyId} onClick={() => handleFacultySelect(faculty)}>
                                <td>{faculty.facultyId}</td>
                                <td>{faculty.fullName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedFaculty && (
                <div className="update-form">
                    <h3>Update Faculty Details:</h3>
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
                                        <option value="CSE(REGULARS)">CSE(REGULARS)</option>
                                        <option value="CSE(HONOURS)">CSE(HONOURS)</option>
                                        <option value="CSIT">CSIT</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Qualification:</td>
                                <td>
                                    <select name="qualification" value={updateData.qualification} onChange={handleInputChange}>
                                        <option value="">Select Qualification</option>
                                        <option value="M.Tech">M.Tech</option>
                                        <option value="Ph.D.">Ph.D.</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Designation:</td>
                                <td>
                                    <select name="designation" value={updateData.designation} onChange={handleInputChange}>
                                        <option value="">Select Designation</option>
                                        <option value="Professor">Professor</option>
                                        <option value="Assistant Professor">Assistant Professor</option>
                                        <option value="Associate Professor">Associate Professor</option>
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
                        </tbody>
                    </table>
                    <button onClick={handleUpdateFaculty} className="button">Update</button>
                </div>
            )}
        </div>
    );
}
