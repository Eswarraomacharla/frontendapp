import React from 'react';
import './admincss/AdminCourse.css'; 

const AdminCourse = () => {
    return (
        <div className="admin-course">
            <div className="course">
                <h1 className="heading">Admin Course</h1>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="./addcourse">Add Course</a></li>
                        <li className="nav-item"><a href="./viewcourse">View All Course</a></li>
                        <li className="nav-item"><a href="./updatecourse">Update Course</a></li>
                        <li className="nav-item"><a href="./deletecourse">Delete Course</a></li>
                    </ul>
                </nav>
            </div>
            <div className="course-content">
                <h2>Course Overview</h2>
                <p>
                    Welcome to the admin panel for managing courses. Here, you can perform various actions related to courses such as adding, viewing, updating, and deleting courses.
                </p>
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="./addcourse">Add Course</a></li>
                    <li><a href="./viewcourse">View All Courses</a></li>
                    <li><a href="./updatecourse">Update Course</a></li>
                    <li><a href="./deletecourse">Delete Course</a></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminCourse;
