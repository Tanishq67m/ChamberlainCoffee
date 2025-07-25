import { motion } from "framer-motion";

const CartSidebar = ({ cartItems, onClose, removeItem }) => {
  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("€", ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 z-[9998] flex justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white w-96 h-full p-6 shadow-2xl relative"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-600"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {item.quantity} × {item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 font-bold"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-royal-blue text-white py-3 mt-4 rounded-full font-bold hover:bg-blue-800 transition">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CartSidebar;
