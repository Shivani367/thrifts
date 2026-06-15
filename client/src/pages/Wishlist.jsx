import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const [wishlist, setWishlist] =
    useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const response = await api.get(
        "/wishlist",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setWishlist(
        response.data.wishlist
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemove = async (
  productId
) => {
  try {
    const token =
      localStorage.getItem("token");

    await api.delete(
      `/wishlist/${productId}`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    fetchWishlist();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <h1>My Wishlist ❤️</h1>

      {wishlist.map((item) => (
  <div key={item.product._id}>
    <ProductCard
  product={item.product}
  showWishlistButton={false}
/>

    <button
      onClick={() =>
        handleRemove(
          item.product._id
        )
      }
      style={{
        background: "#EF4444",
        color: "white",
        border: "none",
        padding: "10px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      Remove
    </button>
  </div>
))}
    </div>
  );
}

export default Wishlist;