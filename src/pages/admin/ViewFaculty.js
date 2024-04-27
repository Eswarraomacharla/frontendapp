import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admincss/ViewFaculty.css';
import config from '../config'

export default function ViewFaculty() {
    const [facultyList, setFacultyList] = useState([]); // Define facultyList state variable
    const [filteredFacultyList, setFilteredFacultyList] = useState([]); // Define filteredFacultyList state variable
    const [error, setError] = useState(""); // State variable for error handling
    const [filterInput, setFilterInput] = useState(""); // State variable for filter input

    useEffect(() => {
        axios.get(`${config.url}/getfaculty`)
            .then(response => {
                setFacultyList(response.data);
                setFilteredFacultyList(response.data); // Initialize filteredFacultyList with all faculty members
            })
            .catch(error => {
                setError("Error fetching faculty data. Please try again later.");
                console.error('Error fetching faculty data:', error);
            });
    }, []);

    // Function to handle filter input change
    const handleFilterChange = (e) => {
        setFilterInput(e.target.value);
        filterFaculty(e.target.value); // Filter faculty members based on input
    };

    // Function to filter faculty members based on input
    const filterFaculty = (input) => {
        if (input.trim() === "") {
            setFilteredFacultyList(facultyList); // Reset to display all faculty members if input is empty
        } else {
            const filtered = facultyList.filter(faculty =>
                faculty.fullName.toLowerCase().includes(input.toLowerCase()) ||
                faculty.department.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredFacultyList(filtered); // Update filteredFacultyList with filtered results
        }
    };

    return (
        <div className="view-faculty-container">
            <div className="view-faculty-header">
                <h2>View All Faculty</h2>
                <input
                    type="text"
                    placeholder="Search by name or department"
                    value={filterInput}
                    onChange={handleFilterChange}
                />
            </div>
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
                <table>
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
                        {filteredFacultyList.map((faculty) => (
                            <tr key={faculty.facultyId}>
                                <td>{faculty.facultyId}</td>
                                <td>{faculty.fullName}</td>
                                <td>{faculty.gender}</td>
                                <td>{faculty.department}</td>
                                <td>{faculty.qualification}</td>
                                <td>{faculty.designation}</td>
                                <td>{faculty.email}</td>
                                <td>{faculty.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
