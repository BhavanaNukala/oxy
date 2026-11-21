

import { useEffect, useState } from "react";

import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

import { getProducts } from "../services/productApi";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();

        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get unique categories from API products
  const categories = [
    ...new Set(
      products.map((product) => product.category)
    ),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center py-5">

          <div
            className="spinner-border text-dark mb-3"
            role="status"
          >
            <span className="visually-hidden">
              Loading...
            </span>
          </div>

          <h5 className="text-muted">
            Loading products...
          </h5>

        </div>
      </div>
    );
  }

  return (
    <main className="container py-5">

      {/* Page Heading */}
      <div className="text-center mb-5">

        <h2 className="fw-bold">
          Our Products
        </h2>

        <p className="text-muted">
          Find the perfect product for you.
        </p>

      </div>

      {/* Search and Category */}
      <div className="card border-0 shadow-sm mb-5">

        <div className="card-body p-4">

          <div className="row">

            {/* Search */}
            <div className="col-md-6">
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </div>

            {/* Category */}
            <div className="col-md-6">
              <CategoryFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
              />
            </div>

          </div>

        </div>
      </div>

      {/* Result Count */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <h5 className="fw-bold mb-0">
          Products
        </h5>

        <span className="badge bg-dark">
          {filteredProducts.length} Products
        </span>

      </div>

      {/* Products */}
      <ProductGrid
        products={filteredProducts}
        addToCart={addToCart}
      />

      {/* No Products */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-5">

          <div className="display-4 mb-3">
            🔍
          </div>

          <h5>
            No products found
          </h5>

          <p className="text-muted">
            Try a different search or category.
          </p>

        </div>
      )}

    </main>
  );
}

export default Products;