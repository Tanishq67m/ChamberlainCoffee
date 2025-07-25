// src/components/SomethingForEveryone.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";



gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    name: "Cold Brew",
    img: "/Users/tanishqmohod/SherHack/Chamberlain_Coffee/my-premium-brand/src/assets/coldbrew.webp"
  },
  {
    name: "Instant",
    img: "https://source.unsplash.com/400x400/?instant,coffee",
  },
  {
    name: "Bags",
    img: "https://source.unsplash.com/400x400/?coffee-bag",
  },
  {
    name: "Merch",
    img: "https://source.unsplash.com/400x400/?coffee-mug",
  },
];

const SomethingForEveryone = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".category-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 bg-off-white text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Something for Everyone
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="category-card rounded-xl overflow-hidden shadow-lg cursor-pointer relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="text-white text-2xl font-bold drop-shadow-lg">
                {cat.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SomethingForEveryone;
