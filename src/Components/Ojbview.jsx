import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import promax from "../assets/bbcb6b7e543934acd53fd2eb81e1a174.jpg";
import hp from "../assets/7c39947c1f72ce00c704526f50e6a30e.jpg";
import { Link } from "react-router-dom";

// ------------------- BUYERS CHOICE -------------------
const buyersChoice = [
    { img: "src/assets/b67e22ccc45c77bb28cacbb7290f0893.jpg", name: "Xbox 360, Gamepad and 5 Games", location: "Gbagada", price: "₦10,000.00" },
    { img: "src/assets/f830126cc403700e47fcdc839db4f114.jpg", name: "Wall Cladding TV", location: "Chevron Lekki", price: "₦100,000.00" },
    { img: "src/assets/JK747.jpg", name: "Two Lion Industrial Weaving Machine", location: "Ogba", price: "₦250,000.00" },
    { img: "src/assets/f2e2cc087b5c895b7b40279744b5df2b.jpg", name: "Smart TV With Light", location: "Chevron Lekki", price: "₦100,000.00" },
];

// ------------------- NEWEST PRODUCTS -------------------
const newestProducts = [
    { img: "src/assets/b67e22ccc45c77bb28cacbb7290f0893.jpg", name: "Xbox 360, Gamepad and 5 Games", location: "Gbagada", price: "₦100,000.00" },
    { img: "src/assets/f830126cc403700e47fcdc839db4f114.jpg", name: "Wall Cladding TV With Light", location: "Chevron Lekki", price: "₦100,000.00" },
    { img: "src/assets/JK747.jpg", name: "Two Lion Industrial Weaving Machine", location: "Ogba", price: "₦250,000.00" },
    { img: "src/assets/f2e2cc087b5c895b7b40279744b5df2b.jpg", name: "Smart TV With Light", location: "Chevron Lekki", price: "₦100,000.00" },
    { img: "src/assets/698504d1abe6554b5f7da702d2fc6a23.jpg", name: "TV 43 Inches", location: "", price: "₦200,000.00" },
    { img: "src/assets/17580425a476e5fca80898d48f21ac8d.jpg", name: "PS 5 With 2 Gamepads", location: "Osborn Phase 2", price: "₦650,000.00" },
    { img: "src/assets/3a7002b34101b95869af24324e7e0201.jpg", name: "Dell Laptop", location: "", price: "₦350,000.00" },
    { img: "src/assets/6b911ffd3875fef3a61fef6bb8c4342d.jpg", name: "L-Shaped Chair", location: "Igbo Efon", price: "₦130,000.00" },
    { img: "src/assets/f89109f80845a454ac6c7325edc485cd.jpg", name: "Air Conditioner 1.5hp", location: "Ajah", price: "₦179,999.90" },
    { img: "src/assets/ae55a0ef6cff07854ebd773b9f5c0f43.jpg", name: "iWatch", location: "Chevron Lekki", price: "₦100,000.00" },
    { img: promax, name: "iPhone 13 Pro Max", location: "Ikeja", price: "₦750,000.00" },
    { img: "src/assets/0481c68b31e9635d50ee334a21651cf4.jpg", name: "iPhone 11 Pro Max", location: "Ikeja", price: "₦310,000.00" },
    { img: hp, name: "HP Pavilion", location: "", price: "₦250,000.00" },
    { img: "src/assets/Dell vostro.jpg", name: "Dell Vostro", location: "", price: "₦100,000.00" },
    { img: "src/assets/Seater.jpg", name: "Two Seater Cushion Chairs", location: "Lekki", price: "₦450,000.00" },
    { img: "src/assets/9f47cadf4b94ffa5a46f174600020950.jpg", name: "Smart TV With Light", location: "Chevron Lekki", price: "₦100,000.00" },
    { img: "src/assets/4.jpg", name: "iWatch Series 8", location: "Ojodu Berger", price: "₦330,000.00" },
    { img: "src/assets/Wash Machine.jpg", name: "Bubble Tech Inverter Washing Machine", location: "Oshodi, Osolo", price: "₦100,000.00" },
    { img: "src/assets/L-shaped.jpg", name: "L-Shaped Seater", location: "Ogba", price: "₦250,000.00" },
    { img: "src/assets/Dinning Table.jpg", name: "Dining Table", location: "", price: "₦100,000.00" },
    { img: "src/assets/Samsung 55.jpg", name: "Samsung 55 Inches", location: "", price: "₦100,000.00" },
];

// ------------------- PRODUCT CARD -------------------
const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const openDetails = () => navigate("/product-details", { state: product });

    return (
        <div className="product-card" onClick={openDetails}>
            <div className="product-img-wrapper">
                <img src={product.img} alt={product.name} className="product-img" />
            </div>
            <p className="product-text">
                {product.name} <br />
                {product.location && <span>({product.location})</span>} <br />
                <strong>{product.price}</strong>
            </p>
        </div>
    );
};

// ------------------- OJBVIEW COMPONENT -------------------
const Ojbview = ({ selectedCategory }) => {

    const filterByCategory = (product) => {
        if (selectedCategory === "all") return true;
        const name = product.name.toLowerCase();
        switch (selectedCategory) {
            case "electronics":
                return ["tv","xbox","ps","laptop","iphone","smart"].some(word => name.includes(word));
            case "ac":
                return name.includes("air") || name.includes("conditioner");
            case "furniture":
                return ["chair","seater","table"].some(word => name.includes(word));
            case "gadget":
                return ["watch","iwatch"].some(word => name.includes(word));
            case "household":
                return name.includes("washing") || name.includes("machine");
            case "others":
                return !["tv","xbox","ps","laptop","iphone","smart","air","conditioner","chair","seater","table","watch","iwatch","washing","machine"].some(word => name.includes(word));
            default:
                return true;
        }
    };

    return (
        <div className="ojbview">

            {/* BUYERS CHOICE */}
            <section className="section">
                <h1 className="section-title">Buyers Choice</h1>
                <div className="product-grid">
                    {buyersChoice.filter(filterByCategory).map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))}
                </div>
            </section>

            {/* NEWEST PRODUCTS */}
            <section className="section">
                <h1 className="section-title">Our Newest Products</h1>
                <p className="section-sub">Top Choice</p>
                <div className="product-grid">
                    {newestProducts.filter(filterByCategory).map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))}
                </div>
            </section>

            <button className="view-all"><Link to="/product">View all Products</Link></button>
        </div>
    );
};

export default Ojbview;
