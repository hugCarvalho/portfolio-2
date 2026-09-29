import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion.create(Link);

const ProjectListLayout = ({
  name,
  description,
  startDate,
  endDate,
  demoLink,
  techs
}) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target="_blank"
      className="text-sm md:text-base flex flex-col w-full relative rounded-lg overflow-hidden px-3 py-4 md:p-6 custom-bg transition-colors"
    >
      {/* Top Row: Name, Dashed Line, Dates */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2 min-w-0">
          <h2 className="text-foreground font-medium truncate">{name}</h2>
<ExternalLink className="h-4 w-4 text-gray-400" />
          {description && (
            <p className="text-muted hidden sm:inline-block truncate">
              {description}
            </p>
          )}
        </div>
        <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />

        <p className="text-muted text-xs sm:text-sm whitespace-nowrap">
          {startDate ? startDate : ""}
          {endDate ? ` - ${endDate}` : ""}
        </p>
      </div>

      {/* Bottom Row: Tech Stack Tags */}
      {techs.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 mt-2">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-0.5 rounded bg-muted/10 text-muted font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </ProjectLink>
  );
};

export default ProjectListLayout;
