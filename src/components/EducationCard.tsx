import culogo from "../public/culogo.png";
import fhu from "../public/fhu.png";

const EducationCard = () => {
  return (
    <div className="w-[900px] h-[400px] gap-3 grid grid-cols-2 grid-rows-2">
      <div className="bg-white rounded-lg items-center justify-center flex">
        <img src={culogo} width={350} />
      </div>
      <div className="text-left text-2xl flex flex-col gap-5 justify-center items-start px-12">
        <p>Cumberland University</p>
        <p> A.S. General Science</p>
        <p> 2020-2022</p>
      </div>
      <div className="text-left text-2xl flex flex-col gap-5 justify-center items-end px-12 ">
        <p>Freed-Hardeman University</p>
        <p>B.S. Computer Science, </p>
        <p className="text-xl">Focus in Information Systems</p>
        <p> 2022-2024</p>
      </div>
      <div className="bg-white rounded-lg items-center justify-center flex">
        <img src={fhu} width={350} />
      </div>
    </div>
  );
};

export default EducationCard;
