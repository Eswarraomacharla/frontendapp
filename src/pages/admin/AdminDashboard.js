import React, { useState } from 'react';
import { Button, Modal, Form, TextArea } from 'semantic-ui-react'; // Assuming you're using Semantic UI React components for UI elements
import './admincss/AdminDashboard.css';

const AdminDashboard = () => {
    const [open, setOpen] = useState(false);
    const [emailContent, setEmailContent] = useState('');

    const handleSendEmail = () => {
        console.log("Sending email to all students:", emailContent);
        setOpen(false);
    };

    return (
        <div className="admindashboard">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="./dashboard">Home</a></li>
                    <li className="nav-item"><a href="/changepassword">ChangePassword</a></li>
                    <li className="nav-item"><a href="./adminstudent">Student</a></li>
                    <li className="nav-item"><a href="./adminfaculty">Faculty</a></li>
                    <li className="nav-item"><a href="./admincourse">Course</a></li>
                    <li className="nav-item"><a href="./facultycoursemapping">FacultyCourseMapping</a></li>
                    <li className="nav-item"><a href="./displaymapping">DisplayMapping</a></li>
                    <li className="nav-item"><a href="../">Logout</a></li>
                </ul>
            </nav>
            <div className="admin-info">
                <h1 className="heading">Admin Dashboard</h1>
                <p>Welcome, Admin! As an administrator, you have access to manage various aspects of the system:</p>
                <ul>
                    <li>Manage students' information and accounts.</li>
                    <li>Handle faculty members' details and accounts.</li>
                    <li>Oversee courses offered by the institution.</li>
                    <li>Manage course enrollment and mapping.</li>
                    <li>And more administrative tasks.</li>
                </ul>
            </div>

            {/* Button to trigger sending email modal */}
            <div className="bottom-menu">
                <Button onClick={() => setOpen(true)}>Send Email to All Students</Button>
            </div>

            {/* Modal for sending email */}
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
            >
                <Modal.Header>Send Email to All Students</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field
                            control={TextArea}
                            placeholder='Type your email content here...'
                            value={emailContent}
                            onChange={(e) => setEmailContent(e.target.value)}
                        />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        content="Send"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={handleSendEmail}
                        positive
                    />
                </Modal.Actions>
            </Modal>
        </div>
    );
};

export default AdminDashboard;
