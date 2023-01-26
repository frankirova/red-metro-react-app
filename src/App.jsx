import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar";
import { Servicios } from "./components/_Services/Servicios";
import { Nosotros } from "./components/Nosotros";
import { Contacto } from "./components/Contacto";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { ServicesDetail } from "./components/_Services/ServicesDetail";
import { Products } from "./components/Products/Products";
import { ProductDetailContainer } from "./components/Products/ProductDetailContainer";
import { CartProvider } from "./context/CartContext";
import { DrawerCart } from "./components/Drawer";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route
                path="/servicios/:serviceId"
                element={<ServicesDetail />}
              />
              <Route path="/productos" element={<Products />} />
              <Route
                path="productos/:prodId"
                element={<ProductDetailContainer />}
              />
              <Route path="drawer" element={<DrawerCart />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
};

export default App;
