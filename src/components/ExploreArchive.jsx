import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import coffeeIcon from "../assets/icon.svg"; 
import thumb1 from "../assets/thumb1.webp";
import thumb2 from "../assets/thumb2.webp";

const videos = [
  { src: video1, thumb: thumb1 },
  { src: video2, thumb: thumb2 },
];

const ExploreArchive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextVideo = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-royal-blue to-blue-800 text-transparent bg-clip-text">
            Explore the Archive
          </h2>
          <p className="text-xl mt-4 font-light">
            Emma's spilling her secret recipes.
          </p>
          <p className="text-gray-300 mt-4 text-lg leading-relaxed">
            Café stops are no longer required. Browse everything from simple morning coffee to indulgent barista-worthy recipes.
          </p>
          
          {/* Coffee Icon */}
          <div className="mt-10 flex items-center justify-start">
            <img
              src={coffeeIcon}
              alt="Coffee Icon"
              className="w-48 h-48 opacity-80"
            />
          </div>

          <button className="mt-8 bg-royal-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
            View Recipes →
          </button>
        </motion.div>

        {/* Right Video Slider */}
        <div className="relative w-[380px] h-[680px] md:w-[420px] md:h-[740px] mx-auto overflow-hidden rounded-2xl shadow-xl bg-black">
          <AnimatePresence mode="wait">
          {!isPlaying ? (
  <motion.div
    key={`thumb-${currentIndex}`}
    className="absolute inset-0 flex items-center justify-center bg-black"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.8 }}
    onClick={() => setIsPlaying(true)}
  >
    {/* Thumbnail Image */}
    <img
      src={videos[currentIndex].thumb}
      alt="Video Thumbnail"
      className="w-full h-full object-contain cursor-pointer"
    />

    {/* Play Icon Overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-black ml-1"
        >
          <path d="M3 22v-20l18 10-18 10z" />
        </svg>
      </div>
    </div>
  </motion.div>
) : (
  <motion.video
    key={`video-${currentIndex}`}
    src={videos[currentIndex].src}
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.8 }}
  />
)}

          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevVideo}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            ◀
          </button>
          <button
            onClick={nextVideo}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreArchive;
