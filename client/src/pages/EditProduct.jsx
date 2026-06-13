import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await api.get(
        `/products/${id}`
      );

      const product = response.data.product;

      setTitle(product.title);
      setDescription(product.description);
      setPrice(product.price);

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/products/${id}`,
        {
          title,
          description,
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product Updated");

      navigate("/dashboard");

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Product</h1>

      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <br /><br />

      <input
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <br /><br />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)
  }
/>

      <br /><br />

      <button type="submit">
        Update Product
      </button>
    </form>
  );
}

export default EditProduct;