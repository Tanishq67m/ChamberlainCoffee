import { motion } from 'framer-motion';

const AboutCreator = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <section className="w-full py-24 px-8 bg-royal-blue text-off-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-3xl overflow-hidden"
        >
          <img
            src="https://res.cloudinary.com/dtlkwgwwo/image/upload/v1753466012/Emma_bmx97c.avif"
            alt="Emma Chamberlain"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <div>
          <motion.h2
            className="font-heading text-5xl mb-6 leading-tight"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Meet the Creator
          </motion.h2>

          <motion.p
            className="font-body text-lg leading-relaxed mb-6"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            Emma Chamberlain is more than a creator—she’s a trendsetter who turned her love for coffee into a global movement. Her approach to coffee is fun, creative, and effortlessly stylish, bringing joy to every sip.
          </motion.p>

          <motion.p
            className="font-body text-lg leading-relaxed mb-6"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            Our products are crafted from ethically sourced beans and premium matcha, blended with natural flavors for a unique experience. From refreshing iced brews to smooth blends, every product reflects Emma’s commitment to quality and innovation.
          </motion.p>

          <motion.p
            className="font-body text-lg leading-relaxed"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            Whether you’re a coffee connoisseur or just discovering your favorite cup, this collection is designed to inspire and delight.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutCreator;
