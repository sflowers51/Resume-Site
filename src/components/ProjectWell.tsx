// ProjectWell.tsx
import React from "react";

interface ProjectLink {
  projectname: string;
  description: string;
  link: string;
  demo: string;
}

interface ProjectWellProps {
  content: ProjectLink[];
}

const ProjectWell: React.FC<ProjectWellProps> = ({ content }) => {
  return (
    <div className="lg:w-[800px] md:w-[600px] w-[400px] border rounded-lg grid grid-cols-2 grid-rows gap-y-10  lg:p-12 md:p-10 p-5 m-10">
      {content.map((link, index) => (
        <div key={index} className="col-span-2">
          <a href={link.link} target="_blank" rel="noopener noreferrer" className="lg:text-4xl md:text-2xl text-xl hover:text-[#CCCCCC]">{link.projectname}</a>
          <a href={link.demo} target="_blank" rel="noopener noreferrer" className="lg:text-xl md:text-lg text-md px-5 hover:text-[#CCCCCC] hover:underline">demo</a>
          <p className="md:text-2xl text-lg">{link.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectWell;
