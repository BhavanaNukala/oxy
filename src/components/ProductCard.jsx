
import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card h-100 shadow-sm border-0">

      <img
        src={product.thumbnail}
        className="card-img-top"
        alt={product.title}
        style={{
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column">

        <span className="badge bg-light text-dark border align-self-start mb-2">
          {product.category}
        </span>

        <h5 className="card-title fw-bold">
          {product.title}
        </h5>

        <h5 className="fw-bold mb-3">
          ₹{product.price}
        </h5>

        <div className="mt-auto">

          <div className="d-grid gap-2">

            <Link
              to={`/products/${product.id}`}
              className="btn btn-outline-dark"
            >
              View Details
            </Link>

            <button
              className="btn btn-dark"
              onClick={addToCart}
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;