// fileName: App.jsx (Código Final)
import React from "react";
import { Routes, Route } from "react-router-dom";
// Componentes de diseño
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas y componentes de ruta
// Nota: La ruta de importación debe coincidir con la ubicación real del archivo.
import Catalogo from "./components/Catalogo";   // Asumimos que está en components/
import Mujer from "./components/Mujer";         // Asumimos que está en components/
import ModaPage from "./pages/ModaPage";        // Como lo tenías originalmente (en pages/)

function App() {
  return (
    // Ya no usamos <Router> aquí para evitar el error de anidamiento
    <>
      <Navbar />

      <main> 
        <Routes>
          {/* RUTA DE INICIO - Es la que cargaba Catálogo antes */}
          <Route path="/" element={<Catalogo />} />
          
          {/* RUTA DE CATÁLOGO (si es diferente a la de inicio) */}
          <Route path="/catalogo" element={<Catalogo />} />
          
          {/* 1. RUTA REINSTALADA: Página Hub de Moda (Hombre, Mujer, Niño, Niña) */}
          <Route path="/moda" element={<ModaPage />} /> 
          
          {/* 2. RUTA NUEVA: Página de Mujer con productos (lo que acabamos de crear) */}
          <Route path="/mujer" element={<Mujer />} /> 

          {/* Puedes añadir aquí más rutas (/hombre, /nino, /nina, etc.) si las tienes */}
          
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;