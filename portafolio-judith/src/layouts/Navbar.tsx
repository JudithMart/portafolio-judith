import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // iconos del menú hamburguesa

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-[3px] w-full p-4 rounded-lg z-50">
            <div className="container mx-auto flex items-center  px-5 sm:px-14 lg:px-40 py-4">
                {/* Logo/Home */}
                <a href="/" className="flex items-center">
                    <img
                        src="avatarYo/ImgYo.png"
                        alt="Agui Martínez"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg cursor-pointer hover:scale-110 
            transition-transform duration-300"
                    />
                </a>

                {/* Links en pantallas grandes */}
                <div className="hidden md:flex flex-col items-center ml-6 mt-6">
                    <div className="flex space-x-12 text-white font-medium text-xl ">
                        <a href="/about" className="hover:text-[#6C958D] transition-colors">About me</a>
                        <a href="#contact" className="hover:text-[#6C958D] transition-colors">Contact</a>
                        <a href="#resume" className="hover:text-[#6C958D] transition-colors">Resume</a>
                    </div>
                    {/* Línea decorativa larga */}
                    <div className="mt-4 h-[1px] w-[185%] bg-white rounded-full " />
                </div>

                {/* Botón menú hamburguesa (solo móvil) */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú móvil */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-[#67b1a26e] backdrop-blur-md rounded-lg mx-4 mt-2 py-4 space-y-4
                 text-white font-medium">
                    <a
                        href="#about"
                        className="hover:text-gray-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        About me
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-gray-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </a>
                    <a
                        href="#resume"
                        className="hover:text-gray-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

