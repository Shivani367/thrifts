import { useState, useEffect } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  

  useEffect(() => {
  fetchProducts();
}, [keyword, category]);

  const fetchProducts = async () => {
    try {
      const response = await api.get(
  `/products?keyword=${keyword}&category=${category}`
);

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
  style={{
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  }}
>
  <input
    type="text"
    placeholder="Search products..."
    value={keyword}
    onChange={(e) =>
      setKeyword(e.target.value)
    }
    style={{
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      minWidth: "250px",
    }}
  />

  <select
    value={category}
    onChange={(e) =>
      setCategory(e.target.value)
    }
    style={{
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
    }}
  >
    <option value="">
      All Categories
    </option>

    <option value="electronics">
      Electronics
    </option>

    <option value="clothes">
      Clothes
    </option>

    <option value="furniture">
      Furniture
    </option>

    <option value="books">
      Books
    </option>

    <option value="sports">
      Sports
    </option>

    <option value="others">
      Others
    </option>
  </select>
</div>
      <h1>Thrift India</h1>
<p>
  Buy and sell pre-loved treasures.
</p>

      <div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  }}
>
  {products.length > 0 ? (
    products.map((product) => (
      <ProductCard
        key={product._id}
        product={product}
      />
    ))
  ) : (
    <h2>No products found</h2>
  )}
</div>
    </div>
  );
}

export default Home;