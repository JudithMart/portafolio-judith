import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutGroup } from "motion/react";
import Home from "./pages/Home";

import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectsPasitos from "./pages/Projects_pasitos";
import Courses from "./pages/Courses";
import Tools from "./pages/Tools";
import Resume from "./pages/Resume";
// import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LayoutGroup>
        {" "}
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/pasitos" element={<ProjectsPasitos />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/resume" element={<Resume />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </MainLayout>
      </LayoutGroup>
    </BrowserRouter>
  );
};

export default App;
