import { useState } from "react";
import api from "../services/api";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] =
    useState("");

  const handleSubmit = async () => {
    try {
      const response = await api.post(
        "/auth/forgot-password",
        { email }
      );

      setMessage(
        response.data.message
      );
    } catch (error) {
      setMessage(
        error.response?.data?.message
      );
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <button onClick={handleSubmit}>
        Send Reset Link
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPassword;