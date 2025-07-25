import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import img1a from "../assets/product1/product1.webp";
import img1b from "../assets/product1/1full.webp";
import img2a from "../assets/product2/product2.webp";
import img2b from "../assets/product2/2full.webp";
import img3a from "../assets/product3/product3.webp";
import img3b from "../assets/product3/3all.avif";
import img4a from "../assets/product4/product4.webp";
import img4b from "../assets/product4/4full.avif";
import img5a from "../assets/product5/product5.webp";
import img5b from "../assets/product5/5full.avif";

const products = [
  { id: 1, name: "Strawberries & Cream Blend", price: "€24.95", image: img1a, hoverImage: img1b, rating: 4.8, reviews: 5123 },
  { id: 2, name: "Strawberry Matcha", price: "€30.45", image: img2a, hoverImage: img2b, rating: 4.7, reviews: 4321 },
  { id: 3, name: "Vanilla Blend", price: "€20.45", image: img3a, hoverImage: img3b, rating: 4.9, reviews: 6789 },
  { id: 4, name: "Iced Macha", price: "€18.95", image: img4a, hoverImage: img4b, rating: 4.6, reviews: 3210 },
  { id: 5, name: "Classic Cold brew", price: "€19.99", image: img5a, hoverImage: img5b, rating: 4.8, reviews: 2890 },
];

const ProductsPage = ({ addToCart }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#E3ECF0] py-20 px-6">
      {/* Hero Section */}
      <div className="text-center mb-11 mt-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2 tracking-tight">
          Shop All
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Free shipping on orders over <span className="font-bold text-royal-blue">€60</span>
        </p>
        <div className="flex justify-center items-center gap-2 text-yellow-500 text-lg">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="font-semibold text-gray-700 ml-2">4.8</span>
          <span className="text-gray-500 text-sm">(43,128 reviews)</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden group cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)} // ✅ Navigate to details page
            whileHover={{ scale: 1.02 }}
          >
            {/* Image Container */}
            <div className="relative w-full h-80 bg-[#F6FAFC] flex items-center justify-center">
              <img
                src={hoveredProduct === product.id ? product.hoverImage : product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              />

              {/* Add to Bag Button */}
              <button
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-royal-blue text-white px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
                onClick={(e) => {
                  e.stopPropagation(); // ✅ Prevent redirect
                  addToCart(product);
                }}
              >
                Add to Bag
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4 bg-[#FFFFFF] text-center">
              <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
              <div className="mt-2">
                <span className="text-gray-400 line-through mr-2">
                  €{(parseFloat(product.price.replace("€", "")) * 1.1).toFixed(2)}
                </span>
                <span className="text-xl font-bold text-royal-blue">{product.price}</span>
              </div>
              <div className="flex justify-center items-center mt-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
                <span className="ml-2 text-gray-500 text-sm">
                  ({product.reviews.toLocaleString()})
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
