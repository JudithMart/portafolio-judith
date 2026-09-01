interface SkillProps {
  title: string;
  skills: string;
}

const Skill: React.FC<SkillProps> = ({
  title,
  skills,
}) => {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-300">
        {title}
      </p>

      <p className="mt-1 text-sm text-gray-500 leading-6">
        {skills}
      </p>
    </div>
  );
};

export default Skill;