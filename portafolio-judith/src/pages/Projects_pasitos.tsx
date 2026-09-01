import React from "react";
import { motion } from "motion/react";
import Project_Pasitos from "../components/Project_Pasitos";

const Projects_pasitos: React.FC = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const galleryItem = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section className="min-h-screen flex  justify-center pt-44 px-5 md:px-20 ">
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
