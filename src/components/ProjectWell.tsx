// ProjectWell.tsx
import React from "react";

interface ProjectLink {
  projectname: string;
  description: string;
  link: string
}

interface ProjectWellProps {
  content: ProjectLink[];
}

const ProjectWell: React.FC<ProjectWellProps> = ({ content }) => {
  return (
    <div className="border w-[800px] min-h-[400px] rounded-lg grid grid-cols-2 grid-rows gap-6 p-16">
      {content.map((link, index) => (
        <div key={index} className="col-span-2">
          <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-4xl">{link.projectname}</a>
          <p className="text-2xl">{link.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectWell;
