import React from 'react';
import '../style/Nav.css'
import logo from '../Images/Logo.jpg';
import {Link} from 'react-router-dom';

function Nav() {

    const handleUnderline = (event) => {
        const nav_links = document.querySelectorAll('.nav-link');
        nav_links.forEach(nav_link => {
            nav_link.classList.remove('specialClass'); // Remove 'specialClass' from all links
        });
        event.target.classList.add('specialClass'); // Add 'specialClass' to the clicked link
    }

    return (
        <div>
            <div className='text-center'>
                <img src={logo} className='home-logo img-fluid' alt="" />
            </div>
            <nav className="navbar nav-border navbar-expand-lg bg-body-tertiary">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item nav-text">
                                <Link className="nav-link specialClass" onClick={handleUnderline} to="/">Home</Link>
                            </li>
                            <li className="nav-item nav-text">
                                <Link className="nav-link" onClick={handleUnderline} to="/news">News</Link>
                            </li>
                            <li className="nav-item nav-text">
                                <Link className="nav-link" onClick={handleUnderline} to="/PriceAndAnalysis">Share Price and Analysis</Link>
                            </li> 
                            <li className="nav-item nav-text">
                                <Link className="nav-link" onClick={handleUnderline} to="/Wishlist">Wishlist</Link>
                            </li>
                            <li className="nav-item nav-text">
                                <Link className="nav-link" onClick={handleUnderline} to="/QuickStartGuide">Quick Start Guide</Link>
                            </li>
                        </ul>
                        <div className='d-flex me-5'>
                            <button className="nav-button text-white me-3">Sign Up</button>
                            <button className="nav-button text-white">Sign In</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;