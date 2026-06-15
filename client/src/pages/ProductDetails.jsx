import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await api.get(
        `/products/${id}`
      );

      setProduct(response.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

        {product.images?.length > 0 && (
      <img
        src={product.images[0]}
        alt={product.title}
        style={{
          width: "400px",
          borderRadius: "12px",
        }}
      />
    )}
        
      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <h2>₹{product.price}</h2>

      <p>Brand: {product.brand}</p>

      <p>Location: {product.location}</p>

      <p>Condition: {product.condition}</p>

      <p>Age: {product.productAge}</p>

      <p
  style={{
    fontWeight: "bold",
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

      <p>
        Original Price:
        ₹{product.originalPrice}
      </p>
      <p>
  Seller: {product.seller?.name}</p>
<p>Email: {product.seller.email}</p>
{product.status === "available" && (
  // your existing <a> tag here

<a
  href={`mailto:${product.seller.email}?subject=Interested in ${product.title}`}
  style={{
    background: "#C97B63",
    color: "white",
    padding: "10px 16px",
    borderRadius: "8px",
    textDecoration: "none",
    display: "inline-block",
    marginTop: "10px",
  }}
>
  Contact Seller
</a>)}

    </div>
  );
}

export default ProductDetails;