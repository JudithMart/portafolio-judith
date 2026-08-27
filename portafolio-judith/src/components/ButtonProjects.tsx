import React from "react";
import { Link } from "react-router-dom";

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
  const href = demo || "/";

  return (
    <div className="flex flex-col  ">
      <div className="  h-32 w-36 flex-col sm:h-44 sm:w-44 md:h-48 md:w-56">
        <img
          src={image || "/Projects/BiCitas.png"}
          alt={title || "Project"}
          className="h-full w-full object-contain"
        />
      </div>

      <div>
        <p className="text-center text-base font-bold uppercase  text-gray-300">{title}</p>
      </div>
    </div>
  );
};

export default ButtonProjects;
