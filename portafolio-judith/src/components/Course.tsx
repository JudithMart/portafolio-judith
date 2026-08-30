import React from "react";


interface ProjectsProps {
  image?: string;
  pdf?: string;
  title?: string;
}

const Course: React.FC<ProjectsProps> = ({
  image,
  pdf,
  title,
}) => {
  const handleOpenPdf = () => {
    if (!pdf) return;
    window.open(pdf, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleOpenPdf}
      disabled={!pdf}
      className=" relative flex flex-col  cursor-pointer h-40 w-36 sm:h-52 sm:w-56 md:h-40 md:w-72 group disabled:cursor-default"
    >
      {/* =========================
          IMAGEN
      ========================== */}
      <img
        src={image || "/Projects/BiCitas.png"}
        alt={title || "Project"}
        className=" object-contain transition-all duration-300  md:group-hover:scale-105 
          h-full
          w-full"
      />

      {/* =========================
          TITULO NORMAL
      ========================== */}
      <p className=" text-center text-xs  sm:text-sm md:text-base font-bold uppercase text-gray-300  duration-300 ">
        {title}
      </p>
    </button>
  );
};

export default Course;
