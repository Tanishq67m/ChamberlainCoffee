import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import coffeeAnimation from "../assets/coffee-love.json"; // Ensure path is correct

const LoadingScreen = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 3000); // Hide after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-off-white flex items-center justify-center z-50 transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Lottie animationData={coffeeAnimation} loop autoplay className="w-56 h-56" />
    </div>
  );
};

export default LoadingScreen;
