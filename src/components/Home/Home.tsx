import "./Home.scss";

export default function Home(props: any) {
  return (
    <div className={`home ${props.sectionArray[0] ? "active" : "inactive"}`}>
      <p>
        Dedicated to the fusion of technology, art, accessible design, and
        ethical development.
      </p>
    </div>
  );
}
