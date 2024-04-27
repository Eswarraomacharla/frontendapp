import React from 'react';
import cms from './images/cms.jpg'; // Import logo image file
import './Home.css'; // Import CSS file for Home component

const Home = () => {
    return (
        <div className="home-container">
            <div className="header">
                <center><h2 className="home-heading">Student Course Management System</h2></center>
                <center><p className="home-subtitle">Welcome to the Student Course Management System. Manage your courses with ease!</p></center>
            </div>
            <div className="content-container">
                <div className="section-container">
                    <div className="image-container">
                        <img src={cms} alt="CMS Logo" className="home-image"/>
                    </div>
                </div>
                <div className="section-container">
                    <div className="features">
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Easy Course Enrollment</li>
                            <li>Access to Course Materials</li>
                            <li>Submit Assignments Online</li>
                            <li>Track Course Progress</li>
                            <li>Communicate with Instructors</li>
                            <li>View Grades and Feedback</li>
                        </ul>
                    </div>
                </div>
                <div className="section-container">
                    <div className="benefits">
                        <h3>Benefits of Using Our System:</h3>
                        <ul>
                            <li>Streamlined Course Management</li>
                            <li>24/7 Access to Course Resources</li>
                            <li>Efficient Communication Channels</li>
                            <li>Enhanced Learning Experience</li>
                            <li>Improved Organization and Tracking</li>
                        </ul>
                    </div>
                </div>
                <div className="section-container">
                    <div className="about-us">
                        <h3>About Us:</h3>
                        <p>We are dedicated to providing a seamless experience for students and educators alike. Our platform is designed to simplify the complexities of managing courses and facilitate effective learning environments.</p>
                        <p>With our intuitive interface and robust features, students can focus more on their studies and less on administrative tasks. Educators can efficiently administer courses, provide feedback, and engage with their students.</p>
                        <p>Join us in revolutionizing the way courses are managed and learning is facilitated. Let's make education accessible, engaging, and rewarding for all.</p>
                    </div>
                </div>
                <div className="section-container">
                    <div className="contact-us">
                        <h3>Contact Us:</h3>
                        <p>If you have any questions or feedback, feel free to reach out to us:</p>
                        <ul>
        <li>Email: eswarmarcharla143@gmail.com</li>
        <li>Phone: 9618074482</li>
        <li>Address: JC Main Street, visakhapatnam,India</li>
      </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
