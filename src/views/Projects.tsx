import Nav from "../components/Nav";
import ProjectTopics from "../components/ProjectTopics";
import ProjectWell from "../components/ProjectWell";

const Projects = () => {


  return (
    <div className=" min-h-[101vh] pb-10 bg-[#393F40] text-white font-poppins flex flex-col items-center gap-10">
      <Nav/>
      <h1 className='text-4xl'>Topics</h1>
      <ProjectTopics/>
      <ProjectWell />
    </div>
  );
};

export default Projects;
