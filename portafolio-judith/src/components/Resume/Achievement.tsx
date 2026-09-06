interface AchievementProps {
  year: string;
  text: string;
}

const Achievement: React.FC<AchievementProps> = ({
  year,
  text,
}) => {
  return (
    <div className="flex gap-4">
      <span className="text-[#8FC9BD] font-semibold text-sm">
        {year}
      </span>

      <p className="text-sm text-gray-400">
        {text}
      </p>
    </div>
  );
};

export default Achievement;