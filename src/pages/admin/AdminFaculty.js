import React from 'react';
import './admincss/AdminFaculty.css';

const AdminFaculty = () => {
    return (
        <div className="admin-faculty">
            <div className="faculty">
                <h1 className="heading">Admin Faculty</h1>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="./addfaculty">Add Faculty</a></li>
                        <li className="nav-item"><a href="./viewfaculty">View All Faculty</a></li>
                        <li className="nav-item"><a href="./updatefaculty">Update Faculty</a></li>
                        <li className="nav-item"><a href="./deletefaculty">Delete Faculty</a></li>
                    </ul>
                </nav>
            </div>
            <div className="faculty-content">
                <h2>Faculty Overview</h2>
                <p>
                    Welcome to the admin panel for managing faculty. Here, you can perform various actions related to faculty such as adding, viewing, updating, and deleting faculty.
                </p>
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="./addfaculty">Add Faculty</a></li>
                    <li><a href="./getfaculty">View All Faculty</a></li>
                    <li><a href="./updatefaculty">Update Faculty</a></li>
                    <li><a href="./deletefaculty">Delete Faculty</a></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminFaculty;
