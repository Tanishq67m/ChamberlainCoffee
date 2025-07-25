import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { FiPlus, FiMinus } from 'react-icons/fi';

const ProductInfo = ({ product, addToCart }) => {
  // State for managing user selections within this component
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  // Handler for the "Add to Cart" button
  const handleAddToCart = () => {
    // Call the function passed down from the parent page
    // with all the necessary product details
    addToCart({
      ...product,
      quantity,
      size: selectedSize,
    });
    // Optional: Add a confirmation message or animation here
    console.log(`Added ${quantity} x ${product.name} (${selectedSize}) to cart.`);
  };

  return (
    <motion.aside
      className="lg:sticky top-24 h-fit"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Product Title */}
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark">{product.name}</h1>
      
      {/* Ratings and Reviews Count */}
      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(Math.round(product.rating))].map((_, i) => <FaStar key={i} />)}
        </div>
        <a href="#reviews" className="text-gray-500 font-body hover:underline">
          {product.rating} ({product.reviewsCount} reviews)
        </a>
      </div>

      {/* Product Description */}
      <p className="font-body text-gray-700 mt-6 text-lg">{product.description}</p>
      
      {/* Key Features Section */}
      <div className="mt-8 space-y-4 border-t border-gray-200 pt-6">
        {product.features.map(feature => (
          <div key={feature.name} className="flex items-start text-sm">
            <span className="font-semibold text-brand-dark w-32 shrink-0">{feature.name}</span>
            <span className="text-gray-600">{feature.value}</span>
          </div>
        ))}
      </div>

      {/* Size Selector */}
      <div className="mt-8">
        <h3 className="font-body font-semibold text-lg mb-3 text-brand-dark">Size:</h3>
        <div className="flex gap-3 flex-wrap">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-5 py-2 rounded-full font-semibold font-body transition-all duration-300 ${
                selectedSize === size
                  ? "bg-royal-blue text-white ring-2 ring-royal-blue ring-offset-2"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 hover:border-gray-400"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Price Section */}
      <div className="flex items-center justify-between gap-6 mt-8">
        {/* Quantity Selector */}
        <div className="flex items-center gap-4 border border-gray-300 rounded-full px-4 py-2 bg-white">
          <button 
            onClick={() => setQuantity(q => Math.max(1, q - 1))} 
            className="text-gray-500 hover:text-royal-blue transition-colors"
            aria-label="Decrease quantity"
          >
            <FiMinus />
          </button>
          <span className="text-xl font-semibold text-brand-dark w-8 text-center" aria-live="polite">{quantity}</span>
          <button 
            onClick={() => setQuantity(q => q + 1)} 
            className="text-gray-500 hover:text-royal-blue transition-colors"
            aria-label="Increase quantity"
          >
            <FiPlus />
          </button>
        </div>
        {/* Price Display */}
        <p className="text-4xl font-heading font-bold text-royal-blue">{product.price}</p>
      </div>
      
      {/* Add to Cart Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleAddToCart}
        className="w-full mt-8 bg-royal-blue text-white font-body font-bold text-lg py-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-royal-blue/50"
      >
        Add to Cart
      </motion.button>
    </motion.aside>
  );
};

export default ProductInfo;
