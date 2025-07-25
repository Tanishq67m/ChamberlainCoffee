import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok, FaYoutube, FaPinterest } from "react-icons/fa";
import cupIcon from "../assets/cupicon.svg"; // Your cup icon
import logo from "../assets/logo.svg"; // Chamberlain Coffee logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 py-16 px-6 md:px-20 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Left Section - Logo & Email */}
        <div>
          <img src={logo} alt="Chamberlain Coffee Logo" className="w-40 mb-6" />
          <p className="font-semibold text-lg mb-2">Get 5% off</p>
          <p className="text-gray-600 text-sm mb-4">
            Never miss any sips, slurps or spills when you join our email list.
          </p>

          {/* Email Input */}
          <div className="flex items-center border border-gray-400 rounded-full overflow-hidden w-full max-w-sm">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow px-4 py-2 text-sm outline-none bg-transparent"
            />
            <button className="bg-royal-blue text-white px-4 py-2 font-bold hover:bg-blue-700 transition">
              &gt;
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-royal-blue">
            <FaInstagram size={20} className="cursor-pointer hover:text-blue-700" />
            <FaTwitter size={20} className="cursor-pointer hover:text-blue-700" />
            <FaFacebookF size={20} className="cursor-pointer hover:text-blue-700" />
            <FaTiktok size={20} className="cursor-pointer hover:text-blue-700" />
            <FaYoutube size={20} className="cursor-pointer hover:text-blue-700" />
            <FaPinterest size={20} className="cursor-pointer hover:text-blue-700" />
          </div>
        </div>

        {/* Middle Section - Cup Icon */}
        <div className="hidden md:flex justify-center items-center">
          <motion.img
            src={cupIcon}
            alt="Coffee Cup Icon"
            className="w-52 h-52 opacity-90"
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-royal-blue">Subscribe</a></li>
            <li><a href="#" className="hover:text-royal-blue">Cold Brew</a></li>
            <li><a href="#" className="hover:text-royal-blue">Matcha</a></li>
            <li><a href="#" className="hover:text-royal-blue">Accessories</a></li>
            <li><a href="#" className="hover:text-royal-blue">Bundles</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Chamberlain Coffee</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-royal-blue">About</a></li>
            <li><a href="#" className="hover:text-royal-blue">FAQ</a></li>
            <li><a href="#" className="hover:text-royal-blue">Create an Account</a></li>
            <li><a href="#" className="hover:text-royal-blue">Sign In</a></li>
            <li><a href="#" className="hover:text-royal-blue">Contact</a></li>
            <li><a href="#" className="hover:text-royal-blue">Shipping & Returns</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t pt-6">
        © {new Date().getFullYear()} Chamberlain Coffee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
