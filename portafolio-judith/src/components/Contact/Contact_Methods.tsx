import { Github, Linkedin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

interface Contact_MethodsProps {
  name?: string;
  link?: string;
  hover?: string;
  onClick?: () => void;
}

const technologyIcons: Record<string, React.ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: FaInstagram,
  Whatsapp: FaWhatsapp,
  Email: SiGmail,
};

const hoverColors: Record<string, string> = {
  "bg-red-500": "#ef4444",
  "bg-blue-500": "#3b82f6",
  "bg-black": "#000000",
  "bg-pink-500": "#ec4899",
  "bg-green-500": "#22c55e",
};

const Contact_Methods: React.FC<Contact_MethodsProps> = ({
  name,
  link,
  hover,
  onClick,
}) => {
  const Icon = technologyIcons[name];
  const hoverColor = hover ? (hoverColors[hover] ?? "#ffffff") : "#ffffff";

  return (
    <article>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative z-10 flex items-center justify-center w-8 h-8 md:h-14 md:w-14 
        rounded-2xl bg-[#6C958D] shadow-md cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-secondary/50"
          style={{ ["--hover-color" as string]: hoverColor }}
        >
          {Icon && (
            <Icon className="text-white text-xl md:text-3xl transition-all duration-300 ease-out group-hover:text-[var(--hover-color)] group-hover:scale-110" />
          )}
        </a>
      ) : (
        <button
          onClick={onClick}
          className="group relative z-10 flex items-center justify-center w-8 h-8 md:h-14 md:w-14 
        rounded-2xl bg-[#6C958D] shadow-md cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-secondary/50"
          style={{ ["--hover-color" as string]: hoverColor }}
        >
          {" "}
          {Icon && (
            <Icon className="text-white text-xl md:text-3xl transition-all duration-300 ease-out group-hover:text-[var(--hover-color)] group-hover:scale-110" />
          )}
        </button>
      )}
    </article>
  );
};
export default Contact_Methods;
