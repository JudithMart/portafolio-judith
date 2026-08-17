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
      className={`p-6 sm:p-10 h-auto sm:h-[453px] w-96  md:w-full  max-w-3xl  rounded-3xl bg-[#C7C8C9] 
        backdrop-blur-lg shadow-lg shadow-stone-500 flex flex-col items-center justify-center text-center ${className}`}
    >
      {children}
    </div>
  );
};

export default BackgroundGray;
