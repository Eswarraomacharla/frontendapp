import React from 'react';
import './admincss/AdminStudent.css';

const AdminStudent = () => {
    return (
        <div className="admin-student">
            <div className="student">
                <h1 className="heading">Admin Student</h1>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="./addstudent">Add Student</a></li>
                        <li className="nav-item"><a href="./viewstudent">View All Student</a></li>
                        <li className="nav-item"><a href="./updatestudent">Update Student</a></li>
                        <li className="nav-item"><a href="./deletestudent">Delete Student</a></li>
                    </ul>
                </nav>
            </div>
            <div className="student-content">
                <h2>Student Overview</h2>
                <p>
                    Welcome to the admin panel for managing students. Here, you can perform various actions related to students such as adding, viewing, updating, and deleting students.
                </p>
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="./addstudent">Add Student</a></li>
                    <li><a href="./viewstudent">View All Students</a></li>
                    <li><a href="./updatestudent">Update Student</a></li>
                    <li><a href="./deletestudent">Delete Student</a></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminStudent;
