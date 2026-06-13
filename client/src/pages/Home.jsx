import { useState, useEffect } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>

      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Home;