import React from "react";
import ProjectTopic from "./ProjectTopic";
import { Link } from "react-scroll";

// Define the type for project topic
interface ProjectTopicData {
  id: number;
  title: string;
  projectlinks: { projectname: string; description: string; link: string }[];
}

interface ProjectTopicsProps {
  topics: ProjectTopicData[];
  onTopicClick: (topic: ProjectTopicData) => void;
}

const ProjectTopics: React.FC<ProjectTopicsProps> = ({
  topics,
  onTopicClick,
}) => {
  return (
    <div className="my-20">
      <div className="md:text-4xl text-2xl text-center">Topics</div>
      <div className="flex md:flex-row flex-col md:gap-16 md:m-10 m-5 gap-5">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            to="ProjectWell"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => onTopicClick(topic)}
          >
            <ProjectTopic title={topic.title} onClick={() => {}} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectTopics;
