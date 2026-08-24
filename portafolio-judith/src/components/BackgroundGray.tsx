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
      className={`
        relative
        z-10

        p-6
        sm:p-10

        h-[300px]
        sm:h-[453px]

        max-w-7xl

        rounded-3xl

      bg-white/[0.15]
        backdrop-blur-2xl
        border border-white/[0.14]
        shadow-[0_8px_40px_rgba(0,0,0,0.45)]

        flex
        flex-col
        items-center
        justify-start

        pt-0
        sm:pt-28

        text-center

        overflow-visible

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
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundGray;
