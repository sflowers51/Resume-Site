type ProjectTopicProps = {
  topicLineOne: string;
  topicLineTwo: string;
  onClick: () => void;
};

const ProjectTopic = ({ topicLineOne, topicLineTwo, onClick }: ProjectTopicProps) => {
  return (
    <div onClick={onClick} className="flex flex-col w-[290px] border h-[200px] rounded-lg items-center justify-center text-3xl hover:bg-white hover:text-[#393F40] cursor-pointer">
      <p>{topicLineOne}</p>
      <p>{topicLineTwo}</p>
    </div>
  );
};

export default ProjectTopic;
