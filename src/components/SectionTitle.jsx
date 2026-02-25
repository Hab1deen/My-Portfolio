export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16 reveal flex flex-col items-center">
      {subtitle && (
        <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold font-outfit text-slate-800 dark:text-white relative inline-block">
        {title}
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-accent to-focus rounded-full" />
      </h2>
    </div>
  );
}
