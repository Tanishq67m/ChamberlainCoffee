import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useEffect, useRef } from "react";

import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.webp";
import product4 from "../assets/product4.webp";
import product5 from "../assets/product5.webp";

const products = [
  { id: 1, name: "Strawberries & Cream Blend", price: "€24.95", image: product1 },
  { id: 2, name: "Strawberry Matcha", price: "€30.45", image: product2 },
  { id: 3, name: "Vanilla Blend", price: "€20.45", image: product3 },
  { id: 4, name: "Iced Macha", price: "€18.95", image: product4 },
  { id: 5, name: "Classic Cold brew", price: "€19.99", image: product5 },
].map((p) => ({
  ...p,
  isOrganic: Math.random() > 0.5,
}));

const BestSellers = ({ addToCart }) => {
  const [cursorStyle, setCursorStyle] = useState("default");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiperContainer = document.querySelector(".best-seller-swiper");
    if (!swiperContainer) return;

    const setGrab = () => setCursorStyle("grab");
    const setDefault = () => setCursorStyle("default");
    const setGrabbing = () => setCursorStyle("grabbing");

    swiperContainer.addEventListener("mouseenter", setGrab);
    swiperContainer.addEventListener("mouseleave", setDefault);
    swiperContainer.addEventListener("mousedown", setGrabbing);
    swiperContainer.addEventListener("mouseup", setGrab);

    return () => {
      swiperContainer.removeEventListener("mouseenter", setGrab);
      swiperContainer.removeEventListener("mouseleave", setDefault);
      swiperContainer.removeEventListener("mousedown", setGrabbing);
      swiperContainer.removeEventListener("mouseup", setGrab);
    };
  }, []);

  return (
    <motion.section
      className="w-full py-24 px-8 bg-off-white"
      style={{ cursor: cursorStyle }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="font-heading text-5xl text-royal-blue">Our Best Sellers</h2>
        <p className="font-body text-lg mt-2">Curated selections from our finest batches.</p>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto relative best-seller-swiper">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            // Update navigation elements after initialization
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} organic={product.isOrganic} addToCart={addToCart} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-royal-blue text-royal-blue w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-royal-blue hover:text-white transition-all duration-300"
        >
          ◀
        </button>

        <button
          ref={nextRef}
          className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-royal-blue text-royal-blue w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-royal-blue hover:text-white transition-all duration-300"
        >
          ▶
        </button>
      </div>
    </motion.section>
  );
};

export default BestSellers;
