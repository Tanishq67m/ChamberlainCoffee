import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Import Footer
import HomePage from "./pages/HomePage";
import LoginModal from "./components/LoginModal";
import CartSidebar from "./components/CartSidebar.jsx";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AboutPage from "./pages/AboutPage.jsx";
function App() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Add to Cart Logic
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      return existing
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ Remove from Cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <Router>
          <div className="flex flex-col min-h-screen bg-off-white">
            {/* Navbar */}
            <Navbar
              cartCount={cartCount}
              openLogin={() => setShowLogin(true)}
              openCart={() => setShowCart(true)}
            />

            {/* Modals */}
            <AnimatePresence>
              {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
              {showCart && (
                <CartSidebar
                  cartItems={cartItems}
                  onClose={() => setShowCart(false)}
                  removeItem={removeFromCart}
                />
              )}
            </AnimatePresence>

            {/* ✅ Page Content */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage addToCart={addToCart} />} />
                <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
                <Route path="/about" element={<AboutPage/>} />

                
                <Route
                  path="/product/:id"
                  element={<ProductDetailsPage addToCart={addToCart} />}
                />
              </Routes>
            </main>

            {/* ✅ Footer */}
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
