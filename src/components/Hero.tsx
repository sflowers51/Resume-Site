import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="self-center py-52 text-4xl">
      <h1>Hi,</h1>
      <h1>I'm Sam.</h1>
      <div className="flex flex-row gap-2">
        <p>Look at my</p>
        <Link to="/projects" className="text-[#78C7C7]">projects!</Link>
      </div>
    </div>
  );
};

export default Hero;
