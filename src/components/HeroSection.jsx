// src/components/HeroSection.jsx
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BG1 from "../assets/Blue.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    gsap.to(el, {
      y: "-200px",
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  const textVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 1,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section
      ref={heroRef}
      className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center text-center relative"
      style={{ backgroundImage: `url(${BG1})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div ref={textRef} className="relative z-10 text-white px-4">
        <motion.h1
          className="font-heading text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg tracking-wide"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Fueling Your Day
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mt-4 text-gray-100"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Premium Coffee • Royal Taste
        </motion.p>

        {/* Shop Now Button */}
        <motion.a
          href="#shop"
          className="inline-block mt-8 px-8 py-4 text-lg font-bold bg-royal-blue text-white rounded-full shadow-lg hover:bg-blue-800 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Shop Now
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HeroSection;
