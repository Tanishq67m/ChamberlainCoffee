// src/components/Marquee.jsx
import { FaStar, FaLeaf, FaHeart, FaMugHot } from 'react-icons/fa';

const MarqueeItem = ({ icon, text }) => (
  <div className="flex items-center gap-4 mx-8 text-xl">
    {icon}
    <span className="font-bold">{text}</span>
  </div>
);

const Marquee = () => {
  const items = [
    { icon: <FaStar className="text-royal-blue" />, text: 'Highest Rated' },
    { icon: <FaLeaf className="text-royal-blue" />, text: '100% Organic' },
    { icon: <FaHeart className="text-royal-blue" />, text: 'Crafted with Love' },
    { icon: <FaMugHot className="text-royal-blue" />, text: 'Freshly Roasted' },
  ];
  const duplicatedItems = [...items, ...items, ...items]; // Duplicate for seamless loop

  return (
    <div className="w-full py-6 bg-off-white overflow-hidden border-y-2 border-brand-dark">
      <div className="flex whitespace-nowrap animate-marquee">
        {duplicatedItems.map((item, index) => (
          <MarqueeItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;