import React from "react";

import Project_Pasitos from "../components/Project_Pasitos";

const Projects_pasitos: React.FC = () => {

  return (
    <section className=" flex  justify-center px-5 pt-36 md:pt-32 pb-32">
      <div
        className="relative z-10  flex max-w-7xl rounded-3xl flex-col
        bg-white/[0.15] h-full 
        backdrop-blur-2xl
        border border-white/[0.14]
        shadow-[0_8px_40px_rgba(0,0,0,0.45)] px-5 py-10"
      >
        {/* Línea animada alrededor de la card */}
        <svg
          className="absolute -inset-[3px] w-[calc(100%+6px)] h-[calc(100%+6px)] pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <rect
            x="1"
            y="1"
            width="98"
            height="98"
            rx="5"
            fill="none"
            stroke="#8FC9BD"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeDasharray="40 85"
            className="animated-border"
          />
        </svg>
        {/*PROJECT TITLE AND DESCRIPTION*/}
        <Project_Pasitos />
      </div>
    </section>
  );
};

export default Projects_pasitos;
