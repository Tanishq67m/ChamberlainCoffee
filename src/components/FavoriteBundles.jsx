import { motion } from "framer-motion";
import { useRef } from "react";

import product1 from "../assets/bundle1.webp";
import product2 from "../assets/bundle2.webp";
import product3 from "../assets/bundle3.webp";

const bundles = [
  {
    id: 1,
    name: "XL Cold Brew Coffee Starter Pack",
    price: "€54.45",
    image: product1,
    rating: 4.8,
    reviews: 120,
    stock: true,
  },
  {
    id: 2,
    name: "Cold Brew Coffee Starter Pack",
    price: "€47.95",
    image: product2,
    rating: 4.6,
    reviews: 98,
    stock: false, // Out of stock
  },
  {
    id: 3,
    name: "Matcha Starter Pack",
    price: "€76.95",
    image: product3,
    rating: 4.9,
    reviews: 150,
    stock: true,
  },
];

const FavoriteBundles = ({ addToCart }) => {
  const carouselRef = useRef(null);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
      <h2
        className="font-serif text-4xl md:text-5xl font-extrabold tracking-tight 
                    bg-gradient-to-r from-royal-blue to-blue-900 text-transparent bg-clip-text"
        >
        Favorite Bundles
        </h2>

        <p className="text-base md:text-lg text-gray-500 font-light mt-2">
          Exclusive sets curated for true coffee lovers.
        </p>
      </div>

      {/* Draggable Carousel */}
      <motion.div ref={carouselRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div drag="x" dragConstraints={carouselRef} className="flex gap-8">
          {bundles.map((bundle) => (
            <motion.div
              key={bundle.id}
              className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden relative group transition-all duration-300 hover:shadow-xl"
              whileHover={{ y: -8 }}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-royal-blue text-white text-xs md:text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                Bundle & Save
              </div>

              {/* Image */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={bundle.image}
                  alt={bundle.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{bundle.name}</h3>
                <p className="text-royal-blue text-lg md:text-xl font-bold mt-2">{bundle.price}</p>

                {/* Reviews */}
                <div className="flex justify-center items-center mt-2 gap-1 text-yellow-500 text-sm">
                  {"★".repeat(Math.floor(bundle.rating))}
                  <span className="text-gray-500 text-xs ml-1">
                    ({bundle.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Buttons */}
              {bundle.stock ? (
                <motion.button
                  onClick={() => addToCart(bundle)}
                  className="absolute bottom-4 right-4 bg-royal-blue text-white px-5 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition shadow-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  + Add
                </motion.button>
              ) : (
                <motion.button
                  className="absolute bottom-4 right-4 border border-gray-400 text-gray-500 px-5 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition cursor-not-allowed"
                  style={{ borderStyle: "dotted" }}
                  whileHover={{ scale: 1.05 }}
                >
                  Notify Me
                </motion.button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FavoriteBundles;
