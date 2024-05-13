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
    <div className="border md:w-[800px]  rounded-lg grid grid-cols-2 grid-rows gap-6 md:p-16 p-5 m-10">
      {content.map((link, index) => (
        <div key={index} className="col-span-2">
          <a href={link.link} target="_blank" rel="noopener noreferrer" className="md:text-4xl text-xl hover:text-[#CCCCCC]">{link.projectname}</a>
          <p className="md:text-2xl text-lg">{link.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectWell;
