import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Category = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div className="category-navv">

            {/* --- Top Navbar --- */}
            <div className="sticky-nav">
                <div className="main-navbar">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="OJB Declutter" /></Link>
                    </div>

                    <div className="right-section">
                        <div className="headphone">
                            <div className="log-img">
                                <svg width="20" height="54" viewBox="0 0 18 22" fill="none">
                                    <path d="M9 0.5C4.05 0.5 0 4.55 0 9.5V14.75C0 16.025 0.975 17 2.25 17H5.25C5.7 17 6 16.7 6 16.25V10.25C6 9.8 5.7 9.5 5.25 9.5H1.5C1.5 5.375 4.875 2 9 2C13.125 2 16.5 5.375 16.5 9.5H12.75C12.3 9.5 12 9.8 12 10.25V16.25C12 16.7 12.3 17 12.75 17H15.75C15.975 17 16.275 16.925 16.5 16.85V17.75C16.5 19.025 15.525 20 14.25 20H9C8.55 20 8.25 20.3 8.25 20.75C8.25 21.2 8.55 21.5 9 21.5H14.25C16.35 21.5 18 19.85 18 17.75V9.5C18 4.55 13.95 0.5 9 0.5ZM4.5 11V15.5H2.25C1.8 15.5 1.5 15.2 1.5 14.75V11H4.5ZM15.75 15.5H13.5V11H16.5V14.75C16.5 15.2 16.2 15.5 15.75 15.5Z" fill="#2A27E9"/>
                                </svg>
                            </div>
                            <div className="log-txt">
                                <p>Whatsapp Only</p>
                                <h4>+2348053001248</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Category Buttons --- */}
            <div className="category-nav">
                {[
                    { key: "all", label: "View all" },
                    { key: "electronics", label: "Electronics" },
                    { key: "ac", label: "Air Conditioning System" },
                    { key: "furniture", label: "Furniture" },
                    { key: "gadget", label: "Gadget" },
                    { key: "household", label: "Household Items" },
                    { key: "others", label: "Others" },
                ].map(item => (
                    <a
                        key={item.key}
                        href="javascript:void(0)"
                        className={selectedCategory === item.key ? "active" : ""}
                        onClick={() => setSelectedCategory(item.key)}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Category;
