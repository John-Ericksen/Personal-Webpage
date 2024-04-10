import "./PortfolioData";
import "./Portfolio.scss";
import PortfolioData from "./PortfolioData";
import { useState } from "react";

function TechProject(props: any) {
  return (
    <div className="tech-project">
      <div className="project-header">
        <div className="spacer"></div>
        <img src={props.projectThumbnail} alt="thumbnail" />
      </div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <a className="button" href={props.link}>
        See More
      </a>
    </div>
  );
}

export default function Portfolio(props: any) {
  const [menuState, changeMenuState] = useState("tech");

  const formattedTechPortfolio = PortfolioData[0].map((item) => (
    <TechProject
      key={crypto.randomUUID()}
      projectThumbnail={item.image}
      title={item.title}
      text={item.text}
      link={item.link}
    />
  ));

  function switchToTech() {
    changeMenuState("tech");
  }
  function switchToArt() {
    changeMenuState("art");
  }
  return (
    <div
      className={`portfolio ${props.sectionArray[3] ? "active" : "inactive"}`}
    >
      <div className="portfolio-menu">
        <button
          className={
            menuState == "tech"
              ? "tech-portfolio-button-active"
              : "tech-portfolio-button-inactive"
          }
          onClick={switchToTech}
        >
          Technological
        </button>
        <button
          className={
            menuState == "art"
              ? "art-portfolio-button-active"
              : "art-portfolio-button-inactive"
          }
          onClick={switchToArt}
        >
          Artistic
        </button>
      </div>
      <div
        className={
          menuState == "tech"
            ? "tech-portfolio active"
            : "tech-portfolio inactive"
        }
      >
        {formattedTechPortfolio}
      </div>
      <div
        className={
          menuState == "art" ? "art-portfolio active" : "art-portfolio inactive"
        }
      >
        <h1>Under Construction!</h1>
      </div>
    </div>
  );
}
