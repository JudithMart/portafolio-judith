import React from "react";

type BackgroundGrayProps = {
  children?: React.ReactNode;
  className?: string;
};

const BackgroundGray: React.FC<BackgroundGrayProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={` relative flex justify-center items-center max-w-7xl rounded-3xl overflow-visible
        bg-white/[0.15]
        backdrop-blur-2xl
        border border-white/[0.14]
        shadow-[0_8px_40px_rgba(0,0,0,0.45)]

        ${className}
      `}
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

      {/* Contenido */}
      <div className="relative ">
        {children}
      </div>
    </div>
  );
};

export default BackgroundGray;
