import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiSupabase,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiVuedotjs,
  SiSanity,
  SiUnity,
  SiJira,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { Github } from "lucide-react";

import { BiLogoCPlusPlus, BiLogoPostgresql } from "react-icons/bi";

import { FaFigma, FaPython, FaJava, FaCss3Alt } from "react-icons/fa";

import { IoLogoHtml5 } from "react-icons/io";

interface ToolProps {
  name: string;
  level: string;
  projects: string[];
}

const technologyIcons: Record<string, React.ElementType> = {
  JavaScript: SiJavascript,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  Vite: SiVite,
  Supabase: SiSupabase,
  Jira: SiJira,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Nuxt: SiNuxt,
  "Nuxt.js": SiNuxt,
  "Vue.js": SiVuedotjs,
  "Sanity CMS": SiSanity,
  Unity: SiUnity,
  "C#": TbBrandCSharp,
  Python: FaPython,
  "C++": BiLogoCPlusPlus,
  GitHub: Github,
  Figma: FaFigma,
  Java: FaJava,
  PostgreSQL: BiLogoPostgresql,
  CSS: FaCss3Alt,
  HTML: IoLogoHtml5,
};

const Tool: React.FC<ToolProps> = ({ name, level, projects }) => {
  const Icon = technologyIcons[name];

  const [showHover, setShowHover] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      top: rect.top - 12,
      left: rect.left,
    });

    setShowHover(true);
  };

  const handleMouseLeave = () => {
    setShowHover(false);
  };

  return (
    <>
      {/* =========================
          TOOL
      ========================== */}

      <motion.article
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" relative flex flex-col items-center  justify-center  h-20 w-24 sm:h-20 sm:w-24 md:h-32 md:w-52 group"
      >
        <motion.div
          whileHover={{
            y: -5,
            scale: 1.05,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className=" relative z-10 flex items-center justify-center w-8 h-8 md:h-14 md:w-14 rounded-2xl
            bg-[#6C958D] shadow-lg cursor-pointer transition-shadow duration-300 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
        >
          {Icon && <Icon className="text-white text-xl md:text-3xl" />}
        </motion.div>

        <div className=" md:hidden flex  items-center justify-center">
          <p className="mt-1 text-white text-xs font-light">{level}</p>
        </div>
      </motion.article>

      {/* =========================
          HOVER CARD
      ========================== */}

      {showHover &&
        createPortal(
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 4,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            style={{
              position: "fixed",
              top: position.top,
              left: position.left,
              transform: "translate(-50%, -100%)",
            }}
            className=" invisible md:visible z-[9999] w-64 md:w-72 rounded-3xl bg-[#6C958D]/90 backdrop-blur-md border border-white/10 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.35)] pointer-events-none"
          >
            {/* Nombre */}

            <div className="flex items-center gap-3">
              {Icon && <Icon className="text-white text-2xl" />}

              <h3 className=" text-white font-semibold text-base md:text-lg ">
                {name}
              </h3>
            </div>

            {/* Nivel */}

            <div className="mt-4">
              <p className="text-white/50 text-xs uppercase tracking-wider">
                Level
              </p>

              <p className="mt-1 text-white text-sm font-medium">{level}</p>
            </div>

            {/* Proyectos */}

            {projects.length > 0 && (
              <div className="mt-4">
                <p className="text-white/50 text-xs uppercase tracking-wider">
                  Projects
                </p>

                <ul className="mt-2 space-y-1">
                  {projects
                    .filter((project) => project.trim() !== "")
                    .map((project) => (
                      <li
                        key={project}
                        className=" text-white/80 text-xs md:text-sm "
                      >
                        • {project}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </motion.div>,
          document.body,
        )}
    </>
  );
};

export default Tool;
