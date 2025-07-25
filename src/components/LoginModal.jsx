import { motion } from "framer-motion";

const LoginModal = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]" // Ensure it's above everything
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative z-[10000]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded"
        />
        <button className="w-full bg-royal-blue text-white py-3 rounded hover:bg-blue-700">
          Login
        </button>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <span className="text-blue-600 cursor-pointer">Sign Up</span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;
