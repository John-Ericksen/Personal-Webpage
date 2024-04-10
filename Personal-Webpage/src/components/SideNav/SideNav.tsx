import "./SideNav.scss";
export default function SideNav(props: any) {
  return (
    <div className="sidenav">
      <ul>
        <li
          className={props.selectedArray[0] == true ? "selected" : "not-selected"}
          onClick={() => props.select(0)}
        >
          <p>Home</p>
        </li>
        <li
          className={props.selectedArray[1] == true ? "selected" : "not-selected"}
          onClick={() => props.select(1)}
        >
          <p>Skills</p>
        </li>
        <li
          className={props.selectedArray[2] == true ? "selected" : "not-selected"}
          onClick={() => props.select(2)}
        >
          <p>Experience</p>
        </li>
        <li
          className={props.selectedArray[3] == true ? "selected" : "not-selected"}
          onClick={() => props.select(3)}
        >
          <p>Portfolio</p>
        </li>
        <li
          className={props.selectedArray[4] == true ? "selected" : "not-selected"}
          onClick={() => props.select(4)}
        >
          <p>Contact</p>
        </li>
      </ul>
    </div>
  );
}
