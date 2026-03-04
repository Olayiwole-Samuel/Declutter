import React, { useState } from 'react';
import Navbar from "../Components/Navbar.jsx";
import Items from "../Components/Items.jsx";
import Ojbview from "../Components/Ojbview.jsx";
import Trademark from "../Components/Trademark.jsx";
import Footer from "../Components/Footer.jsx";
import Category from "../Components/Category.jsx";

const Homepage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    return (
        <>
            <Navbar />

            {/* Pass state and setter to Category */}
            <Category
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            {/* Pass selected category to Ojbview for filtering */}
            <Items selectedCategory={selectedCategory} />
            <Ojbview selectedCategory={selectedCategory} />

            <Trademark />
            <Footer />
        </>
    )
}

export default Homepage;
