import React from 'react';
import logo from '../Images/LOGO.svg';
import { Link } from 'react-router-dom';
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
                            <ul className='footer-ul'>
                                <li><Link to="https://github.com/swegrp30/IT314_Group30">Github</Link></li>
                                <li><Link to="#">ML Model</Link></li>
                                <li><Link to="#">Slack</Link></li>
                                <li><Link to="#">Hosting</Link></li>
                                <li><Link to="#">Database</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul className='footer-ul'>
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="#">Careers</Link></li>
                                <li><Link to="#">FAQs</Link></li>
                                <li><Link to="#">Teams</Link></li>
                                <li><Link to="/contactus">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col-social">
                            <h4>Let's do it!</h4>
                            <div className="social-links">
                                <Link to="https://github.com/swegrp30/IT314_Group30"><i className='fab fa-facebook-f'></i></Link>
                                <Link to="https://github.com/swegrp30/IT314_Group30"><i className='fab fa-twitter'></i></Link>
                                <Link to="https://github.com/swegrp30/IT314_Group30"><i className='fab fa-github'></i></Link>
                                <Link to="https://github.com/swegrp30/IT314_Group30"><i className='fab fa-telegram'></i></Link>
                                <Link to="https://github.com/swegrp30/IT314_Group30"><i className='fab fa-instagram'></i></Link>
                                <Link to="https://github.com/swegrp30/IT314_Group30"><i className='fab fa-figma'></i></Link>
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