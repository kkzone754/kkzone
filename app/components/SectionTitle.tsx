type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}