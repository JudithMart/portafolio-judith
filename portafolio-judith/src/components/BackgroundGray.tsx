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

        h-[400px]
        sm:h-[453px]

        w-full

        rounded-3xl

        bg-gray-100/20
        backdrop-blur-lg

        border
        border-white/10

        shadow-lg
        shadow-black/40

        flex
        flex-col
        items-center
        justify-start

        pt-24
        sm:pt-28

        text-center

        overflow-visible

        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default BackgroundGray;