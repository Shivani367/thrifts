import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { token } = useContext(AuthContext);

  console.log("TOKEN:", token);

  return <h1>Home Page</h1>;
}

export default Home;