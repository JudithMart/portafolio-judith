import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiSupabase,
  SiMapbox,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiVuedotjs,
  SiSanity,
  SiUnity,
  SiExpress,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { IoDocumentsOutline } from "react-icons/io5";

interface ProjectsProps {
  image?: string;
  demo?: string;
  github?: string;
  doc?: string;
  description?: string;
  title?: string;
  technologies?: string[];
}

const technologyIcons: Record<string, React.ElementType> = {
  JavaScript: SiJavascript,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  Vite: SiVite,
  Supabase: SiSupabase,
  Mapbox: SiMapbox,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Nuxt: SiNuxt,
  "Nuxt.js": SiNuxt,
  "Vue.js": SiVuedotjs,
  "Sanity CMS": SiSanity,
  Unity: SiUnity,
  "C#": TbBrandCSharp,
  Express: SiExpress,
};


const ButtonProjects: React.FC<ProjectsProps> = ({
  image,
  demo,
  github,
  doc,
  description,
  title,
  technologies,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <article
     onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
       className={`relative flex flex-col cursor-pointer h-44 w-36 sm:h-52 sm:w-56 md:h-52 md:w-72 group
        ${isOpen ? "z-50" : "z-0"}`}
    >
      {/* =========================
          IMAGEN
      ========================== */}
      <img
        src={image || "/Projects/BiCitas.png"}
        alt={title || "Project"}
        className=" object-contain transition-all duration-300  md:group-hover:scale-105 md:group-hover:opacity-0
          h-full
          w-full"
      />

      {/* =========================
          TITULO NORMAL
      ========================== */}
      <p className=" text-center text-xs  sm:text-sm md:text-base font-bold uppercase text-gray-300  duration-300 md:group-hover:opacity-0">
        {title}
      </p>

      {/* LINKS  FOR MOBILE*/}
      <div className=" mt-2  md:hidden lg:hidden flex items-center justify-center gap-4 ">
        {/* LIVE */}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className=" flex  items-center gap-1 text-xs font-thin text-white/80 transition-colors hover:text-[#8FC9BD] "
          >
            <ExternalLink size={14} />
            Live
          </a>
        )}

        {/* GITHUB */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className=" flex items-center gap-1 font-thin text-xs text-white/80 transition-colors hover:text-[#8FC9BD]"
          >
            <Github size={14} />
            GitHub
          </a>
        )}

         {doc && (
            <Link
              to={doc}
              onClick={(e) => e.stopPropagation()}
              className=" flex items-center gap-2 font-thin text-xs text-white hover:text-[#8FC9BD]"
            >
              <IoDocumentsOutline size={14} />
              Details
            </Link>
          )}
      </div>


      {/* =========================
          HOVER CARD
      ========================== */}
      <div className={`absolute invisible md:visible z-50 min-h-[280px] rounded-[2rem] bg-secondary/90 backdrop-blur-sm
        p-4 flex flex-col transition-all duration-300 ease-out overflow-hidden
        ${isOpen ? "opacity-100 scale-100 pointer-events-auto" 
          : "opacity-0 scale-95 pointer-events-none"}`}> 
      
        {/* TITULO */}
        <h3 className=" text-center text-sm sm:text-base md:text-lg font-bold uppercase leading-tight text-white">
          {title}
        </h3>

        {/* DESCRIPCIÓN */}
        <p className="mt-2 text-sm leading-relaxed text-white/75">
          {description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="mt-2">
          <p className="text-sm font-medium text-[#5E5E5C] ">Technologies</p>

          <div className="flex items-center gap-3 mt-2 flex-wrap">
            {technologies?.map((tech) => {
              const Icon = technologyIcons[tech];

              if (!Icon) return null;

              return (
                <div
                  key={tech}
                  title={tech}
                  className="text-xl text-white font-light transition-transform duration-200 hover:scale-110"
                >
                  <Icon />
                </div>
              );
            })}
          </div>
        </div>

        {/* LINKS */}
        <div className=" mt-auto flex items-center justify-center gap-8">
          {/* LIVE */}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className=" flex items-center gap-2 text-sm font-thin text-white hover:text-[#8FC9BD]"
            >
              <ExternalLink size={18} />
              Live
            </a>
          )}

          {/* GITHUB */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className=" flex items-center gap-2 font-thin text-sm text-white hover:text-[#8FC9BD]"
            >
              <Github size={19} />
              GitHub
            </a>
          )}

          {doc && (
            <Link
              to={doc}
              onClick={(e) => e.stopPropagation()}
              className=" flex items-center gap-2 font-thin text-sm text-white hover:text-[#8FC9BD]"
            >
              <IoDocumentsOutline size={19} />
              Details
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ButtonProjects;
