function ProductCard({ product, addToCart }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>

        <p className="text-muted mb-2">{product.category}</p>

        <h5 className="fw-bold mb-3">₹{product.price}</h5>

        <button className="btn btn-dark mt-auto" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
