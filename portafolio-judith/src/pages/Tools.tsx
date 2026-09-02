import React from "react";
import Button from "../components/Button";
import BackgroundGray from "../components/BackgroundGray";
import { motion } from "motion/react";
import Tool from "../components/Tool";

const Tools: React.FC = () => {
  const tools = [
    {
      name: "C++",
      level: "Intermediate",
      projects: ["Coding Cup Michoacán", "Programming Competitions"],
    },

    {
      name: "C#",
      level: "Basic",
      projects: ["PASITOS — Video Game"],
    },

    {
      name: "JavaScript",
      level: "Intermediate",
      projects: [
        "BiCitas Históricas",
        "ChefPick",
        "Wedding Invitation",
        "Flight Search Engine",
      ],
    },

    {
      name: "React",
      level: "Intermediate",
      projects: ["All Projects"],
    },

    {
      name: "Tailwind CSS",
      level: "Intermediate",
      projects: ["All Projects"],
    },

    {
      name: "Next.js",
      level: "Basic",
      projects: ["ChefPick"],
    },

    {
      name: "Vue.js",
      level: "Intermediate",
      projects: ["GenCode Tech"],
    },

    {
      name: "Vite",
      level: "Intermediate",
      projects: ["BiCitas Históricas", "ChefPick"],
    },

    {
      name: "HTML",
      level: "Intermediate",
      projects: [""],
    },

    {
      name: "CSS",
      level: "Intermediate",
      projects: ["All Projects"],
    },

    {
      name: "Node.js",
      level: "Intermediate",
      projects: ["All Projects"],
    },

    {
      name: "PostgreSQL",
      level: "Intermediate",
      projects: [""],
    },

    {
      name: "Supabase",
      level: "Intermediate",
      projects: ["BiCitas Históricas"],
    },

    {
      name: "GitHub",
      level: "Intermediate",
      projects: ["All Projects"],
    },

    {
      name: "Jira",
      level: "Basic",
      projects: [""],
    },

    {
      name: "Java",
      level: "Intermediate",
      projects: ["Programming Competitions"],
    },

    {
      name: "Python",
      level: "Basic",
      projects: ["Programming Competitions"],
    },

    {
      name: "Figma",
      level: "Basic",
      projects: ["GenCode Tech", "BiCitas Históricas"],
    },

    {
      name: "Nuxt.js",
      level: "Basic",
      projects: ["GenCode Tech"],
    },

    {
      name: "Unity",
      level: "Basic",
      projects: ["PASITOS — Video Game"],
    },
  ];

  return (
    <section className="flex items-center justify-center px-4 pt-36 md:pt-32 pb-28">
      <div className="relative flex flex-col items-center ">
        <BackgroundGray>
          <div className="relative ">
            <div className=" absolute inset-0 pointer-events-none z-0 hidden lg:block ">
              {/* Línea 1 */}

              <div className=" absolute  left-[25%] top-10 bottom-10 w-[2px] bg-[#6C958D]/70" />

              {/* Línea 2 */}

              <div className=" absolute left-[50%] top-10 bottom-10 w-[2px] bg-[#6C958D]/70" />

              {/* Línea 3 */}

              <div className=" absolute left-[75%] top-10 bottom-10 w-[2px] bg-[#6C958D]/70 " />

              {/* DIAMANTES */}

              <div className="  absolute  left-[25%]  top-10  -translate-x-1/2  w-3  h-3  rotate-45  bg-[#6C958D] " />

              <div className="  absolute  left-[25%]  bottom-10  -translate-x-1/2  w-3  h-3  rotate-45  bg-[#6C958D] " />

              <div className="  absolute  left-[50%]  top-10  -translate-x-1/2  w-3  h-3  rotate-45  bg-[#6C958D] " />

              <div className=" absolute left-[50%] bottom-10 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#6C958D]" />

              <div className=" absolute left-[75%] top-10 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#6C958D]" />

              <div className=" absolute left-[75%] bottom-10 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#6C958D] " />
            </div>

            {/* =========================
                TOOLS
            ========================== */}

            <div className=" relative pb-0 md:pb-4  grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-0 md:gap-x-1 md:gap-y-0">
              {tools.map((tool) => (
                <Tool
                  key={tool.name}
                  name={tool.name}
                  level={tool.level}
                  projects={tool.projects}
                />
              ))}
            </div>
          </div>
        </BackgroundGray>

        {/* =========================
            TOOLS BUTTON
        ========================== */}

        <motion.div
          initial={{ y: 60 }}
          animate={{ y: -20 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
         
          className=" z-20 absolute h-8 w-24 md:h-12 md:w-32 bg-[#6C958D] rounded-2xl

            flex
            items-center
            justify-center

            text-white
            text-sm
            md:text-base

            font-semibold
            shadow-lg

            md:right-60
            right-2
          "
        >
          TOOLS
        </motion.div>

        {/* =========================
            OTHER BUTTONS
        ========================== */}

        <div
          className="
            absolute
            z-20

            -bottom-6
            sm:bottom-[40px]
            md:bottom-[-14px]

            -translate-x-11
            md:-translate-x-32

            flex
            flex-wrap
            justify-center
            items-center

            gap-3
            sm:gap-8
            md:gap-16

          
          "
        >
          <Button texto="COURSES" link="/courses" />

          <Button texto="PROJECTS" link="/projects" />
        </div>
      </div>
    </section>
  );
};

export default Tools;
