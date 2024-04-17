import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Nav from "../components/Nav";
import TechnicalSkill from "../components/TechnicalSkill";

const About = () => {
  return (
    <div className="h-full bg-[#393F40] text-white font-poppins flex flex-col items-center space-y-16">
      <Nav />
      <AboutMe />
      <TechnicalSkill />
      <Education />
    </div>
  );
};

export default About;
