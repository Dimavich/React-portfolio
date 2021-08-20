import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import '../App.css'


const Navbar = () => {
    return (
        <Router>
            <div className="navbar-container">
                <h2 className="nav-logo"> <span className='blue-text'>Dmitriy</span> Babich</h2>
                <ul className='nav-ul'>
                    <li className="nav-li">
                      <Link to='about' className='nav-link'>About me</Link>
                    </li>
                    <li className="nav-li">
                      <Link to='work' className='nav-link'>My work</Link>
                    </li>
                    <li className="nav-li">
                      <Link to='contact' className='nav-link'>Contact me</Link>
                    </li>
                </ul>
            </div>
        </Router>
    )
}

export default Navbar;
