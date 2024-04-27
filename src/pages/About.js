import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Project</h1>
      <p style={styles.paragraph}>This project aims to provide a comprehensive solution for managing student courses efficiently. By leveraging modern web technologies, it offers a user-friendly interface for both students and educators to streamline various aspects of course management.</p>
      <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis tellus et felis fermentum, eget aliquet nisi finibus. Vivamus ultrices metus sit amet neque faucibus vestibulum.</p>
      <p style={styles.paragraph}>Sed auctor, ex a blandit ultricies, nisi mauris luctus libero, sit amet tincidunt urna magna vel purus. Fusce efficitur, est eu fermentum lacinia, ligula nisl congue risus, sed fermentum sapien mauris vel velit. Duis congue ipsum eu orci scelerisque, id accumsan neque consequat.</p>
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
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#666',
    marginBottom: '15px',
  },
};

export default About;
