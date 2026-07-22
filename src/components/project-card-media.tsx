import { Rocket } from "lucide-react";

type ProjectCardMediaProps = {
  color: string;
  category: string;
  imageSrc?: string;
  title: string;
};

export function ProjectCardMedia({ color, category, imageSrc, title }: ProjectCardMediaProps) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${color}`}>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Rocket className="h-16 w-16 text-white/40 transition-transform duration-700 group-hover:scale-110" />
          </div>
        </>
      )}
      <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {category}
      </span>
    </div>
  );
}
