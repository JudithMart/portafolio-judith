
import React from "react";
import { Link } from "react-router-dom";

interface ProjectsProps {
    image?: string;
    link?: string;
    title?: string;
}

const ButtonProjects: React.FC<ProjectsProps> = ({ image, link, title }) => {
    const href = link || "/";
    const isExternal = /^(https?:)?\/\//i.test(href);

    const content = (
        <div className="relative h-36 w-36 sm:h-44 sm:w-44 md:h-48 md:w-56 ">
            <img
                src={image || "/Projects/BiCitas.png"}
                alt={title || "Project"}
                className="absolute inset-0 h-full w-full object-contain"
            />
        </div>
    );

    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="relative block"
            >
                {content}
            </a>
        );
    }

    return (
        <Link to={href} className="relative block">
            {content}
        </Link>
    );
};

export default ButtonProjects;