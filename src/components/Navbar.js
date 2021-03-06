import React, { useState } from 'react';
import '../App.css'
import { Link } from 'react-scroll'



const Navbar = () => {

  const [nav, setNav]= useState(false)

  const changeNav = () => {
    if(window.scrollY > 100) {
      setNav(true);
    } else {
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeNav);

    return (
      <div className={nav ? 'navbar-container black': 'navbar-container'}>
          <h2 className="nav-logo"> Dmitriy Babich</h2>
          <ul className='nav-ul'>
              <li className="nav-li">
                <Link to='about' activeClass='active-about' spy={true} smooth={true} duration={1000} className='nav-link hover-blue'>About me</Link>
              </li>
              <li className="nav-li">
                <Link to='work' activeClass='active-work' spy={true} smooth={true} duration={1000} className='nav-link hover-red'>My work</Link>
              </li>
              <li className="nav-li">
                <Link to='contact' activeClass='active-contact' spy={true} smooth={true} duration={1000} className='nav-link hover-green'>Contact me</Link>
              </li>
          </ul>
      </div>
    )
}

export default Navbar;
