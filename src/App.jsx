import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Naav from "./components/Naav";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <ToastContainer position="top-right" />
        <Naav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <div className="mt-5">
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
