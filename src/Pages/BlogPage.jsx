import React from 'react'
import Navbar from "../Components/Navbar.jsx";
import Blog from '../Components/Blog.jsx'
import Footer from "../Components/Footer.jsx";
import Category from "../Components/Category.jsx";

const BlogPage = () => {
    return (
        <>
            <Navbar/>
            <Category/>
            <Blog/>
            <Footer/>
        </>
    )
}
export default BlogPage;
