import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const ProductDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) return <p>No product found</p>;

    return (
        <div className="details-container">
            <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

            <div className="details-card">
                <div className="details-img-wrapper">
                    <img src={state.img} alt={state.name} className="details-img" />
                </div>

                <div className="details-info">
                    <h1 className="details-title">{state.name}</h1>

                    {state.location && (
                        <p className="details-location">📍 {state.location}</p>
                    )}

                    <p className="details-price">{state.price}</p>

                    <p className="details-description">
                        This is a high-quality product listed on our platform.
                        For more details, inspection, or purchase, contact seller directly.
                    </p>

                    <button className="buy-btn">
                        Contact Seller
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
