import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Servicios } from "./components/Servicios";
import { Nosotros } from "./components/Nosotros";
import { Contacto } from "./components/Contacto";
import { Login }from "./components/Login";
import { Signup } from "./components/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
