import "./PortfolioData";
import PortfolioData from "./PortfolioData";

function Portfolio() {}

function TechProject(props: any) {
  return (
    <div className="tech-project">
      <div className="header">
        <img src={props.projectThumbnail} alt="thumbnail" />
        <h2>{props.title}</h2>
      </div>
      <p>{props.text}</p>
      <a href={props.link}></a>
    </div>
  );
}

export default function TechnologyPortfolio() {
  const formattedTechPortfolio = PortfolioData[0].map((item) => (
    <TechProject
      projectThumbnail={item.image}
      title={item.title}
      text={item.text}
      link={item.link}
    />
  ));

  return <div className="tech-portfolio">
    {formattedTechPortfolio}
  </div>;
}
