// ButtonContainerComponent.js
import React from 'react';
import ProjectTopic from './ProjectTopic';

const ProjectTopics = () => {
  return (
    <div className='flex flex-row gap-16'>
      <ProjectTopic topicLineOne="Topic 1" topicLineTwo="Topic 1 Details" onClick={() => {}} />
      <ProjectTopic topicLineOne="Topic 2" topicLineTwo="Topic 2 Details" onClick={() => {}} />
      <ProjectTopic topicLineOne="Topic 3" topicLineTwo="Topic 3 Details" onClick={() => {}} />
    </div>
  );
};

export default ProjectTopics;
