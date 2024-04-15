import SkillDonut from "./SkillDonut";

const SkillDonutDisplay = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row justify-center gap-x-10">
        <SkillDonut percentage={90} skill="JavaScript" />
        <SkillDonut percentage={90} skill="TailwindCSS" />
        <SkillDonut percentage={70} skill="React" />
        <SkillDonut percentage={90} skill="Python" />
        <SkillDonut percentage={70} skill="C#" />
        <SkillDonut percentage={50} skill="SQL" />
      </div>
      <div className="flex flex-row justify-center gap-x-10">
        <SkillDonut percentage={89} skill="Data Analysis" />
        <SkillDonut percentage={60} skill="Docker" />
        <SkillDonut percentage={60} skill="Django" />
        <SkillDonut percentage={60} skill="Node JS" />
        <SkillDonut percentage={80} skill="Ethical Hacking" />
      </div>
    </div>
  );
};

export default SkillDonutDisplay;
