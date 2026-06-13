import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
  style={{
    background: "#fff",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    maxWidth: "300px",
  }}
>
  {product.images?.length > 0 && (
    <img
      src={product.images[0]}
      alt={product.title}
      style={{
        width: "100%",
        height: "220px",
        objectFit: "cover",
        borderRadius: "10px",
        marginBottom: "12px",
      }}
    />
  )}

  <h3>{product.title}</h3>

  <p>{product.description}</p>

  <p>₹{product.price}</p>

  <Link to={`/product/${product._id}`}>
    View Details
  </Link>
</div>
  );
}

export default ProductCard;