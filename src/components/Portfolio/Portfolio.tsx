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
  const formattedTechPortfolio = PortfolioData.map((item) => (
    <TechProject
      key={crypto.randomUUID()}
      projectThumbnail={item.image}
      title={item.title}
      text={item.text}
      link={item.link}
    />
  ));

  return (
    <div
      className={`portfolio ${props.sectionArray[3] ? "active" : "inactive"}`}
    >
      <div className="tech-portfolio">{formattedTechPortfolio}</div>
    </div>
  );
}
