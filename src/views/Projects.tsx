import React, { useState } from "react";
import Nav from "../components/Nav";
import ProjectTopics from "../components/ProjectTopics";
import ProjectWell from "../components/ProjectWell";

// Define the type for project topic
interface ProjectTopicData {
  id: number;
  title: string;
  projectlinks: { projectname: string; description: string }[];
}

const projectTopicsData: ProjectTopicData[] = [
  {
    id: 1,
    title: "Web Development",
    projectlinks: [
      {
        projectname: "Asynce Audio App",
        description: "Simple MP3 playing app.",
      },
      {
        projectname: "FHU Faculty Trading Cards",
        description: "Webpage carousel of FHU faculty trading cards",
      },
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    projectlinks: [
      {
        projectname: "MOGI",
        description: "Mobile app team project based on the game priorities.",
      },
    ],
  },
  {
    id: 3,
    title: "Machine Learning",
    projectlinks: [
      {
        projectname: "Fake News Detector",
        description:
          "Machine learning project that detects whether a news article is fake.",
      },
    ],
  },
];

const Projects: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<ProjectTopicData | null>(
    null
  );
  const [showProjectWell, setShowProjectWell] = useState<boolean>(false);

  const handleTopicClick = (topic: ProjectTopicData) => {
    if (selectedTopic === topic) {
      setShowProjectWell((prevState) => !prevState); // Toggle project well visibility if the same topic is clicked again
    } else {
      setSelectedTopic(topic);
      setShowProjectWell(true);
    }
  };

  return (
    <div className="min-h-[101vh] pb-10 bg-[#393F40] text-white font-poppins flex flex-col items-center gap-10">
      <Nav />
      <h1 className="text-4xl">Topics</h1>
      <ProjectTopics
        topics={projectTopicsData}
        onTopicClick={handleTopicClick}
      />
      {showProjectWell && selectedTopic && (
        <ProjectWell content={selectedTopic.projectlinks} />
      )}
    </div>
  );
};

export default Projects;
