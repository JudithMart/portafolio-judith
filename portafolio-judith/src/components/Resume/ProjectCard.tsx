interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  technologies: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  description,
  technologies,
  link,
}) => {
  return (
    <article
      className=" p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-[#6C958D]/40 transition-all duration-300">
      <div className="flex justify-between gap-3">
        {link ? (
          <a href={link} target="_blank" className="hover:underline">
            <h3 className="text-gray-200 font-semibold">{title}</h3>
          </a>
        ) : (
          <h3 className="text-gray-200 font-semibold">{title}</h3>
        )}

        <span className="text-xs text-gray-500 whitespace-nowrap">{date}</span>
      </div>

      <p className="mt-3 text-sm text-gray-400 leading-6">{description}</p>

      <p className="mt-4 text-xs text-[#8FC9BD]">{technologies}</p>
    </article>
  );
};

export default ProjectCard;
