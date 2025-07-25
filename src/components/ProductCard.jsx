import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const ProductCard = ({ id, image, name, price, organic = false, addToCart }) => {

  const [rating] = useState(4.5); // fixed rating for now
  const reviews = 120; // static reviews

  return (
    <motion.div
      className="w-full max-w-sm group cursor-pointer"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-white p-6 rounded-2xl shadow-lg aspect-square flex flex-col items-center justify-center relative overflow-hidden">
        {/* Organic Badge */}
        {organic && (
          <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Organic
          </span>
        )}

        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />

        {/* Add to Cart Button */}
        <motion.button
          className="absolute bottom-4 bg-royal-blue text-off-white font-bold py-2 px-6 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart({ id, name, price, image })}

        >
          Add to Cart
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="text-center mt-4">
        <h3 className="font-heading text-2xl text-brand-dark">{name}</h3>
        <p className="font-body text-lg text-royal-blue font-bold">{price}</p>

        {/* Rating & Reviews */}
        <div className="flex items-center justify-center mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-600 text-sm">({reviews} reviews)</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
