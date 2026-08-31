import React from "react";
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
import {
  BiLogoCPlusPlus,
  BiLogoPostgresql,
} from "react-icons/bi";

import {
  FaFigma,
  FaPython,
  FaJava,
  FaCss3Alt,
} from "react-icons/fa";

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

const Tool: React.FC<ToolProps> = ({
  name,
  level,
  projects,
}) => {
  const Icon = technologyIcons[name];

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        relative
        z-10
        flex
        items-center
        justify-center

        h-32
        w-32

        sm:h-36
        sm:w-36

        md:h-40
        md:w-52

        group
      "
    >
      {/* =========================
          TOOL
      ========================== */}

      <motion.div
        whileHover={{
          y: -5,
          scale: 1.05,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="
          relative
          z-30

          flex
          items-center
          justify-center

          w-10
          h-10
          md:h-16
          md:w-16

          rounded-2xl
          bg-[#6C958D]

          shadow-lg
          cursor-pointer

          transition-shadow
          duration-300

          group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        "
      >
        {Icon && (
          <Icon className="text-white text-4xl md:text-5xl" />
        )}
      </motion.div>

      {/* =========================
          HOVER CARD
      ========================== */}

      <div
        className="
          absolute
          z-50

          left-1/2
         

          -translate-x-1/2

          w-64
          md:w-72

          rounded-3xl

          bg-[#6C958D]/70
          backdrop-blur-md

          border
          border-white/10

          p-5

          opacity-0
          invisible
          scale-95

          pointer-events-none

          transition-all
          duration-300
          ease-out

          group-hover:opacity-100
          group-hover:visible
          group-hover:scale-100
          group-hover:pointer-events-auto
        "
      >
        {/* Nombre */}

        <div className="flex items-center gap-3">
          {Icon && (
            <Icon className="text-white text-2xl" />
          )}

          <h3
            className="
              text-white
              font-semibold
              text-base
              md:text-lg
            "
          >
            {name}
          </h3>
        </div>

        {/* Nivel */}

        <div className="mt-4">
          <p className="text-white/50 text-xs uppercase tracking-wider">
            Level
          </p>

          <p className="mt-1 text-white text-sm font-medium">
            {level}
          </p>
        </div>

        {/* Número de proyectos */}

        <div className="mt-4">
          <p className="text-white/50 text-xs uppercase tracking-wider">
            Used in
          </p>

          <p className="mt-1 text-white text-sm font-medium">
            {projects.length}{" "}
            {projects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        {/* Proyectos */}

        {projects.length > 0 && (
          <div className="mt-4">
            <p className="text-white/50 text-xs uppercase tracking-wider">
              Projects
            </p>

            <ul className="mt-2 space-y-1">
              {projects.map((project) => (
                <li
                  key={project}
                  className="
                    text-white/80
                    text-xs
                    md:text-sm
                  "
                >
                  • {project}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default Tool;