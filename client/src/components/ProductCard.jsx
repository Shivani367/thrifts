import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
  style={{
  background: "#fff",
  borderRadius: "16px",
  padding: "16px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  overflow: "hidden",
 
}}
>
  {product.images?.length > 0 && (
    <img
  src={
    product.images?.length > 0
      ? product.images[0]
      : "https://via.placeholder.com/400x220?text=No+Image"
  }
  alt={product.title}
  style={{
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "12px",
  }}
/>
  )}

  <h3
  style={{
    marginBottom: "8px",  }}> {product.title}</h3>

  <p>{product.description}</p>

  <p
  style={{
    fontSize: "20px",
    fontWeight: "bold",
  }}
>
  ₹{product.price}
</p>

  <Link
  to={`/product/${product._id}`}
  style={{
  background: "#C97B63",
  color: "white",
  padding: "10px 18px",
  borderRadius: "8px",
  textDecoration: "none",
  display: "inline-block",
  fontWeight: "600",
}}
>
  View Details
</Link>
</div>
  );
}

export default ProductCard;