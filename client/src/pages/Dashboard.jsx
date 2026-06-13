import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchMyProducts();
  }, []);

  const fetchMyProducts = async () => {
  try {
    const token = localStorage.getItem("token");

    console.log("TOKEN:", token);

    const response = await api.get(
      "/products/my-products",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("RESPONSE:", response.data);

    setProducts(response.data.products);
  } catch (error) {
    console.log(error.response?.data);
  }
};
  const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await api.delete(
      `/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchMyProducts();

  } catch (error) {
    console.log(error.response?.data);
  }
};

  return (
    <div>
      <h1>My Products</h1>

      {products.map((product) => (
        <div key={product._id}>
  <ProductCard product={product} />

        <Link to={`/edit-product/${product._id}`}>
  <button>Edit Product</button>
</Link>

  <button
    onClick={() => handleDelete(product._id)}
  >
    Delete Product
  </button>
</div>
      ))}
    </div>
  );
}

export default Dashboard;