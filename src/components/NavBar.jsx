import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar() {
    const linkNames = ["Home", "Blog"]
    const linkUrls  = ['/', "/Blog"]

    return ( 
        <div className="navbar-container">
            <div className="navbar-logo">
                Anthony Zhao
            </div>
            
            {/* Links */}
            <div className="navbar-links"> 
                {linkNames.map((val, index) => {
                    return(
                        <Link 
                            to={linkUrls[index]} key={val}
                            className="navbar-link">
                            {val} 
                        </Link>
                    );
                })}
            </div>
        </div>
     );
}

export default NavBar;