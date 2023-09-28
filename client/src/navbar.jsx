import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
 // ☰
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src="/images/logo.svg" alt="My Icon" /></div>

     

        <button className="toggle-button" onClick={toggleMenu}>
          ☰  
        </button>

      <ul className={`menu ${showMenu ? 'active' : ''}`}>
        <li> <Link className='link' to="/"> Home</Link> </li>
        <li> <Link className='link' to="/portfolio"> Portfolio</Link></li>
        <li><Link className='link' to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



/*{window.innerWidth <= 700 ? (
    <button className="toggle-button" onClick={toggleMenu}>
      ☰  
    </button>
  ) : null}*/