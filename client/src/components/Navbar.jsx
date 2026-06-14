import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#FFF8F0",
borderBottom: "1px solid #EADBC8",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Side */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3D2C2E",
            fontWeight: "600",
          }}
        >
          HOME
        </Link>

        <span>ELECTRONICS</span>
        <span>CLOTHES</span>
        <span>BOOKS</span>
        <span>SPORTS</span>
      </div>

      {/* Center Logo */}
      <h1
  style={{
    flex: 1,
    textAlign: "center",
    margin: 0,
    color: "#A26769",
fontWeight: "800",
fontSize: "32px",
  }}
>
  THRIFTS
</h1>

      {/* Right Side */}
      <div
  style={{
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
    alignItems: "center",
  }}
>
        {token ? (
          <>
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "#3D2C2E"
              }}
            >
              Dashboard
            </Link>

            <Link
              to="/sell"
              style={{
                textDecoration: "none",
                color: "#3D2C2E",
              }}
            >
              Sell
            </Link>

            <button
  onClick={handleLogout}
  style={{
    background: "#C97B63",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  }}
>
  Logout
</button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#111827",
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "#111827",
              }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;