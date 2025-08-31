import type React from "react";

interface ArrowLineProps {


}




const ArrowLine: React.FC<ArrowLineProps> = () => (
    <div className="flex items-center w-full">
        <div className={`h-1 w-48 sm:w-80 md:w-[400px] bg-[#6C958D] rounded-full flex items-center relative transition-all`}>
            {/* Flecha izquierda */}
            <div className="absolute left-0 -ml-2 w-2 h-2 sm:w-3 sm:h-3 bg-[#6C958D] rotate-45 rounded-sm"></div>
            {/* Flecha derecha */}
            <div className="absolute right-0 -mr-2 w-2 h-2 sm:w-3 sm:h-3 bg-[#6C958D] -rotate-45 rounded-sm"></div>
        </div>
    </div>
);

export default ArrowLine;