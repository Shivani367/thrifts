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

      <h4>₹{product.price}</h4>

      <p>{product.category}</p>

      <Link to={`/product/${product._id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;