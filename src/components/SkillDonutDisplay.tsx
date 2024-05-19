import SkillDonut from "./SkillDonut";

const SkillDonutDisplay = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex md:flex-row md:px-5 flex-col justify-center flex-wrap gap-y-10 gap-x-10">
        <SkillDonut percentage={90} skill="JavaScript" />
        <SkillDonut percentage={90} skill="TailwindCSS" />
        <SkillDonut percentage={70} skill="React" />
        <SkillDonut percentage={60} skill="Node JS" />
        <SkillDonut percentage={80} skill=".NET MAUI" />
      </div>
      <div className="flex md:flex-row md:px-5 flex-col justify-center flex-wrap gap-y-10 gap-x-10">
        <SkillDonut percentage={90} skill="Python" />
        <SkillDonut percentage={70} skill="C#" />
        <SkillDonut percentage={60} skill="SQL" />
        <SkillDonut percentage={90} skill="Data Analysis" />
        <SkillDonut percentage={60} skill="Docker" />
        <SkillDonut percentage={60} skill="Django" />
      </div>
    </div>
  );
};

export default SkillDonutDisplay;
