import React from "react";
import Button from "../components/Button";
import ButtonProjects from "../components/ButtonProjects";
import BackgroundGray from "../components/BackgroundGray";
import { motion } from "motion/react";

const Projects: React.FC = () => {
  const projects = [
    {
      image: "/Projects/BiCitas.png",
      link: "https://www.bicitashistoricas.com/",
      title: "BiCitas",
    },
    {
      image: "/Projects/ChefPick.png",
      link: "https://www.bicitashistoricas.com/",
      title: "ChefPick",
    },
    {
      image: "/Projects/GenCode.png",
      link: "https://www.bicitashistoricas.com/",
      title: "GenCode",
    },
    {
      image: "/Projects/Invitacion.png",
      link: "https://www.bicitashistoricas.com/",
      title: "Invitacion",
    },
    {
      image: "/Projects/Pasitos.png",
      link: "https://www.bicitashistoricas.com/",
      title: "Pasitos",
    },
    {
      image: "/Projects/Vuelos.png",
      link: "https://www.bicitashistoricas.com/",
      title: "Vuelos",
    },
  ];

  return (
    <>
      <main className="min-h-screen flex items-center justify-center  bg-cover bg-center px-2 ">
        <div className=" flex flex-col items-center">
          <BackgroundGray>
            <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-6 md:gap-x-10">
              {projects.map((project) => (
                <ButtonProjects
                  key={project.title}
                  image={project.image}
                  link={project.link}
                  title={project.title}
                />
              ))}
            </div>
          </BackgroundGray>
          <motion.div
            layoutId="projects-button"
            className="z-30 absolute -translate-y-6 h-12 w-32 bg-[#6C958D] rounded-2xl flex items-center justify-center
            text-white text-base font-semibold shadow-lg "
          >
            PROJECTS
          </motion.div>
          <div className="z-30 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-52 -translate-y-4 sm:-translate-y-6 w-full mt-6 sm:mt-0">
            <Button texto="COURSES" link="link/to/courses" />
            <Button texto="TOOLS" link="link/to/tools" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
