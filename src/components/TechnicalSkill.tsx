import SkillDonutDisplay from "./SkillDonutDisplay";

const TechnicalSkill = () => {
  return (
    <div className="lg:h-screen h-full flex flex-col items-center gap-y-11">
      <h1 className="lg:text-5xl text-xl text-center">Technical Skills</h1>
      <SkillDonutDisplay />
    </div>
  );
};

export default TechnicalSkill;
