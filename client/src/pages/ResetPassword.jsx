import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ResetPassword() {
  const { token } = useParams();

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleReset = async () => {
    try {
      const response = await api.post(
        `/auth/reset-password/${token}`,
        {
          password,
        }
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
      <h2>Reset Password</h2>

      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button onClick={handleReset}>
        Reset Password
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default ResetPassword;