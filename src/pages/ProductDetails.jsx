import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getProductById } from "../services/productApi";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);

        setProduct(data);
      } catch (error) {
        console.log("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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
            Loading product...
          </h5>

        </div>

      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-5">

        <div className="text-center py-5">

          <div className="display-4 mb-3">
            😕
          </div>

          <h3>
            Product Not Found
          </h3>

          <p className="text-muted">
            The product you are looking for does not exist.
          </p>

          <Link
            to="/products"
            className="btn btn-dark"
          >
            Back to Products
          </Link>

        </div>

      </div>
    );
  }

  return (
    <main className="container py-5">

      {/* Breadcrumb */}
      <nav className="mb-4">

        <Link
          to="/"
          className="text-decoration-none text-muted"
        >
          Home
        </Link>

        <span className="mx-2">
          /
        </span>

        <Link
          to="/products"
          className="text-decoration-none text-muted"
        >
          Products
        </Link>

        <span className="mx-2">
          /
        </span>

        <span>
          {product.name}
        </span>

      </nav>

      <div className="card border-0 shadow-sm">

        <div className="card-body p-4 p-md-5">

          <div className="row align-items-center g-5">

            {/* Product Image */}
            <div className="col-md-6">

              <div className="bg-light rounded p-4 text-center">

                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid rounded"
                  style={{
                    maxHeight: "450px",
                    objectFit: "cover",
                  }}
                />

              </div>

            </div>

            {/* Product Information */}
            <div className="col-md-6">

              <span className="badge bg-dark mb-3">
                {product.category}
              </span>

              <h1 className="fw-bold mb-3">
                {product.name}
              </h1>

              <h2 className="fw-bold mb-4">
                ₹{product.price}
              </h2>

              <p className="text-muted mb-4">
                This is a high-quality {product.name}.
                Shop this product at the best price from
                ShopEase.
              </p>

              <div className="d-flex gap-3">

                <button
                  className="btn btn-dark btn-lg px-4"
                  onClick={addToCart}
                >
                  🛒 Add to Cart
                </button>

                <Link
                  to="/products"
                  className="btn btn-outline-dark btn-lg px-4"
                >
                  Continue Shopping
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;