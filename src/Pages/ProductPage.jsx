import React from 'react'
import Product from "../Components/Product.jsx";
import Navbar from "../Components/Navbar.jsx";
import Category from "../Components/Category.jsx";
import Footer from "../Components/Footer.jsx";

const ProductPage = () => {
    return (
        <>
            <Navbar/>
            <Category/>
            <Product/>
            <Footer/>
        </>
    )
}
export default ProductPage
