import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Home/Footer";
import Contacto from "./pages/Contacto";
import ProductosYservicios from "./pages/ProductosYservicios";
import Error404 from "./pages/Error404";
import Codikash from "./pages/services/Codikash";
import Cashless from "./pages/services/Cashless";
import GestionDeAccesos from "./pages/services/GestionDeAccesos";
import Tableros from "./pages/services/Tableros";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos&servicios" element={<ProductosYservicios />} />
        <Route path="/codikash" element={<Codikash />} />
        <Route path="/cashless" element={<Cashless />} />
        <Route path="/gestionacceso" element={<GestionDeAccesos />} />
        <Route path="/tableros" element={<Tableros />} />
        {/* <Route path="/contacto" element={<Contacto />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>

      

      <Footer />
    </div>
  );
}

export default App;
