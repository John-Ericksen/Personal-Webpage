import "./Skills.scss";

export default function Skills(props: any) {
  return (
    <div className={`skills ${props.sectionArray[1] ? "active" : "inactive"}`}>
      <div className="programmming-languages">
        <h2>Programming Languages</h2>
        <ul>
          <li><p>C# (proficient)</p></li>
          <li><p>Java (proficient)</p></li>
          <li><p>HTML (proficient)</p></li>
          <li><p>CSS (proficient)</p></li>
          <li><p>TypeScript (proficient)</p></li>
          <li><p>React (proficient)</p></li>
          <li><p>JavaScript (proficient)</p></li>
          <li><p>C (intermediate) </p></li>
          <li><p>Python (intermediate)</p></li>
        </ul>
      </div>
      <div className="design-and-planning: ">
        <h2>Design and Planning</h2>
        <ul>
          <li><p>C# (proficient)</p></li>
          <li><p>Java (proficient)</p></li>
          <li><p>HTML (proficient)</p></li>
          <li><p>CSS (proficient)</p></li>
          <li><p>TypeScript (proficient)</p></li>
          <li><p>React (proficient)</p></li>
          <li><p>JavaScript (proficient)</p></li>
          <li><p>C (intermediate) </p></li>
          <li><p>Python (intermediate)</p></li>
        </ul>
      </div>
    </div>
  );
}
