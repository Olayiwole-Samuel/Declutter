import React, { useState } from "react";
import "../Product.css";
import {Link} from "react-router-dom"

// --- FULL INVENTORY ---
const inventory = [
    {
        id: 1,
        name: "Android Car Stereo System",
        price: "₦85,000",
        category: "Automotive",
        image: "src/assets/Car Stereo.jpg",
        status: "In Stock"
    },
    {
        id: 2,
        name: "LG Dual Inverter AC (1.5HP)",
        price: "₦220,000",
        category: "Appliances",
        image: "src/assets/f89109f80845a454ac6c7325edc485cd.jpg",
        status: "Sale"
    },
    {
        id: 3,
        name: "Royal Orthopedic Bed Frame",
        price: "₦350,000",
        category: "Furniture",
        image: "src/assets/Bedframe.jpg",
        status: null
    },
    {
        id: 4,
        name: "Water Dispenser & Fridge",
        price: "₦95,000",
        category: "Appliances",
        image: "src/assets/Fridge.jpg",
        status: null
    },
    {
        id: 5,
        name: "Samsung 4K Smart TV 55\"",
        price: "₦450,000",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
        status: "New"
    },
    {
        id: 6,
        name: "Office Conference Table Set",
        price: "₦180,000",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80",
        status: null
    },
    {
        id: 7,
        name: "Luxury Jacuzzi Bathtub",
        price: "₦400,000",
        category: "Bathroom",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80",
        status: "Pre-order"
    },
    {
        id: 8,
        name: "Samsung Front Loader Wash",
        price: "₦320,000",
        category: "Appliances",
        image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=500&q=80",
        status: null
    },
    {
        id: 9,
        name: "Apple Watch Series 6",
        price: "₦120,000",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
        status: "Best Seller"
    },
    {
        id: 10,
        name: "HP EliteBook 840 G5",
        price: "₦250,000",
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=500&q=80",
        status: null
    },
    {
        id: 11,
        name: "Marble Kitchen Island",
        price: "₦650,000",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&q=80",
        status: null
    },
    {
        id: 12,
        name: "Dell XPS 13 9310",
        price: "₦550,000",
        category: "Laptops",
        image: "src/assets/3a7002b34101b95869af24324e7e0201.jpg",
        status: "New"
    },
    {
        id: 13,
        name: "HP Omen Gaming Laptop",
        price: "₦700,000",
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?w=500&q=80",
        status: "Hot"
    },
    {
        id: 14,
        name: "iPhone 13 Pro Max (Blue)",
        price: "₦650,000",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&q=80",
        status: null
    },
    {
        id: 15,
        name: "Executive Office Desk",
        price: "₦140,000",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&q=80",
        status: null
    },
    {
        id: 16,
        name: "Ceramic Wash Basin",
        price: "₦45,000",
        category: "Bathroom",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80",
        status: null
    },
    {
        id: 17,
        name: "Whirlpool Washing Machine",
        price: "₦180,000",
        category: "Appliances",
        image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500&q=80",
        status: null
    },
    {
        id: 18,
        name: "Digital Smart Watch V2",
        price: "₦35,000",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80",
        status: null
    },
    {
        id: 19,
        name: "Lenovo ThinkPad X1",
        price: "₦290,000",
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
        status: "Sale"
    },
    {
        id: 20,
        name: "Granite Stone Bathtub",
        price: "₦950,000",
        category: "Bathroom",
        image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=500&q=80",
        status: "Luxury"
    },
    {
        id: 21,
        name: "MacBook Pro M1 14\"",
        price: "₦900,000",
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
        status: "Featured"
    },
    {
        id: 22,
        name: "iPhone 12 Mini",
        price: "₦300,000",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500&q=80",
        status: null
    },
    {
        id: 23,
        name: "Conference Boardroom Chairs",
        price: "₦45,000",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80",
        status: null
    },
    {
        id: 24,
        name: "Sony PlayStation 5",
        price: "₦480,000",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80",
        status: "Sold Out"
    }
];

// --- PRODUCT CARD ---
const ProductCard = ({ product, onClick }) => (
    <div className="product-card" onClick={() => onClick(product)}>
        <div className="image-container">
            <img src={product.image} alt={product.name} />
            {product.status && (
                <span className={`badge ${product.status.toLowerCase().replace(" ", "-")}`}>
                    {product.status}
                </span>
            )}
        </div>
        <div className="card-details">
            <span className="category">{product.category}</span>
            <h3 className="product-name">{product.name}</h3>
            <p className="price">{product.price}</p>
        </div>
    </div>
);

// --- APP COMPONENT ---
function App() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => setSelectedProduct(product);
    const handleCloseDetails = () => setSelectedProduct(null);

    return (
        <div className="app-container">
            {/* Main Content */}
            <main className="main-shop">
                <div className="header-section">
                    <h1>Shop</h1>
                    <div className="breadcrumbs"><Link to="/">Home</Link> / Shop</div>
                </div>

                <section className="grid-container">
                    {inventory.map((item) => (
                        <ProductCard key={item.id} product={item} onClick={handleProductClick} />
                    ))}
                </section>

                {/* Product Details Modal */}
                {selectedProduct && (
                    <div className="product-details-overlay" onClick={handleCloseDetails}>
                        <div className="product-details" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={handleCloseDetails}>&times;</button>
                            <img src={selectedProduct.image} alt={selectedProduct.name} />
                            <h2>{selectedProduct.name}</h2>
                            <p className="category">{selectedProduct.category}</p>
                            <p className="price">{selectedProduct.price}</p>
                            {selectedProduct.status && <p>Status: {selectedProduct.status}</p>}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
