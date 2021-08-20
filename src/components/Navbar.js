import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";


const Navbar = () => {
    return (
        <Router>
            <div className="navbar-container">
                <h2 className="nav-logo">Portfolio</h2>
                <ul className='nav-ul'>
                    <li className="nav-li">
                      <Link to='about'>About</Link>
                    </li>
                    <li className="nav-li">
                      <Link to='work'>My Work</Link>
                    </li>
                    <li className="nav-li">
                      <Link to='contact'>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </Router>
    )
}

export default Navbar;
