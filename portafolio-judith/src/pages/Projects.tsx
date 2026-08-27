import React from "react";
import Button from "../components/Button";
import ButtonProjects from "../components/ButtonProjects";
import BackgroundGray from "../components/BackgroundGray";
import { motion } from "motion/react";

const Projects: React.FC = () => {
  const projects = [
    {
      image: "/Projects/BiCitas.png",
      demo: "https://www.bicitashistoricas.com/",
      title: "BiCitas Históricas",
      description: "Interactive Map Web Application",
      github:"https://github.com/JudithMart/BiCiMapa",
    },
    
    {
      image: "/Projects/ChefPick.png",
      demo: "https://chefpick.vercel.app/",
      title: "ChefPick ",
      description: "INTELLIGENT RECIPE PLATFORM",
      github:"https://github.com/JovanyEquihua/recetarioInteligente-",
    },
    {
      image: "/Projects/GenCode.png",
      demo: "https://gencodetech.com/",
      title: "GenCode Tech",
      description: "Responsive corporate website development",
      github:"https://github.com/TadeoRM06/Gencode",
    },
    {
      image: "/Projects/Invitacion.png",
      demo: "",
      title: "Wedding Invitation",
      description: "Template for interactive invitations",
      github:"https://github.com/JudithMart/invitation-template",
    },
    {
      image: "/Projects/Pasitos.png",
      demo: "",
      title: "PASITOS” VIDEO GAME",
      description: "REHABILITATION VIDEO GAME FOR CRIT MORELIA",
      github:"https://github.com/jdjesusma/RehabilyTecGames",
    },
    {
      image: "/Projects/Vuelos.png",
      demo: "",
      title: "FLIGHT SEARCH ENGINE",
      description: "Web application for searching flights",
      github:"https://github.com/JudithMart/flight_search_engine",
    },
  ];

  return (
    <>
      <section className="min-h-screen flex items-center justify-center ">
        <div className=" relative flex flex-col items-center   ">
          <BackgroundGray className="">
            <div className="p-6 md:p-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3  gap-x-6 md:gap-x-10">
              {projects.map((project) => (
                <ButtonProjects
                  key={project.title}
                  image={project.image}
                  demo={project.demo}
                  title={project.title}
                  description={project.description}
                  github={project.github}
                />
              ))}
            </div>
          </BackgroundGray>
          <motion.div
            layoutId="projects-button"
            className="z-30 absolute h-8 w-24  md:h-12 md:w-32 bg-[#6C958D] rounded-2xl flex items-center justify-center
            text-white text-sm md:text-base font-semibold shadow-lg "
          >
            PROJECTS
          </motion.div>
          <div
            className="
            absolute
            z-30

            -bottom-6
            sm:bottom-[40px]
            md:bottom-[-14px]

            left-1/2
            -translate-x-1/2

            flex
            flex-wrap
            justify-center
            items-center

            gap-12
            sm:gap-8
            md:gap-56

            w-full
          "
          >
            <Button texto="COURSES" link="link/to/courses" />
            <Button texto="TOOLS" link="link/to/tools" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
