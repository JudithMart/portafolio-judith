import React from "react";

const Projects_pasitos: React.FC = () => {
  return (
    <section className="min-h-screen flex  justify-center pt-44 px-5 md:px-20 ">
      <div
        className="relative z-10  flex max-w-7xl rounded-3xl 
        bg-white/[0.15] h-full overflow-x-hidden overflow-y-auto
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
<div className="max-w-4xl text-center">
  <h1 className="text-gray-200 text-2xl md:text-4xl font-semibold tracking-wider">
    PASITOS — VIDEO GAME
  </h1>

  <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
    Pasitos is a 3D therapeutic video game developed as part of the
    RehabilyTec suite to support motor rehabilitation for children at
    CRIT Michoacán. The game transforms physical therapy exercises into
    an interactive experience where patients control the game using
    real body movements.
  </p>

  <p className="mt-4 text-[#8FC9BD] text-sm md:text-base font-semibold">
    Unity · C# · Orbbec Astra · Nuitrack
  </p>
</div>
<div className="w-full max-w-4xl mt-10">
  <h2 className="text-gray-200 text-xl md:text-2xl font-semibold">
    Presented at CRIT Michoacán
  </h2>

  <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
    <video
      controls
      className="w-full h-auto"
    >
      <source
        src="/Projects/Pasitos/presentation.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
      </div>
    </section>
  );
};

export default Projects_pasitos;
