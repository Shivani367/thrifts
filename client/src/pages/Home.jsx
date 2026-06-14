import { useState, useEffect } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  
  

  useEffect(() => {
  fetchProducts();
}, [keyword, category,sort]);

  const fetchProducts = async () => {
    try {
      const response = await api.get(
  `/products?keyword=${keyword}&category=${category}&sort=${sort}`
);

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div
    style={{
      padding: "30px 40px",
      background: "#F8F1E7",
      minHeight: "100vh",
    }}
  >
    <div
      style={{
        display: "flex",
        gap: "12px",
        marginBottom: "30px",
        flexWrap: "wrap",
      }}
    >
      <input
        type="text"
        placeholder="Search products..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #D8CBB8",
          minWidth: "280px",
          background: "#FFFDF9",
          fontSize: "15px",
        }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #D8CBB8",
          background: "#FFFDF9",
          fontSize: "15px",
        }}
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothes">Clothes</option>
        <option value="furniture">Furniture</option>
        <option value="books">Books</option>
        <option value="sports">Sports</option>
        <option value="others">Others</option>
      </select>
    </div>

    <select
  value={sort}
  onChange={(e) =>
    setSort(e.target.value)
  }
  style={{
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #D8CBB8",
    background: "#FFFDF9",
    fontSize: "15px",
  }}
>
  <option value="">
    Newest First
  </option>

  <option value="oldest">
    Oldest First
  </option>

  <option value="low">
    Price Low → High
  </option>

  <option value="high">
    Price High → Low
  </option>
</select>

    <h1
      style={{
        margin: "0",
        fontSize: "42px",
        color: "#3D2C2E",
      }}
    >
      Thrift India
    </h1>

    <p
      style={{
        color: "#6B5B57",
        marginTop: "10px",
        marginBottom: "30px",
        fontSize: "18px",
      }}
    >
      Buy and sell pre-loved treasures.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "24px",
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