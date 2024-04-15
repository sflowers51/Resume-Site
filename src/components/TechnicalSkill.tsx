import SkillDonutDisplay from "./SkillDonutDisplay";

const TechnicalSkill = () => {
  return (
    <div className="h-screen flex flex-col items-center gap-y-11">
      <h1 className="text-5xl text-center">Technical Skills</h1>
      <SkillDonutDisplay />
    </div>
  );
};

export default TechnicalSkill;
