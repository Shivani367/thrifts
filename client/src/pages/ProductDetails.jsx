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

      <p>Status: {product.status}</p>

      <p>
        Original Price:
        ₹{product.originalPrice}
      </p>
      <p>Seller: {product.seller.name}</p>
<p>Email: {product.seller.email}</p>

    </div>
  );
}

export default ProductDetails;