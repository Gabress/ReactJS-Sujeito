import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Header from "./pages/Header";
import Contato from "./pages/Contato";


function RoutesApp() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;