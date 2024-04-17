const SkillDonut = ({
  percentage,
  skill,
}: {
  percentage: number;
  skill: string;
}) => {
  const strokeWidth = 8;
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="items-center justify-center flex flex-col gap-4">
      <svg className="w-32 h-32" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="white"
          strokeWidth={strokeWidth}
        />

        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#78C7C7"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />

        <text x="50" y="55" textAnchor="middle" fontSize="16" fill="white">
          {percentage}%
        </text>
      </svg>

      <h1>{skill}</h1>
    </div>
  );
};

export default SkillDonut;
