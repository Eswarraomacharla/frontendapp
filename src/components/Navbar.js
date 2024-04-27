import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file
import logo from './logo.png'; // Import logo image file

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-menu">
                <ul>
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/about">About Project</Link></li>
                    <li className="nav-link">
                        <Link className='nav-link' to="#" onClick={toggleDropdown}>Login</Link>
                        {isDropdownOpen && (
                            <ul className="dropdown">
                                <li><Link className='nav-link' to="/studentlogin">Student</Link></li>
                                <li><Link className='nav-link' to="/facultylogin">Faculty</Link></li>
                                <li><Link className='nav-link' to="/adminlogin">Admin</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link className="nav-link" to="/contactus">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
