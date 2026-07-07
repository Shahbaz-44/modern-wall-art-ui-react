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
                <li>Sectors</li>
                <li>How It Works</li>
                <li>Gallery</li>
                <li>Start Your Own Business</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar
