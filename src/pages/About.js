import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Project</h1>
      <p style={styles.paragraph}>This project aims to provide a comprehensive solution for managing student courses efficiently. By leveraging modern web technologies, it offers a user-friendly interface for both students and educators to streamline various aspects of course management.</p>
      <h2 style={styles.subHeading}>Key Features</h2>
      <ul style={styles.list}>
        <li>Course Enrollment</li>
        <li>Assignment Submission</li>
        <li>Grading System</li>
        <li>Communication Tools</li>
        <li>Dashboard for Insights</li>
      </ul>
      <h2 style={styles.subHeading}>Goals</h2>
      <p style={styles.paragraph}>The primary goals of this project include:</p>
      <ul style={styles.list}>
        <li>Improving student-teacher communication</li>
        <li>Streamlining administrative tasks</li>
        <li>Enhancing the learning experience</li>
        <li>Providing insights through data analytics</li>
      </ul>
      <h2 style={styles.subHeading}>Benefits</h2>
      <p style={styles.paragraph}>By using this platform, users can experience the following benefits:</p>
      <ul style={styles.list}>
        <li>Efficient course management</li>
        <li>Clear communication channels</li>
        <li>Timely feedback and grading</li>
        <li>Access to course materials anytime, anywhere</li>
        <li>Improved academic performance</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
    marginTop: '30px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#666',
    marginBottom: '15px',
  },
  list: {
    textAlign: 'left',
    marginLeft: '40px',
  },
};

export default About;
