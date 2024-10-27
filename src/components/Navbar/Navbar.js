//import React
import React from "react";
// Import Link to navigate between pages
import { Link } from "react-router-dom";
// Import the CSS file for styling
import './Navbar.css';

const Navbar = () => {
    return (
     // fill in the rest here!
        <nav>
            <div>
                <h3>My website</h3>
            </div>
            <ul>
                <li>
                    <Link to ="/home">Home</Link>
                </li>
                <li>
                    <Link to ="/nothome">NotHome</Link>
                </li>
            </ul>
        </nav>
     // add Home and NotHome, including links (after routing established)
 )};
  
  // Always export your components so they can be imported in other files
  export default Navbar;
  