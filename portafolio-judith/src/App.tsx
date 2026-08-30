import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectsPasitos from "./pages/Projects_pasitos";
// import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/pasitos" element={<ProjectsPasitos />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter >
  );
};

export default App;