import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import AllProducts from "./components/AllProducts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Footer from "./pages/Footer";

// #0ff914d
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<AllProducts />} />
            <Route path="/:name" element={<Products />} />
          </Route>
          <Route path="/giris" element={<Login />} />
          <Route path="/kayit" element={<Register />} />
          <Route path="/sepet" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
