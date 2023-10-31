import React from 'react';
import '../style/Nav.css'
import Footer from './Footer';
import logo from '../Images/Logo.jpg';

function Nav() {

    const handleUnderline = ()=> {
        const nav_links = document.querySelectorAll('.nav-link');
        nav_links.forEach(nav_link => {
            nav_link.addEventListener('click',()=>{
                document.querySelector('.specialClass')?.classList.remove('specialClass');
                nav_link.classList.add('specialClass');
            });
        }); 
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
                                <a className="nav-link specialClass" onClick={handleUnderline} href="/">Home</a>
                            </li>
                            <li className="nav-item nav-text">
                                <a className="nav-link" onClick={handleUnderline} href="/news">News</a>
                            </li>
                            <li className="nav-item nav-text">
                                <a className="nav-link" onClick={handleUnderline} href="/PriceAndAnalysis">Share Price and Analysis</a>
                            </li> 
                            <li className="nav-item nav-text">
                                <a className="nav-link" onClick={handleUnderline} href="/Wishlist">Wishlist</a>
                            </li>
                            <li className="nav-item nav-text">
                                <a className="nav-link" onClick={handleUnderline} href="/QuickStartGuide">Quick Start Guide</a>
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