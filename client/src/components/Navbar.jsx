import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        background: "#eee",
      }}
    >
      <Link to="/">Home</Link>

      <Link to="/sell">
        Sell Product
      </Link>

      <Link to="/dashboard">
        Dashboard
      </Link>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;