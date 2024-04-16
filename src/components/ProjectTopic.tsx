import React from 'react';

interface ProjectTopicProps {
  title: string;
  onClick: () => void;
}

const ProjectTopic: React.FC<ProjectTopicProps> = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-col w-[290px] border h-[200px] rounded-lg items-center justify-center text-3xl hover:bg-white hover:text-[#393F40] cursor-pointer text-center">
      <p>{title}</p>
    </div>
  );
};

export default ProjectTopic;
