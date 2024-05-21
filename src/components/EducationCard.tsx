import culogo from "../assets/img/culogo.png";
import fhu from "../assets/img/fhu.png";
const EducationCard = () => {
  return (
    <div className="lg:w-[900px] lg:h-[400px] md:w-[550px] w-[350px] gap-3 grid grid-cols-2 grid-rows-2 ">
      <div className="bg-white rounded-lg items-center justify-center flex ">
        <img src={culogo} className="md:w-[350px] p-4" />
      </div>
      <div className="text-right lg:text-2xl md:text-lg flex flex-col lg:gap-5 md:gap-2 justify-center lg:px-12">
        <p>Cumberland University</p>
        <p> A.S. General Science</p>
        <p> 2020-2022</p>
      </div>
      <div className="text-left lg:text-2xl md:text-lg flex flex-col lg:gap-5 md:gap-2 justify-center lg:px-12 ">
        <p>Freed-Hardeman University</p>
        <p>B.S. Computer Science </p>
        <p className="lg:text-xl lg:block hidden">Focus in Information Systems</p>
        <p> 2022-2024</p>
      </div>
      <div className="bg-white rounded-lg items-center justify-center flex">
        <img src={fhu} className="md:w-[350px] p-3" />
      </div>
    </div>
  );
};

export default EducationCard;
