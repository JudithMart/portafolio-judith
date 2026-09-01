import { Link } from "react-router-dom";

interface ExperienceProps {
  company: string;
  role: string;
  date: string;
  description: string[];
  link?: string;
  doc?: string;
}

const Experience: React.FC<ExperienceProps> = ({
  company,
  link,
  doc,
  role,
  date,
  description,
}) => {
  return (
    <article className="border-l border-[#6C958D]/40 pl-5">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
        <div>
          {doc ? (
            <Link to={doc} className="text-lg font-semibold text-gray-200 hover:underline">
              {company}
            </Link>
          ) : link ? (
            <a href={link} className="hover:underline">
              <h3 className="text-lg font-semibold text-gray-200">{company}</h3>
            </a>
          ) : (
            <h3 className="text-lg font-semibold text-gray-200">{company}</h3>
          )}

          <p className="text-[#8FC9BD] text-sm">{role}</p>
        </div>

        <span className="text-xs md:text-sm text-gray-500">{date}</span>
      </div>

      <ul className="mt-4 space-y-2">
        {description.map((item, index) => (
          <li
            key={index}
            className="text-sm md:text-base leading-6 text-gray-400"
          >
            <span className="text-[#8FC9BD] mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};
export default Experience;
