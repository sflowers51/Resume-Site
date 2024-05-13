import culogo from "../assets/img/culogo.png";
import fhu from "../assets/img/fhu.png";
const EducationCard = () => {
  return (
    <div className="md:w-[900px] md:h-[400px] w-[350px] h-[250px] gap-3 grid grid-cols-2 grid-rows-2">
      <div className="bg-white rounded-lg items-center justify-center flex ">
        <img src={culogo} className="md:w-[350px] w-[250px] p-5" />
      </div>
      <div className="text-left  md:text-2xl flex flex-col md:gap-5 justify-center items-start md:px-12">
        <p>Cumberland University</p>
        <p> A.S. General Science</p>
        <p> 2020-2022</p>
      </div>
      <div className="text-left md:text-2xl flex flex-col md:gap-5 justify-center md:px-12 ">
        <p>Freed-Hardeman University</p>
        <p>B.S. Computer Science </p>
        <p className="md:text-xl md:block hidden">Focus in Information Systems</p>
        <p> 2022-2024</p>
      </div>
      <div className="bg-white rounded-lg items-center justify-center flex">
        <img src={fhu} className="md:w-[350px] p-5" />
      </div>
    </div>
  );
};

export default EducationCard;
