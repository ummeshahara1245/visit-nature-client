import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear(); // বর্তমান বছর অটোমেটিক দেখাবে

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content row">

                    {/* বাম পাশ: লোগো এবং লিংক */}
                    <div className="col-lg-4 footer-left mb-4 mb-lg-0">
                        <h3 className="footer-logo">visit<span>Nature</span></h3>
                        <p className="footer-links">
                            <Link to="/">Home</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/faq">FAQ</Link>
                        </p>
                        <p className="footer-company-name">visitNature &copy; {year} | All Rights Reserved</p>
                    </div>

                    {/* মাঝখান: কন্টাক্ট ইনফো */}
                    <div className="col-lg-4 footer-center mb-4 mb-lg-0">
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <p><span>21 Revolution Street</span> Feni, Bangladesh</p>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <p>+880 1234 567890</p>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <p><a href="mailto:contact@visitnature.com">contact@visitnature.com</a></p>
                        </div>
                    </div>

                    {/* ডান পাশ: সোশ্যাল এবং অ্যাবাউট */}
                    <div className="col-lg-4 footer-right">
                        <p className="footer-company-about">
                            <span>About visitNature</span>
                            VisitNature is the most reliable travel service provider in Bangladesh. We bring the beauty of nature closer to you with comfort and safety.
                        </p>
                        <div className="footer-icons">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;