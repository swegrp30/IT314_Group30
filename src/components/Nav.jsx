import React, { useEffect } from 'react';
import '../style/Nav.css';
import logo from '../Images/TopLogo.svg';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { to } from 'react-spring';
// import { Toast } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';

function Nav() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleUnderline = (event) => {
        const nav_links = document.querySelectorAll('.nav-link');
        nav_links.forEach((nav_link) => {
            nav_link.classList.remove('specialClass');
        });
        event.target.classList.add('specialClass');
    };

    const authToken = localStorage.getItem('authToken');

    const clearLocalStorage = () => {
        toast.success('Logged out successfully');
        setTimeout(function () {
            localStorage.clear();
            navigate('/')
        }, 1000);
    };

    // Set initial underline when the component mounts
    useEffect(() => {
        const currentLink = document.querySelector(`.nav-link[href="${location.pathname}"]`);
        if (currentLink) {
            currentLink.classList.add('specialClass');
        }
    }, []);

    return (
        <div>
            <ToastContainer />
            <div className='text-center'>
                <img src={logo} onClick={() => navigate('/')} className='home-logo img-fluid' alt='' />
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
                                <Link className='nav-link' onClick={handleUnderline} to='/'>
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
                                    to='/priceanalysis'
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
                                    to='/aboutus'
                                >
                                    About us
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

                        {!authToken && (
                            <div className='d-flex me-5'>
                                <button className='nav-button text-white me-3'>
                                    <Link to='/signupwithemail' onClick={handleUnderline}>
                                        Sign Up
                                    </Link>
                                </button>
                                <button className='nav-button text-white'>
                                    <Link to='/login' onClick={handleUnderline}>
                                        Sign In
                                    </Link>
                                </button>
                            </div>
                        )}
                        {authToken && (
                            <div className='d-flex me-5'>
                                <button
                                    onClick={clearLocalStorage}

                                    className='nav-button text-white'
                                >
                                    Sign Out

                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
