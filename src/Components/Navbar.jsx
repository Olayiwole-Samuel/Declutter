import React, { useState, useEffect } from "react";
import "../App.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const messages = [
        <>
            Follow us on <span className="highlight">Instagram</span> and receive{" "}
            <span className="bold">exclusive offers</span>
        </>,
        <>
            Subscribe our newsletter and be the first to know about our offers.
        </>,
        <>
            <span className="bold">Be</span>  our regular customer to get personalized gifts
        </>,
    ];

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showBanner, setShowBanner] = useState(true); // ✅ this fixes your error

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % messages.length);
                setVisible(true);
            }, 300);
        }, 4000);

        return () => clearInterval(interval);
    }, [messages.length]);

    const handleCloseBanner = () => {
        setShowBanner(false);
    };

    return (
        <div className="navbar-container">
            {showBanner && (
                <div className={`top-banner ${visible ? "fade-in" : "fade-out"}`}>
                    <p>{messages[index]}</p>
                    <button className="close-btn" onClick={handleCloseBanner}>
                        ✕
                    </button>
                </div>
            )}
            <div className="sub-header">
                <p>Making Transaction Seamless.</p>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/team">Our Team</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms</Link></li>
                    <li><Link to="/refund">Refund Policy</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>


        </div>

    );
};

export default Navbar;
