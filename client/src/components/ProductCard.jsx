import { Link } from "react-router-dom";
import api from "../services/api";
import { useState } from "react";

function ProductCard({
  product,
  showWishlistButton = true,
}){
  const [saved, setSaved] = useState(false);
  const handleWishlist = async () => {
  try {
    const token = localStorage.getItem("token");

    await api.post(
  `/wishlist/${product._id}`,
  {},
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

setSaved(true);
  } catch (error) {
  if (
    error.response?.data?.message ===
    "Product already in wishlist"
  ) {
    setSaved(true);
  } else {
    alert(
      error.response?.data?.message
    );
  }
}
};
  return (
    <div
  style={{
  background: "#FFFDF9",
  opacity:
  product.status === "sold"
    ? 0.85
    : 1,
boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
border: "1px solid #EADBC8",
  borderRadius: "16px",
  padding: "16px",
 
  transition: "0.3s",
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

<p
  style={{
    fontWeight: "600",
    color:
      product.status === "sold"
        ? "#B71C1C"
        : "#2E7D32",
  }}
>
  {product.status === "sold"
    ? "SOLD OUT"
    : "Available"}
</p>

{product.status === "available" &&
  showWishlistButton && (
    <button
    onClick={handleWishlist}
    style={{
      background: "#FFF0F0",
      border: "1px solid #FFB3B3",
      padding: "8px 12px",
      borderRadius: "8px",
      cursor: "pointer",
      marginBottom: "10px",
    }}
  >
    {saved ? "❤️ Saved" : "🤍 Save"}
  </button>
)}
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