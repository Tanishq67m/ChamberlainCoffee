import { useState } from 'react';
import { motion } from 'framer-motion';

const ImageGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isZoomVisible, setIsZoomVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left);
    const y = (e.clientY - top);
    setMousePosition({ x, y });
  };

  const backgroundPosX = -mousePosition.x * 1.5 + 150; // 1.5 = zoom level, 150 = lens size / 2
  const backgroundPosY = -mousePosition.y * 1.5 + 150;

  return (
    <motion.div 
      className="flex flex-col gap-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative w-full aspect-square bg-white rounded-2xl shadow-sm overflow-hidden group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsZoomVisible(true)}
        onMouseLeave={() => setIsZoomVisible(false)}
      >
        <img
          src={selectedImage}
          alt={productName}
          className="w-full h-full object-contain transition-opacity duration-300"
          style={{ opacity: isZoomVisible ? 0.3 : 1 }}
        />
        {/* The Magnifier Zoom Window */}
        {isZoomVisible && (
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl"
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '250%', // Zoom level
              backgroundPosition: `${backgroundPosX}px ${backgroundPosY}px`,
            }}
          />
        )}
      </div>

      <div className="flex gap-3 pb-2 -mx-1 px-1 overflow-x-auto">
        {images.map((img, i) => (
          <div
            key={i}
            className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl bg-white p-1 cursor-pointer transition-all duration-300 ${selectedImage === img ? 'ring-2 ring-royal-blue' : 'hover:ring-2 ring-gray-300'}`}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-contain rounded-lg" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImageGallery;