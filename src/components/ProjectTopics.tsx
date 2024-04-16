import React from 'react';
import ProjectTopic from './ProjectTopic';

// Define the type for project topic
interface ProjectTopicData {
  id: number;
  title: string;
  projectlinks: { projectname: string; description: string }[];
}

interface ProjectTopicsProps {
  topics: ProjectTopicData[];
  onTopicClick: (topic: ProjectTopicData) => void;
}

const ProjectTopics: React.FC<ProjectTopicsProps> = ({ topics, onTopicClick }) => {
  return (
    <div className='flex flex-row gap-16'>
      {topics.map(topic => (
        <ProjectTopic
          key={topic.id}
          title={topic.title}
          onClick={() => onTopicClick(topic)}
        />
      ))}
    </div>
  );
};

export default ProjectTopics;
