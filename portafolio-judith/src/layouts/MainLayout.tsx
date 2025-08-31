import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen relative">
            {/* Fondo */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-10"
                style={{ backgroundImage: "url('/fondo/fondo.jpg')" }}
            />

            {/* Navbar siempre arriba */}
            <Navbar />

            {/* Contenido de la página */}
            <main className="pt-20">
                {children}
            </main>


            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xl
             -z-10 text-white font-medium text-center w-full pb-2">
                By Agui Martínez
            </div>
            {/* Footer fijo abajo */}
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;
