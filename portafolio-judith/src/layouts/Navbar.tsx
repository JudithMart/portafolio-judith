import React, { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname === "/about") {
      setActiveSection("about");
      return;
    }

    if (pathname === "/resume") {
      setActiveSection("resume");
      return;
    }

    if (pathname === "/contact") {
      setActiveSection("contact");
      return;
    }

    // Si estamos en la página principal
    const sections = ["resume", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    // Si no existen las secciones todavía
    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-20% 0px -40% 0px",
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Navegación
  |--------------------------------------------------------------------------
  */

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <nav className="  fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 ">
      {/* ================================================================
          NAVBAR
      ================================================================= */}

      <div className=" w-full flex items-center justify-between px-5 py-3 rounded-2xl bg-gray-100/30 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.20)]  ">
        <a
          href="/"
          className=" text-white italic text-xl hover:opacity-70 transition-opacity"
        >
          Agui <span className="font-bold text-[#B4CBC1]">;</span>
        </a>

        {/* ==============================================================
            LINKS DESKTOP
        =============================================================== */}

        <div className="hidden md:flex items-center gap-8">
          {/* ABOUT */}

          <a
            href="/about"
            onClick={() => handleSectionClick("about")}
            className="group relative py-2 text-white/70 text-base tracking-wider hover:text-white transition-colors duration-300"
          >
            About
            {/* Bolita */}
            <span
              className={` absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-2 h-2 rounded-full bg-[#B4CBC1]  transition-all duration-300 ease-out
                ${
                  activeSection === "about"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                }
              `}
            />
          </a>

          {/* RESUME */}

          <a
            href="/resume"
            onClick={() => handleSectionClick("resume")}
            className=" group relative py-2 text-white/70 text-base tracking-wider hover:text-white transition-colors duration-300"
          >
            Resume
            {/* Bolita */}
            <span
              className={` absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-2 h-2 rounded-full bg-[#B4CBC1] transition-all duration-30  ease-out
                ${
                  activeSection === "resume"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                }
              `}
            />
          </a>

          {/* CONTACT */}

          <a
            href="/contact"
            onClick={() => handleSectionClick("contact")}
            className=" group relative py-2 text-white/70 text-base tracking-wider hover:text-white transition-colors  duration-300 "
          >
            Contact
            {/* Bolita */}
            <span
              className={`  absolute  left-1/2  -translate-x-1/2  -bottom-0.5 w-2  h-2 rounded-full bg-[#B4CBC1] transition-all  duration-300  ease-out

                ${
                  activeSection === "contact"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                }
              `}
            />
          </a>
        </div>

        {/* ==============================================================
            ACCIONES
        =============================================================== */}

        <div className="hidden md:flex items-center gap-2">
          {/* GitHub */}

          <a
            href="https://github.com/JudithMart"
            aria-label="GitHub"
            className=" w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.08] border border-white/[0.08] text-black
             hover:bg-white/[0.15] hover:text-white  hover:-translate-y-0.5 transition-all duration-300"
          >
            <Github size={16} />
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/aguimartinezg"
            aria-label="LinkedIn"
            className=" w-9 h-9  flex items-center justify-center rounded-lg bg-white/[0.08] border border-white/[0.08] text-[#0A66C2]
              hover:bg-white/[0.15] hover:text-white hover:-translate-y-0.5 transition-all duration-300"
          >
            <Linkedin size={16} />
          </a>
        </div>

        {/* ==============================================================
            MOBILE BUTTON
        =============================================================== */}

        <button
          className=" md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================================================================
          MOBILE MENU
      ================================================================= */}

      {isOpen && (
        <div
          className=" md:hidden mt-2 p-5 rounded-2xl bg-black/40  backdrop-blur-xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.25)]
           flex flex-col gap-5 text-white "
        >
          {/* ABOUT */}

          <a
            href="/about"
            onClick={() => handleSectionClick("about")}
            className="flex items-center justify-between"
          >
            <span
              className={
                activeSection === "about" ? "text-white " : "text-white/70"
              }
            >
              About
            </span>
            <span
              className={` w-3 h-3 rounded-full bg-secondary  transition-all duration-300
                ${
                  activeSection === "about"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }
              `}
            />
          </a>

          {/* RESUME */}

          <a
            href="/resume"
            onClick={() => handleSectionClick("resume")}
            className="flex items-center justify-between"
          >
            <span
              className={
                activeSection === "resume" ? "text-white" : "text-white/70"
              }
            >
              Resume
            </span>

            <span
              className={` w-3 h-3 rounded-full bg-secondary transition-all duration-300
                ${
                  activeSection === "resume"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }
              `}
            />
          </a>

          {/* CONTACT */}

          <a
            href="/contact"
            onClick={() => handleSectionClick("contact")}
            className="flex items-center justify-between"
          >
            <span
              className={
                activeSection === "contact" ? "text-white" : "text-white/70"
              }
            >
              Contact
            </span>

            <span
              className={`  w-3 h-3 rounded-full bg-secondary transition-all duration-300
               ${
                  activeSection === "contact"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }
              `}
            />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
