import './App.css'
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPager.jsx";
import ProductsPage from "./pages/ProdutsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import CartPage from "./pages/CartPage.jsx";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // index vachu oru item ah remove pannum
  const removeFromCart = (index) => {
    setCart(cart.filter((item, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/products"
        element={<ProductsPage cartCount={cart.length} addToCart={addToCart} />}
      />
      <Route
        path="/product/:id"
        element={
          <ProductDetailsPage cartCount={cart.length} addToCart={addToCart} />
        }
      />
      <Route
        path="/cart"
        element={
          <CartPage
            cart={cart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        }
      />
      <Route path="*" element={<Navigate to="/products" />} />
    </Routes>
  );
}

export default App;