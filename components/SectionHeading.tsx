import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  title: string;
  className?: string;
};

export function SectionHeading({ index, title, className = "" }: SectionHeadingProps) {
  return (
    <Reveal className={`flex items-center gap-4 ${className}`}>
      <span className="eyebrow">{index}</span>
      <span className="h-px flex-1 bg-line" />
      <h2 className="eyebrow text-ink">{title}</h2>
    </Reveal>
  );
}
