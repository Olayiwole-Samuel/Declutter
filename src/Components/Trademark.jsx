import React from 'react'
import '../App.css'

const Trademark = () => {
    return (
        <section className="why-container">
            <div className="why-header">
                <h3>Why OJBDDECLUTTER?</h3>
                <h1>
                    Integrity <span>Trademark.</span>
                </h1>
            </div>


            <div className="why-grid">
                {/* Return Policy Card */}
                <div className="why-card">
                    <div className="whyy-card">
                        <h2 className="why-title">24hrs Return Policy</h2>
                        <p className="why-text">
                            Buyers have up to 24hrs to test items or return for a full refund if
                            not as described or defective.
                        </p>
                        <button className="why-btn">Take Me To Shop</button>
                    </div>
                    <div className="why-img-box">
                        <img src="src/assets/24hrss.webp" alt="Phone" />
                    </div>
                </div>


                {/* Safe Payments Card */}
                <div className="why-card">
                    <div className="whyy-card">
                        <h2 className="why-title">Safe payments</h2>
                        <p className="why-text">
                            Safe Payment on OJBDDECLUTTER ensures that all transactions are
                            secure and protected. We use advanced encryption technologies to
                            safeguard your personal and financial information.
                        </p>
                    </div>
                    <div className="why-img-box">
                        <img src="src/assets/debit card.webp" alt="Debit Cards" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Trademark
