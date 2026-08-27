import React from "react";

import { Github, ExternalLink } from "lucide-react";

interface ProjectsProps {
  image?: string;
  demo?: string;
  github?: string;
  description?: string;
  title?: string;
}

const ButtonProjects: React.FC<ProjectsProps> = ({
  image,
  demo,
  github,
  description,
  title,
}) => {
  return (
    <article className="flex flex-col  group relative cursor-pointer duration-300 hover:-translate-y-2
     h-32 w-36 sm:h-44 sm:w-44 md:h-48 md:w-56 ">
      
        <img
          src={image || "/Projects/BiCitas.png"}
          alt={title || "Project"}
          className="h-full w-full object-contain group-hover:opacity-40  group-hover:scale-105"
        />
       <p className="text-center text-xs mb:text-base lg:text-base font-bold uppercase  text-gray-300 group-hover:opacity-40">
          {title}
        </p>
    

      <div className=" absolute inset-0 p-5 flex flex-col items-center justify-center opacity-0 transition-all duration-300 ease-out  rounded-lg
       group-hover:opacity-100 group-hover:bg-secondary/90">
       <p className="text-center text-xs mb:text-base lg:text-base font-bold uppercase text-white">
          {title}
        </p>
        <p className="mt-4 text-white/70 text-xs mb:text-base lg:text-base leading-relaxed  font-semibold">{description}</p>
        {/* LINKS */}
          <div
            className="
              flex
              items-start
              gap-3
              mt-4
            "
          >

            {/* DEMO */}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                  flex
                  items-center
                  gap-1.5

                  text-xs
                  font-medium
                  text-gray-600

                  hover:text-[#8FC9BD]

                  transition-colors
                "
              >
                <ExternalLink size={13} />
                Live
              </a>
            )}

            {/* GITHUB */}
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                flex
                items-center
                gap-1.5

                text-xs
                font-medium
                text-gray-700

                hover:text-[#8FC9BD]

                transition-colors
              "
            >
              <Github size={13} />
              GitHub
            </a>
 </div>
      </div>
    </article>
  );
};

export default ButtonProjects;
