import { useEffect, useState } from "react";
import api from "../services/api";

function Profile() {
  const [user, setUser] =
    useState(null);
const [productsCount, setProductsCount] =
  useState(0);

const [wishlistCount, setWishlistCount] =
  useState(0);
 
  useEffect(() => {
  fetchProfile();
  fetchProfileStats();
}, []);
  const fetchProfile = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const response =
        await api.get(
          "/auth/profile",
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setUser(
        response.data.user
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfileStats = async () => {
  try {
    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        "/auth/profile-stats",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    setProductsCount(
      response.data.productsCount
    );

    setWishlistCount(
      response.data.wishlistCount
    );

  } catch (error) {
    console.log(error);
  }
};

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>My Profile</h1>

      <p>
        <strong>Name:</strong>{" "}
        {user.name}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {user.email}
      </p>

      <p>
        <strong>Role:</strong>{" "}
        {user.role}
      </p>
      <hr
  style={{
    margin: "20px 0",
  }}
/>

<p>
  <strong>
    Products Listed:
  </strong>{" "}
  {productsCount}
</p>

<p>
  <strong>
    Wishlist Items:
  </strong>{" "}
  {wishlistCount}
</p>
    </div>
  );
}

export default Profile;