import { useState } from "react";
import "./Skills.scss";
import SkillsData from "./SkillsData";

export default function Skills(props: any) {
  const formattedProgrammingTechnologies = SkillsData[0].map((value) => (
    <div className="skill-card">
      <p>{value}</p>
    </div>
  ));
  const formattedTools = SkillsData[1].map((value) => (
    <div className="skill-card">
      <p>{value}</p>
    </div>
  ));

  const formattedCertifications = SkillsData[2].map((value) => (
    <div className="skill-card">
      <p>{value}</p>
    </div>
  ));

  const [menuState, changeMenuState] = useState("certifications");

  function switchToCerts() {
    changeMenuState("certifications");
  }

  function switchToProgramming() {
    changeMenuState("programming-technologies");
  }

  function switchToTools() {
    changeMenuState("tools");
  }

  return (
    <div className={`skills ${props.sectionArray[1] ? "active" : "inactive"}`}>
      <div className="portfolio-menu">
        <button
          className={
            menuState == "certifications"
              ? "menu-button-active"
              : "menu-button-inactive"
          }
          onClick={switchToCerts}
        >
          Certifications
        </button>
        <button
          className={
            menuState == "programming-technologies"
              ? "menu-button-active"
              : "menu-button-inactive"
          }
          onClick={switchToProgramming}
        >
          Programming Technologies
        </button>
        <button
          className={
            menuState == "tools" ? "menu-button-active" : "menu-button-inactive"
          }
          onClick={switchToTools}
        >
          Tools
        </button>
      </div>
      <div
        className={
          menuState == "certifications"
            ? "certifications active"
            : "certifications inactive"
        }
      >
        <h2>Certifications </h2>
        <div className="skill-list">{formattedCertifications}</div>
      </div>
      <div
        className={
          menuState == "programming-technologies"
            ? "programmming-technologies active"
            : "programmming-technologies inactive"
        }
      >
        <h2>Programming Technologies</h2>
        <div className="skill-list">{formattedProgrammingTechnologies}</div>
      </div>
      <div className={menuState == "tools" ? "tools active" : "tools inactive"}>
        <div className="tools">
          <h2>Tools </h2>
          <div className="skill-list">{formattedTools}</div>
        </div>
      </div>
    </div>
  );
}
