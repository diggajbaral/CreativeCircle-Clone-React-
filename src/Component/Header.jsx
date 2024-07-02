import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="Logo">
                    <figure>
                        <Link to="/"><img src={Logo} alt="" /></Link>
                        <link rel="stylesheet" href="" />
                    </figure>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/services">OUR SERVICES</Link></li>
                        <li><Link to="/jobs">FIND A JOB</Link></li>
                        <li><a href="#">CC + AI</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header