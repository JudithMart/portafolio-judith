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
      title: "Intectrative Map Web Aplication ",
      description: "Tourism web app with an interactive map, geolocation, route calculation, and an administrative dashboard.",
      github: "https://github.com/JudithMart/BiCiMapa",
      technologies: ["JavaScript", "React", "Mapbox", "Supabase", "Vite", " Tailwind CSS"],
      doc: "",
    },

    {
      image: "/Projects/chefPick.png",
      demo: "https://chefpick.vercel.app/",
      title: "ChefPick ",
      description: "Recipe discovery platform focused on finding recipes based on available ingredients, with a responsive and reusable interface.",
      github: "https://github.com/JovanyEquihua/recetarioInteligente-",
      technologies: ["JavaScript", "React", "Node.js", "Tailwind CSS", "Next.js"],
      doc: "",
    },
    {
      image: "/Projects/GenCode.png",
      demo: "https://gencodetech.com/",
      title: "GenCode Tech",
      description: "Responsive corporate website with reusable components, dynamic service pages, and a Sanity-powered blog.",
      github: "https://github.com/TadeoRM06/Gencode",
      technologies: ["JavaScript", "Nuxt.js", "Tailwind CSS", "Vue.js", "Sanity CMS"],
      doc: "",
    },
    {
      image: "/Projects/Invitacion.png",
      demo: "",
      title: "Wedding Invitation",
      description: "Responsive interactive wedding invitation with reusable sections and personalized event information.",
      github: "https://github.com/JudithMart/invitation-template",
      technologies: ["JavaScript", "React", "Tailwind CSS"],
      doc: "",
    },
    {
      image: "/Projects/Pasitos.png",
      demo: "",
      title: "PASITOS” VIDEO GAME",
      description: "Motor rehabilitation video game developed in Unity and C#, featuring player calibration and motion-based interactions.",
      github: "https://github.com/jdjesusma/RehabilyTecGames",
      technologies: ["C#", "Unity"],
      doc: "/projects/pasitos",
    },
    {
      image: "/Projects/Vuelos.png",
      demo: "",
      title: "FLIGHT SEARCH ENGINE",
      description: "Full-stack flight search application integrating the Amadeus API, with filters, data transformation, and tested backend services.",
      github: "https://github.com/JudithMart/flight_search_engine",
      technologies: ["JavaScript", "React", "Node.js", "Express", "Tailwind CSS"],
      doc: "",
    },
  ];

  return (
    <>
      <section className="min-h-screen flex items-center justify-center ">
        <div className=" relative flex flex-col items-center   ">
          <BackgroundGray className="">
           <div className="p-6 pb-16 md:pb-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-8">
              {projects.map((project) => (
                <ButtonProjects
                  key={project.title}
                  image={project.image}
                  demo={project.demo}
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  doc={project.doc}
                  technologies={project.technologies}
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
