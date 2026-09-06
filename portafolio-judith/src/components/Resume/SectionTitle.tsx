interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="w-2 h-2 rotate-45 bg-[#6C958D]" />

      <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;