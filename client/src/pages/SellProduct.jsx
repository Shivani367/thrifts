import { useState, useRef } from "react";
import api from "../services/api";

function SellProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [category, setCategory] = useState("electronics");
  const [condition, setCondition] = useState("good");
  const [brand, setBrand] = useState("");
  const [location, setLocation] = useState("");
  const [productAge, setProductAge] = useState("");
  const [image, setImage] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("originalPrice", originalPrice);
      formData.append("category", category);
      formData.append("condition", condition);
      formData.append("brand", brand);
      formData.append("location", location);
      formData.append("productAge", productAge);

      if (image) {
        formData.append("image", image);
      }

      const response = await api.post("/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);

    if (e.dataTransfer.files?.[0]) {
      setImage(e.dataTransfer.files[0]);
    }
  };

  const uploadBoxStyle = {
    padding: "26px",
    borderRadius: "18px",
    border: dragOver ? "2px dashed #C97B63" : "2px dashed #e8dfd6",
    background: "#FFFDF9",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "180px",
    transition: "border-color 0.25s ease, background 0.25s ease",
    color: "#6E5D57",
  };

  const inputStyle = {
    width: "100%",
    borderRadius: "14px",
    border: "1px solid #e8dfd6",
    padding: "14px 16px",
    fontSize: "15px",
    color: "#3D2C2E",
    background: "#fffdf9",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
    height: "52px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "10px",
    color: "#6E5D57",
    fontSize: "14px",
    fontWeight: "700",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF6F1",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#FFFDF9",
          borderRadius: "20px",
          boxShadow: "0 18px 50px rgba(61, 44, 46, 0.08)",
          padding: "40px 36px",
        }}
      >
        <div style={{ marginBottom: "32px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "38px",
              fontWeight: "800",
              color: "#3D2C2E",
              lineHeight: "1.05",
            }}
          >
            List an Item
          </h1>
          <p
            style={{
              margin: "16px 0 0 0",
              fontSize: "17px",
              color: "#6E5D57",
              lineHeight: "1.7",
            }}
          >
            Give your pre-loved items a second life.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <label style={labelStyle}>Product Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <label style={labelStyle}>Brand</label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <label style={labelStyle}>Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <label style={labelStyle}>Original Price</label>
              <input
                type="number"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <label style={labelStyle}>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ ...inputStyle, appearance: "none", paddingRight: "16px" }}
              >
                <option value="electronics">Electronics</option>
                <option value="clothes">Clothes</option>
                <option value="furniture">Furniture</option>
                <option value="books">Books</option>
                <option value="sports">Sports</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div style={{ minWidth: 0 }}>
              <label style={labelStyle}>Condition</label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                style={{ ...inputStyle, appearance: "none", paddingRight: "16px" }}
              >
                <option value="new">New</option>
                <option value="like-new">Like New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>

            <div style={{ minWidth: 0 }}>
              <label style={labelStyle}>Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <label style={labelStyle}>Product Age</label>
              <input
                type="text"
                value={productAge}
                onChange={(e) => setProductAge(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ marginTop: "24px" }}>
            <label style={labelStyle}>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              style={{
                ...inputStyle,
                minHeight: "140px",
                resize: "vertical",
                padding: "16px",
                lineHeight: "1.7",
              }}
            />
          </div>

          <div style={{ marginTop: "24px" }}>
            <label style={labelStyle}>Upload product photos</label>
            <div
              style={uploadBoxStyle}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                setDragOver(false);
              }}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#6E5D57",
                  maxWidth: "420px",
                }}
              >
                Drag and drop a photo here, or click to select a file.
              </p>
            </div>

            {image && (
              <div
                style={{
                  marginTop: "18px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #e8dfd6",
                  background: "#ffffff",
                  maxWidth: "280px",
                }}
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "240px" }}
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "34px",
              border: "none",
              borderRadius: "14px",
              background: "#C97B63",
              color: "#FFFDF9",
              padding: "16px 24px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              transition: "background 0.25s ease, transform 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#b86953";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#C97B63";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Publish Listing
          </button>
        </form>

        <div
          style={{
            marginTop: "36px",
            padding: "26px 28px",
            background: "#FAF6F1",
            borderRadius: "18px",
            border: "1px solid #e8dfd6",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "15px",
              color: "#6E5D57",
              lineHeight: "1.8",
            }}
          >
            Every item reused is one less item wasted. Thank you for choosing a more sustainable way to buy and sell.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SellProduct;