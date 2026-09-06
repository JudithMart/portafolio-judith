import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Footer from "./Footer";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen relative bg-[#090A0A] overflow-x-hidden">
      <div className="absolute -top-40 w-[600px] h-[500px] rounded-full bg-[#6C958D]/20 blur-[120px] pointer-events-none" />

      <div className="absolute right-0 bottom-4 w-[600px] h-[500px] rounded-full bg-[#6C958D]/20 blur-[120px] pointer-events-none" />

      <Navbar />

      <main className="relative z-10 ">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
