// import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/src/assets/lyft-logo.png" alt="Lyft Logo" />
            </div>
            <div className="nav-links">
                <li><button className="ride-btn">Get a ride</button></li>
                <li>Driver</li>
                <li>Rider</li>
                <li>Business</li>
                <li>Log In</li>
                <li>Sign Up</li>
                <li>🌐 EN</li>
            </div>
        </nav>
    );
}
export default Navbar;