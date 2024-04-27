import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admincss/DisplayMapping.css';
import config from '../config'

function Framing() {
    const [framing, setFraming] = useState([]);

    const fetchFraming = async () => {
        try {
            const response = await axios.get(`${config.url}/viewfcmapping`);
            setFraming(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Error fetching mapping data:', error);
        }
    };

    useEffect(() => {
        fetchFraming();
    }, []);

    return (
        <div>
            <h2 align="left">
                Framing List
            </h2>
            <table className="responsive-table" border={1} align="center">
                <thead>
                    <tr>
                        <th>Faculty ID</th>
                        <th>Full Name</th>
                        <th>Course Code</th>
                        <th>Course Title</th>
                        <th>Component</th>
                        <th>Section</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {framing.map((frame, index) => (
                        <tr key={index}>
                            <td>{frame.facultyid}</td>
                            <td>{frame.fullName}</td>
                            <td>{frame.ccode}</td>
                            <td>{frame.ctitle}</td>
                            <td>{frame.component}</td>
                            <td>{frame.section}</td>
                            <td>
                                <button className="update-btn">Update</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Framing;
