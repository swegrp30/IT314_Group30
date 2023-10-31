import React from 'react';
import logo from '../Images/LOGO.svg';
import '../style/Footer.css';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div>
            <footer className="footerr">
                <div className="containerr">
                    <img src={logo} className="footer-logo" alt="Image" />
                    
                    <div className="footer-row text-white">
                        <div className="footer-col">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Github</a></li>
                                <li><a href="#">ML Model</a></li>
                                <li><a href="#">Slack</a></li>
                                <li><a href="#">Hosting</a></li>
                                <li><a href="#">Database</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Teams</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="footer-col-social">
                            <h4>Let's do it!</h4>
                            <div className="social-links">
                                <a href=""><i className='fab fa-facebook-f'></i></a>
                                <a href=""><i className='fab fa-twitter'></i></a>
                                <a href=""><i className='fab fa-github'></i></a>
                                <a href=""><i className='fab fa-telegram'></i></a>
                                <a href=""><i className='fab fa-instagram'></i></a>
                                <a href=""><i className='fab fa-figma'></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="copy-right">
                        <div className='footer-copy-right-text'>
                            <div className='footer-bottom-left'>
                                <a href="">Privacy Policy</a>
                                <a href="">Terms of Use</a>
                            </div>
                            <div className='footer-bottom-right'>
                                <p>© {year} All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;