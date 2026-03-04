import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

const TermsAndConditions = () => {
    return (
        <div className="terms-page-wrapper" id="#">

            {/* Main Content Container */}
            <div className="terms-container">

                {/* Page Header */}
                <header className="terms-header">
                    <h1 className="page-title">Terms and Conditions</h1>
                </header>

                <div className="terms-content">

                    <section className="terms-section">
                        <h2 className="section-heading">Introduction</h2>
                        <p>
                            Welcome to OJB Declutter! By accessing and using our website, mobile apps, or Instagram page,
                            you agree to comply with the following terms and conditions. Please read them carefully.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="section-heading">Prohibited Activities</h2>
                        <p>You may not use our platform for any unlawful, harmful, or abusive purposes. This includes:</p>
                        <ul className="bullet-list">
                            <li>Violating intellectual property rights</li>
                            <li>Engaging in fraudulent activities</li>
                            <li>Harassing other users</li>
                            <li>Uploading malicious content</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2 className="section-heading">License</h2>
                        <p>
                            We grant you a limited, non-exclusive license to access and use our services. You may not
                            reproduce, modify, or distribute our content without permission.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="section-heading">Content Liability</h2>
                        <p>
                            While we strive for accuracy, we are not responsible for any errors, omissions, or damages
                            resulting from user-generated content.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="section-heading">User Responsibilities</h2>
                        <p>As a user of OJB Declutter, you agree to:</p>
                        <ul className="bullet-list">
                            <li>Provide accurate information during registration</li>
                            <li>Use the platform responsibly and ethically</li>
                            <li>Respect other users’ rights and privacy</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2 className="section-heading">Termination</h2>
                        <p>
                            We reserve the right to terminate your access to our services if you violate these terms or
                            engage in harmful behavior.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="section-heading">Modifications</h2>
                        <p>
                            We may update these terms periodically. By continuing to use our platform, you accept any changes made.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="section-heading">Contact Us</h2>
                        <p>
                            If you have any questions or concerns, please reach out to us via <a href="mailto:info@ojbdeclutter.com">info@ojbdeclutter.com</a>.
                        </p>
                    </section>

                </div>
            </div>

            {/* Footer Section */}
            <footer className="site-footer">
                <div className="footer-content">

                    {/* Support Column */}
                    <div className="footer-column brand-column">
                        <div className="support-badge">
                            <span className="headset-icon">🎧</span>
                            <div>
                                <p className="support-label">Got questions? Reach us 24/7!</p>
                                <p className="support-phone">+2348053001248</p>
                            </div>
                        </div>
                        <div className="social-links">
                            {/* Placeholders for icons */}
                            <span className="icon-placeholder">Whatsapp</span>
                            <span className="icon-placeholder"><a href="https://www.instagram.com/ojb_declutter/?hl=en">Instagram</a></span>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="footer-column">
                        <h4>Customer service</h4>
                        <ul>
                            <li><a href="https://www.instagram.com/ojb_declutter/?hl=en">Order</a></li>
                            <li>Downloads</li>
                            <li>Addresses</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Useful links</h4>
                        <ul>
                            <li>Features</li>
                            <li><a href="https://www.instagram.com/ojb_declutter/?hl=en">Contact</a></li>
                            <li><Link to="/terms">Terms and Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Other Links</h4>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/team">Our Team</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms</Link></li>
                            <li><Link to="/refund">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>© 2022 OJBDECLUTTER | All Rights Reserved | Made With Love |</p>
                    <div className="payment-icons">
                        <span>VISA</span> <span>Mastercard</span> <span>Verve</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TermsAndConditions;