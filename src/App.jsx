
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";

import Header from "./components/Header";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);

    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: "Product has been added to your cart.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="min-vh-100 bg-light">
      <Header cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products addToCart={addToCart} />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;