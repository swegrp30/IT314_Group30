import React, { useEffect, useState } from 'react';
import '../style/Nav.css';
import '../style/App.css';
import logo from '../Images/TopLogo.svg';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Nav() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isNavOpen, setNavOpen] = useState(false);
    const [underlineWidth, setUnderlineWidth] = useState(0);

    const handleUnderline = (event) => {
        const nav_links = document.querySelectorAll('.nav-link');
        nav_links.forEach((nav_link) => {
            nav_link.classList.remove('specialClass');
        });
        event.target.classList.add('specialClass');
        setUnderlineWidth(event.target.offsetWidth);
        setNavOpen(false);
    };

    const authToken = localStorage.getItem('authToken');

    const clearLocalStorage = () => {
        toast.success('Logged out successfully');
        setTimeout(function () {
            localStorage.clear();
            navigate('/');
        }, 1000);
    };

    useEffect(() => {
        const currentLink = document.querySelector('.nav-link.specialClass');
        if (currentLink) {
            currentLink.classList.remove('specialClass');
        }

        const newLink = document.querySelector(`.nav-link[href="${location.pathname}"]`);
        if (newLink) {
            newLink.classList.add('specialClass');
            setUnderlineWidth(newLink.offsetWidth);
        }
    }, [location.pathname]);

    return (
        <div>
            <ToastContainer />
            <div className='text-center'>
                <img
                    src={logo}
                    onClick={() => navigate('/')}
                    className='home-logo img-fluid'
                    alt=''
                />
            </div>
            <nav className='navbar navbar-expand-md nav-border bg-body-tertiary'>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setNavOpen(!isNavOpen)}
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0 navbar-ul'>
                        <li className='nav-item nav-text'>
                            <Link
                                className='nav-link'
                                onClick={handleUnderline}
                                to='/'
                                style={{ borderBottomWidth: isNavOpen ? 0 : 2, borderBottomWidth: underlineWidth }}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item nav-text'>
                            <Link
                                className='nav-link'
                                onClick={handleUnderline}
                                to='/news'
                                style={{ borderBottomWidth: isNavOpen ? 0 : 2, borderBottomWidth: underlineWidth }}
                            >
                                News
                            </Link>
                        </li>
                        <li className='nav-item nav-text'>
                            <Link
                                className='nav-link'
                                onClick={handleUnderline}
                                to='/priceanalysis'
                                style={{ borderBottomWidth: isNavOpen ? 0 : 2, borderBottomWidth: underlineWidth }}
                            >
                                Price and Analysis
                            </Link>
                        </li>
                        <li className='nav-item nav-text'>
                            <Link
                                className='nav-link'
                                onClick={handleUnderline}
                                to='/Wishlist'
                                style={{ borderBottomWidth: isNavOpen ? 0 : 2, borderBottomWidth: underlineWidth }}
                            >
                                Wishlist
                            </Link>
                        </li>
                        <li className='nav-item nav-text'>
                            <Link
                                className='nav-link'
                                onClick={handleUnderline}
                                to='/aboutus'
                                style={{ borderBottomWidth: isNavOpen ? 0 : 2, borderBottomWidth: underlineWidth }}
                            >
                                About us
                            </Link>
                        </li>
                        <li className='nav-item nav-text'>
                            <Link
                                className='nav-link'
                                onClick={handleUnderline}
                                to='/Profile'
                                style={{ borderBottomWidth: isNavOpen ? 0 : 2, borderBottomWidth: underlineWidth }}
                            >
                                Profile
                            </Link>
                        </li>
                    </ul>
                    {!authToken && (
                        <div className='d-flex me-5'>
                            <button className='btn btn-primary me-3'>
                                <Link to='/signupwithemail' onClick={handleUnderline}>
                                    Sign Up
                                </Link>
                            </button>
                            <button className='btn btn-primary'>
                                <Link to='/login' onClick={handleUnderline}>
                                    Sign In
                                </Link>
                            </button>
                        </div>
                    )}
                    {authToken && (
                        <div className='d-flex me-5'>
                            <button onClick={clearLocalStorage} className='btn btn-primary'>
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Nav;