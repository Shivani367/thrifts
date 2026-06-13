import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3>{product.title}</h3>

      <p>{product.description}</p>

      <p>₹{product.price}</p>

      {product.brand && (
        <p>Brand: {product.brand}</p>
      )}

      {product.location && (
        <p>Location: {product.location}</p>
      )}

      {product.condition && (
        <p>Condition: {product.condition}</p>
      )}

      {product.productAge && (
        <p>Age: {product.productAge}</p>
      )}

      {product.status && (
        <p>Status: {product.status}</p>
      )}

      {product.originalPrice && (
        <p>Original Price: ₹{product.originalPrice}</p>
      )}

      <Link to={`/product/${product._id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;