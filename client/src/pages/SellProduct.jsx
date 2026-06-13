import { useState } from "react";
import api from "../services/api";

function SellProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("electronics");
  const [brand, setBrand] = useState("");
const [location, setLocation] = useState("");
const [originalPrice, setOriginalPrice] = useState("");
const [productAge, setProductAge] = useState("");
const [condition, setCondition] = useState("good");
const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("location", location);
    formData.append("originalPrice", originalPrice);
    formData.append("productAge", productAge);
    formData.append("condition", condition);

    if (image) {
      formData.append("image", image);
    }

    const response = await api.post(
      "/products",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response.data);

  } catch (error) {
    console.log(error.response?.data);
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="electronics">Electronics</option>
  <option value="clothes">Clothes</option>
  <option value="furniture">Furniture</option>
  <option value="books">Books</option>
  <option value="sports">Sports</option>
  <option value="others">Others</option>
</select>
      <br /><br />

<input
  type="text"
  placeholder="Brand"
  value={brand}
  onChange={(e) => setBrand(e.target.value)}
/>

<br /><br />

<input
  type="text"
  placeholder="Location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
/>

<br /><br />

<input
  type="number"
  placeholder="Original Price"
  value={originalPrice}
  onChange={(e) => setOriginalPrice(e.target.value)}
/>

<br /><br />

<input
  type="text"
  placeholder="Product Age"
  value={productAge}
  onChange={(e) => setProductAge(e.target.value)}
/>

<br /><br />

<select
  value={condition}
  onChange={(e) => setCondition(e.target.value)}
>
  <option value="new">New</option>
  <option value="like-new">Like New</option>
  <option value="good">Good</option>
  <option value="fair">Fair</option>
</select>

<input
  type="file"
  accept="image/*"
  onChange={(e) =>
    setImage(e.target.files[0])
  }
/>

<br /><br />

      <button type="submit">
        Sell Product
      </button>
    </form>
  );
}

export default SellProduct;