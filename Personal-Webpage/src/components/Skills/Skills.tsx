import "./Skills.scss";
import SkillsData from "./SkillsData";

export default function Skills(props: any) {
  const formattedProgrammingTecchnologies = SkillsData[0].map((value) => <li><p>{value}</p></li>)
  const formattedDesignSkills = SkillsData[1].map((value) => <li><p>{value}</p></li>)


  return (
    <div className={`skills ${props.sectionArray[1] ? "active" : "inactive"}`}>
      <div className="programmming-technologies">
        <h2>Programming Technologies</h2>
        <ul className="programmming-technologies-list">
          {formattedProgrammingTecchnologies}
        </ul>
      </div>
      <div className="design-and-planning">
        <h2>Design and Planning</h2>
        <ul>
          {formattedDesignSkills}
        </ul>
      </div>
    </div>
  );
}
