import { Routes, Route } from "react-router-dom";

import Homepage from "../src/Pages/Homepage.jsx";
import Aboutpage from "../src/Pages/Aboutpage.jsx"
import Ourteampage from "./Pages/Ourteampage.jsx";
import Privacypage from "./Pages/Privacypage.jsx";
import Termspage from "./Pages/Termspage.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Refundpage from "./Pages/Refundpage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/about" element={<Aboutpage/>}/>
            <Route path="/team" element={<Ourteampage/>}/>
            <Route path="/privacy" element={<Privacypage/>}/>
            <Route path="/terms" element={<Termspage/>}/>
            <Route path="/product-details" element={<ProductDetail />} />
            <Route path="/refund" element={<Refundpage/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/product" element={<ProductPage/>}/>


        </Routes>
    );
}
