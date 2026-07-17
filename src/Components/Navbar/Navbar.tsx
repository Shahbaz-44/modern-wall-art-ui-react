import "./Navbar.css"
import { useState } from "react";
import logo from '../../assets/Images/Logo.png'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
   // false = menu band
  // true = menu open 
    const [isOpen, setIsOpen ] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">

            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="menu">
                { isOpen?(
                <RiCloseLine
                  className="menu-icon"
                  onClick={() => setIsOpen (false)} />) : (
                <RiMenu3Line
                   className="menu-icon cross-icon"
                   onClick={() => setIsOpen (true)} />
                )}
                <FaInstagram className="insta-icon" />
            </div>
             
        </div>
        {/* mobile menu */}
        {/* { isOpen && ( */}
            {/* class conditoion open na ho to ye agr ho to ye for animation  */}
        <div className={isOpen?"menu-items active" : "menu-items"}>
            <ul>
                <li>
                 <a href="#sectors">Sectors</a>
                </li>
                <li> 
                  <a href="#work">How It Works</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#business">Start Your Own Business</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  Contact
                </li>
            </ul>
        </div>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar
