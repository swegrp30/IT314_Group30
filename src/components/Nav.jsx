import React, { useEffect } from 'react';
import '../style/Nav.css';
import logo from '../Images/Logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const navigate = useNavigate();
    const location = useLocation();

    // const routeToSignup = () => {
    //     navigate('/signupwithemail');
    // };
    const routeToHome = () => {
        navigate('/');
    };

    // const routeToSignIn = () => {
    //     navigate('/login');
    // };

    const routeToProfile = () => {
        navigate('/Profile');
    };

    const handleUnderline = (event) => {
        const nav_links = document.querySelectorAll('.nav-link');
        nav_links.forEach((nav_link) => {
            nav_link.classList.remove('specialClass');
        });
        event.target.classList.add('specialClass');
    };
    const authToken = localStorage.getItem('authToken')
    // console.log(authToken)
    const clearLocalStorage =()=>{
        localStorage.clear()
        navigate('/')
    }
    // Set initial underline based on the current location
    useEffect(() => {
        const nav_links = document.querySelectorAll('.nav-link');
        nav_links.forEach((nav_link) => {
            nav_link.classList.remove('specialClass');
        });

        const currentLink = document.querySelector(`.nav-link[href="${location.pathname}"]`);
        if (currentLink) {
            currentLink.classList.add('specialClass');
        }
    }, [location.pathname]);

    return (
        <div>
            <div className='text-center'>
                <img src={logo} onClick={routeToHome} className='home-logo img-fluid' alt='' />
            </div>
            <nav className='navbar nav-border navbar-expand-lg bg-body-tertiary'>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='container-fluid'>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='me-auto mb-2 navbar-ul'>
                            <li className='nav-item nav-text'>
                                <Link
                                    className='nav-link'
                                    onClick={handleUnderline}
                                    to='/'
                                >
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item nav-text'>
                                <Link
                                    className='nav-link'
                                    onClick={handleUnderline}
                                    to='/news'
                                >
                                    News
                                </Link>
                            </li>
                            <li className='nav-item nav-text'>
                                <Link
                                    className='nav-link'
                                    onClick={handleUnderline}
                                    to='/PriceAndAnalysis'
                                >
                                    Price and Analysis
                                </Link>
                            </li>
                            <li className='nav-item nav-text'>
                                <Link
                                    className='nav-link'
                                    onClick={handleUnderline}
                                    to='/Wishlist'
                                >
                                    Wishlist
                                </Link>
                            </li>
                            <li className='nav-item nav-text'>
                                <Link
                                    className='nav-link'
                                    onClick={handleUnderline}
                                    to='/QuickStartGuide'
                                >
                                    Quick Start Guide
                                </Link>
                            </li>

                            <li className='nav-item nav-text'>
                                <Link
                                    className='nav-link'
                                    onClick={handleUnderline}
                                    to='/Profile'
                                >
                                    Profile
                                </Link>
                            </li>
                        </ul>
                        
                        {!authToken && <div className='d-flex me-5'>
                            <button
                                
                                className='nav-button text-white me-3'
                            >
                               <Link
                                    // className='nav-link'
                                    // onClick={handleUnderline}
                                    to='/signupwithemail'
                                >
                                    Sign Up
                                </Link>
                            </button>
                            <button
                                
                                className='nav-button text-white'
                            >
                               <Link
                                    // className='nav-link'
                                    // onClick={handleUnderline}
                                    to='/login'
                                >
                                    Sign In
                                </Link>
                            </button>
                        </div>}
                        {authToken && <div className='d-flex me-5'>
                            
                            <button
                                onClick={clearLocalStorage}
                                className='nav-button text-white'
                            >
                                Sign Out
                            </button>
                        </div>}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;