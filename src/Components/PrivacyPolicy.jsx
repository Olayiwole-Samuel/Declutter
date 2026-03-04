import React from 'react';
import '../App.css';

const PrivacyPolicy = () => {
    return (
        <div className="policy-page-wrapper">
            {/* Main Content Container */}
            <div className="policy-container">

                <header className="policy-header">
                    <h1 className="main-title">Privacy Policy</h1>
                    <p className="last-updated">Last Updated: December 2025</p>
                </header>

                <div className="policy-content">
                    <section className="policy-section">
                        <h2 className="section-title">Introduction</h2>
                        <p>
                            Welcome to OJB_DECLUTTER. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website, mobile app, or Instagram page. By accessing our services, you agree to the terms outlined in this policy.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2 className="section-title">Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul>
                            <li><strong>Personal Information:</strong> When you register, create an account, or place an order, we may collect your name, email address, phone number, and delivery address.</li>
                            <li><strong>Usage Data:</strong> We gather information about your interactions with our services, including browsing behavior, preferences, and device information.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2 className="section-title">How We Use Your Information</h2>
                        <p>We use your information for the following purposes:</p>
                        <ul>
                            <li>To provide and improve our services.</li>
                            <li>To personalize your experience.</li>
                            <li>To communicate with you regarding updates, promotions, and support.</li>
                            <li>To process transactions securely.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2 className="section-title">Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar technologies to enhance your browsing experience. You can manage cookie preferences in your browser settings.
                        </p>
                        <p>
                            <strong>Persistent Cookies:</strong> When you login, we will set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks.
                        </p>
                        <p>
                            <strong>Temporary Cookies:</strong> If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2 className="section-title">Data Security</h2>
                        <p>
                            We take reasonable measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. Please keep your login credentials confidential.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2 className="section-title">Third-Party Links</h2>
                        <p>
                            Our platform may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. Please review their policies before interacting with them.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2 className="section-title">Your Rights</h2>
                        <p>
                            You have the right to access, correct, or delete your personal data. If you wish to do so, please contact us at support@ojbdeclutter.com.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2 className="section-title">Updates to this Policy</h2>
                        <p>
                            We may update this Privacy Policy periodically. By continuing to use our services, you consent to any changes made.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2 className="section-title">Contact Us</h2>
                        <p>
                            If you have any questions or concerns, feel free to reach out to us via the provided email address or phone number below.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;