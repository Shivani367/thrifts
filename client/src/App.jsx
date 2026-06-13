import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SellProduct from "./pages/SellProduct";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./pages/Dashboard";
import EditProduct from "./pages/EditProduct";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>

    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sell" element={ <PrivateRoute> <SellProduct /> </PrivateRoute> }/>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path="/edit-product/:id" element={ <PrivateRoute> <EditProduct /> </PrivateRoute> }/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;