import React from "react";

interface ProjectTopicProps {
  title: string;
  onClick: () => void;
}

const ProjectTopic: React.FC<ProjectTopicProps> = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col md:w-[290px] border md:h-[200px] w-[175px] h-[100px] rounded-lg items-center justify-center md:text-3xl text-xl hover:bg-white hover:text-[#393F40] cursor-pointer text-center p-3"
    >
      <p>{title}</p>
    </div>
  );
};

export default ProjectTopic;
