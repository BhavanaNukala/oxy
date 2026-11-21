import { useState } from "react";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductGrid from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";

import products from "./data/products";
import Swal from "sweetalert2";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);

  // Success message state
  const [successMessage, setSuccessMessage] = useState("");

  const addToCart = () => {
    // Increase cart count
    setCartCount((prevCount) => prevCount + 1);
    Swal.fire({
    icon: "success",
    title: "Added to Cart!",
    text: "Product has been added to your cart.",
    confirmButtonText: "OK",
  });

  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Header cartCount={cartCount} />

      {/* SUCCESS MESSAGE */}
      {successMessage && (
        <div className="alert alert-success text-center">{successMessage}</div>
      )}

      <HeroBanner />

      <main className="container py-5">
        <h2 className="text-center mb-4">Our Products</h2>

        <div className="row">
          <div className="col-md-6">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          <div className="col-md-6">
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>

        <ProductGrid products={filteredProducts} addToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;
