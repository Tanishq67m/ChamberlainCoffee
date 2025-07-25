import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import beanVideo from "../assets/videos/bean.mp4";
import powderVideo from "../assets/videos/powder.mp4";
import waterVideo from "../assets/videos/water.mp4";
import milkVideo from "../assets/videos/milk.mp4";
import pourVideo from "../assets/videos/pour.mp4";
import steamVideo from "../assets/videos/steam.mp4";

const steps = [
  { title: "Fresh Beans", desc: "Premium beans handpicked for perfection.", video: beanVideo },
  { title: "The Grind", desc: "Ground to ideal texture for rich flavor.", video: powderVideo },
  { title: "The Pour", desc: "Adding hot water for perfect extraction.", video: waterVideo },
  { title: "Creamy Indulgence", desc: "A splash of milk for velvet smoothness.", video: milkVideo },
  { title: "Ready to Sip", desc: "Final pour into your favorite mug.", video: pourVideo },
  { title: "Enjoy Aroma", desc: "Steam rising, flavors dancing.", video: steamVideo },
];

export default function CoffeeJourney() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-change steps like a story every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-coffee-gradient text-white py-16 px-4 md:px-12 relative overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-serif font-bold text-center mb-12 text-royal-blue drop-shadow-lg"
      >
        The Coffee Journey
      </motion.h2>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto flex flex-col items-center">
        {/* Video Container */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          {steps.map((step, index) => (
            <motion.video
              key={index}
              src={step.video}
              muted
              autoPlay
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: activeStep === index ? 1 : 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeStep === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
          ))}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Step Text Glass Effect */}
          <motion.div
            key={activeStep}
            className="absolute bottom-8 left-8 z-10 max-w-lg bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-white drop-shadow">
              {steps[activeStep].title}
            </h3>
            <p className="text-gray-200 mt-2 text-lg leading-relaxed">
              {steps[activeStep].desc}
            </p>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 mt-8 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-royal-blue to-blue-400"
            initial={{ width: "0%" }}
            animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-3 mt-4">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveStep(index)}
              whileHover={{ scale: 1.3 }}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                activeStep === index
                  ? "bg-royal-blue shadow-[0_0_10px_rgba(65,105,225,0.8)]"
                  : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
