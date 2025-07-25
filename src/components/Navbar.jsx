import { motion } from "framer-motion";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaMugHot } from "react-icons/fa"; // Coffee mug as cart
import Logo from "../assets/logo.svg";

const NavLink = ({ to, children }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `text-brand-dark font-medium relative tracking-wide hover:text-royal-blue ${
        isActive ? "text-royal-blue font-bold" : ""
      }`
    }
  >
    {children}
  </RouterNavLink>
);

const Navbar = ({ cartCount = 0, openLogin, openCart }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-8 flex justify-between items-center bg-off-white/70 backdrop-blur-md shadow-sm">
      {/* Logo */}
      <RouterNavLink to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-30 h-10" />
      </RouterNavLink>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 text-xl text-royal-blue relative">
        {/* Search */}
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FiSearch />
        </motion.button>

        {/* Cart */}
        <motion.button
          className="relative"
          onClick={openCart}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaMugHot className="text-2xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </motion.button>

        {/* Login Button */}
        <motion.button
          onClick={openLogin}
          className="text-sm font-bold bg-royal-blue text-white px-5 py-2 rounded-full hover:bg-blue-800 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LOGIN
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
