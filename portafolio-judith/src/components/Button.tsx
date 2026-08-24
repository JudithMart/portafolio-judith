import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface ButtonProps {
  texto: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ texto, link }) => {
  return (
    <Link to={link}>
      <motion.button
        layoutId={texto === "PROJECTS" ? "projects-button" : undefined}
        whileHover={{
          scale: 1.08,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="
          h-10
          w-24
          md:h-12
          md:w-32
          bg-secondary
          rounded-2xl
          flex
          items-center
          justify-center
          relative
          shadow-2xl
          shadow-black
          
        "
      >
        <span className="text-primary text-sm md:text-base font-semibold">
          {texto}
        </span>
      </motion.button>
    </Link>
  );
};

export default Button;