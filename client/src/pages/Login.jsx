import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      localStorage.setItem(
  "token",
  response.data.token
);

navigate("/");
    } catch (error) {
  setErrorMessage(
    error.response?.data?.message ||
    "Invalid email or password"
  );
}
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />
      {errorMessage && (
  <p
    style={{
      color: "red",
      marginTop: "10px",
    }}
  >
    {errorMessage}
  </p>
)}

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;