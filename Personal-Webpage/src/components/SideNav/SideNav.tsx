import "./SideNav.scss";
export default function SideNav(props: any) {
  return (
    <div className="sidenav">
      <ul>
        <li
          className={props.selectedArray[0] == true ? "selected" : "not-selected"}
          onClick={() => props.select(0)}
        >
          <a href="#">Home</a>
        </li>
        <li
          className={props.selectedArray[1] == true ? "selected" : "not-selected"}
          onClick={() => props.select(1)}
        >
          <a href="#">Skills</a>
        </li>
        <li
          className={props.selectedArray[2] == true ? "selected" : "not-selected"}
          onClick={() => props.select(2)}
        >
          <a href="#">Experience</a>
        </li>
        <li
          className={props.selectedArray[3] == true ? "selected" : "not-selected"}
          onClick={() => props.select(3)}
        >
          <a href="#">Portfolio</a>
        </li>
        <li
          className={props.selectedArray[4] == true ? "selected" : "not-selected"}
          onClick={() => props.select(4)}
        >
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
