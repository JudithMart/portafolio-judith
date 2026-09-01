import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="min-h-screen relative overflow-hidden 
         bg-[#090A0A] "
    >
      <div
        className="
    absolute
    -top-40
    
    w-[600px]
    h-[500px]
    rounded-full
    bg-[#6C958D]/20
    blur-[120px]
    pointer-events-none
  "
      />


          <div
        className="
    absolute
    right-0
    bottom-4
    w-[600px]
    h-[500px]
    rounded-full
    bg-[#6C958D]/20
    blur-[120px]
    pointer-events-none
  "
      />

      {/* <div
  className="
    absolute
    bottom-[-200px]
    right-[-100px]
    w-[450px]
    h-[450px]
    rounded-full
    bg-[#6C958D]/10
    blur-[120px]
    pointer-events-none
  "
/> */}

      {/* Navbar siempre arriba */}
      <Navbar />

      {/* Contenido de la página */}
      <main className="md:pt-1 py-20 ">{children}</main>

      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm
             z-10 text-gray-200 font-medium text-center w-full pb-2"
      >
        By Agui Martínez
      </div>
      {/* Footer fijo abajo */}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;

//   <div
// className="absolute inset-0 bg-cover bg-center -z-10"

//style={{ backgroundImage: "url('/fondo/fondo.jpg')" }}
// />
