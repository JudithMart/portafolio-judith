import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen relative bg-[#090A0A] overflow-x-hidden">
      <div className="absolute -top-40 w-[600px] h-[500px] rounded-full bg-[#6C958D]/20 blur-[120px] pointer-events-none" />

      <div className="absolute right-0 bottom-4 w-[600px] h-[500px] rounded-full bg-[#6C958D]/20 blur-[120px] pointer-events-none" />

      {/* Navbar siempre arriba */}
      <Navbar />

      {/* Contenido de la página */}
      <main className="relative z-10 pb-24">{children}</main>

      <div className="absolute bottom-0 left-0 right-0 z-20 py-6 text-center text-sm text-gray-200 font-medium">
        <p>By Agui Martínez</p>
      </div>
      {/* Footer fijo abajo */}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;

