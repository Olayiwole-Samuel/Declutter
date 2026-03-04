import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer-container">
            {/* Top Title and Description */}
            <div className="footer-top">
                <h1 className="footer-title">OJBDECLUTTER</h1>
                <p className="footer-desc">
                    Your trusted platform to declutter and find amazing deals on neatly used
                    household goods. We connect buyers and sellers for a wide range of items
                    including phones, laptops, gadgets, air conditioners, cars, bikes, and more.
                    As a leading household goods wholesaler, we ensure you get the best value
                    for your purchases.
                </p>
            </div>

            {/* Contact Section */}
            <div className="footer-main">
                <div className="footer-contact">
                    <div className="contact-icon">🎧</div>
                    <div>
                        <p className="contact-text">Got questions? Reach us 24/7!</p>
                        <h2 className="contact-number">+2348053001248</h2>
                    </div>
                </div>



                {/* Links Grid */}
                <div className="footer-links">
                    <div className="footer-col">
                        <h3>Customer service</h3>
                        <a href="https://www.instagram.com/ojb_declutter/?hl=en">Addresses</a>
                    </div>

                    <div className="footer-col">
                        <h3>Useful links</h3>
                        <a href="#">Features</a>
                        <a>Contact</a>
                        <a id="#"><Link to="/terms"> terms and Conditions</Link></a>
                    </div>

                    <div className="footer-col">
                        <h3>Other Links</h3>
                        <a><Link to="/about">About</Link></a>
                        <a><Link to="/team">Our Team</Link></a>
                        <a><Link to="/privacy">Privacy Policy</Link></a>
                        <a><Link to="/terms">Terms</Link></a>
                        <a><Link to="/refund">Refund Policy</Link></a>
                    </div>
                </div>
            </div>

            <hr className="footer-line" />

            {/* Bottom Section */}
            <div className="footer-bottom">
                <p>© 2022 OJBDDECLUTTER | All Rights Reserved | Made With Love</p>
                <div className="footer-cards">💳 💳 💳</div>
            </div>
        </footer>
    );
}
