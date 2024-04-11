import { useState } from "react";
import "./Skills.scss";
import SkillsData from "./SkillsData";

export default function Skills(props: any) {
  const formattedProgrammingTechnologies = SkillsData[0].map((value) => (
      <div className="skill-card">
        <p>{value}</p>
      </div>
   
  ));
  const formattedDesignSkills = SkillsData[1].map((value) => (
    <div className="skill-card">
      <p>{value}</p>
    </div>
  ));

  const [menuState, changeMenuState] = useState("programming-technologies");

  function switchToProgramming() {
    changeMenuState("programming-technologies");
  }
  function switchToSkills() {
    changeMenuState("skills");
  }
  function switchToTools() {
    changeMenuState("tools");
  }

  return (
    <div className={`skills ${props.sectionArray[1] ? "active" : "inactive"}`}>
      <div className="portfolio-menu">
        <button
          className={
            menuState == "programming-technologies"
              ? "tech-portfolio-button-active"
              : "tech-portfolio-button-inactive"
          }
          onClick={switchToProgramming}
        >
          Programming Technologies
        </button>
        <button
          className={
            menuState == "tools"
              ? "art-portfolio-button-active"
              : "art-portfolio-button-inactive"
          }
          onClick={switchToTools}
        >
          Tools
        </button>
      </div>
      <div
        className={
          menuState == "programming-technologies"
            ? "programmming-technologies active"
            : "programmming-technologies inactive"
        }
      >
        <h2>Programming Technologies</h2>
        <div className="programmming-technologies-list">
          {formattedProgrammingTechnologies}
        </div>
      </div>
      <div
        className={
          menuState == "tools"
            ? "tools active"
            : "tools inactive"
        }
      >
        <div className="tools">
          <h2>Design and Planning</h2>
          <div>{formattedDesignSkills}</div>
        </div>
      </div>
    </div>
  );
}
