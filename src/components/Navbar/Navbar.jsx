import './Navbar.css';
import { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi"; // Hamburger menu icon
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h2 className='logo'>Wefo</h2>
      
      {/* Hamburger icon for smaller screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <HiMenuAlt3 />
      </div>
      
      {/* Conditional rendering of the menu based on screen size */}
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#">Menu item</a></li>
        <li><a href="#">Menu item</a></li>
        <li><a href="#">Menu item</a></li>
        <li><a href="#">Menu item</a></li>
      </ul>
      
      <button className="btn">
        Start a project <HiMiniArrowUpRight className='arrow'/>
      </button>
    </nav>
  );
};

export default Navbar;
