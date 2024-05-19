import React from "react";

interface ProjectTopicProps {
  title: string;
  onClick: () => void;
}

const ProjectTopic: React.FC<ProjectTopicProps> = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col lg:w-[400px]  lg:h-[200px] md:w-[200px] md:h-[150px] w-[175px] h-[100px] border rounded-lg items-center justify-center lg:text-3xl md:text-2xl text-xl hover:bg-white hover:text-[#393F40] cursor-pointer text-center p-3"
    >
      <p>{title}</p>
    </div>
  );
};

export default ProjectTopic;
