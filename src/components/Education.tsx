import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="h-screen flex flex-col items-center gap-y-11 p-10">
      <h1 className="md:text-5xl text-2xl text-center">Education</h1>
      <EducationCard />
    </div>
  );
};

export default Education;
