import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

const PurchaseAndRefundPolicy = () => {
    return (
        <div className="refund-page-wrapper">

            {/* Main Content Container */}
            <div className="refund-container">

                {/* Page Header */}
                <header className="refund-header">
                    <h1 className="page-title">Purchase and Refund Policy</h1>
                    <p className="page-subtitle">Purchase and Refund Policy</p>
                </header>

                <div className="refund-content">

                    <p className="intro-text">
                        We want to ensure a smooth experience for all our users. Please review the following guidelines regarding payments, refunds, and pick-up procedures:
                    </p>

                    <section className="policy-block">
                        <h3 className="policy-heading">Payment Confirmation:</h3>
                        <p>
                            Once your payment is confirmed, we will promptly send you the details of the item's owner via email.
                            Please note that once payment is confirmed, you cannot back out from the transaction.
                        </p>
                    </section>

                    <section className="policy-block">
                        <h3 className="policy-heading">Refund Policy:</h3>
                        <p>
                            If you are not satisfied with the item at pick-up point, you are eligible for a 100% refund.
                            However, please adhere to the conditions below to qualify for a hassle-free refund:
                        </p>
                        <ul className="policy-list">
                            <li>Physically inspect the item before accepting it.</li>
                            <li>Provide proof of any defects or issues.</li>
                            <li>Contact the seller within 48 hours of pick-up to discuss any concerns.</li>
                            <li>Do not pick up the item yourself or through a proxy/logistic person if you are dissatisfied, as we settle payments during pick-up.</li>
                        </ul>
                    </section>

                    <section className="policy-block">
                        <h3 className="policy-heading">Exceptions:</h3>
                        <p>Refunds are subject to the following exceptions:</p>
                        <ul className="policy-list">
                            <li>If the item is no longer available for pick-up.</li>
                            <li>If the seller is unreachable.</li>
                        </ul>
                    </section>

                    <section className="policy-block">
                        <h3 className="policy-heading">Logistics Charges:</h3>
                        <p>
                            Refunds due to distance and logistics will incur a 10% service charge.
                            Please verify the location before making payment.
                        </p>
                    </section>

                    <section className="policy-block">
                        <h3 className="policy-heading">Seller–Buyer Agreements:</h3>
                        <p>
                            In cases where the seller and buyer agree on an item return, @ojb_declutter will not intervene in determining who bears the logistics cost.
                            We appreciate your trust in our platform. If you have any questions or need further assistance, feel free to reach out.
                        </p>
                    </section>

                    <div className="policy-signature">
                        <p>Best regards, The @ojb_declutter Team 🌟</p>
                    </div>

                </div>
            </div>

            {/* Footer Section (Consistent with previous pages) */}
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

export default PurchaseAndRefundPolicy;