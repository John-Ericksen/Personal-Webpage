import { useState } from "react";
import "./SideNav.scss";

export default function SideNav() {
  const [selectedArray, setSelectedArray] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  function select(section: number) {
    setSelectedArray((prevSelectedArray: any) => {
      const updatedArray = prevSelectedArray.map(
        (value: boolean, index: number) => {
          if (index === section) {
            return true;
          } else {
            return false;
          }
        }
      );
      return updatedArray;
    });
  }

  return (
    <div className="sidenav">
      <ul>
        <li
          className={selectedArray[0] == true ? "selected" : "not-selected"}
          onClick={() => select(0)}
        >
          <a href="#">Home</a>
        </li>
        <li
          className={selectedArray[1] == true ? "selected" : "not-selected"}
          onClick={() => select(1)}
        >
          {" "}
          <a href="#">Skills</a>
        </li>
        <li
          className={selectedArray[2] == true ? "selected" : "not-selected"}
          onClick={() => select(2)}
        >
          {" "}
          <a href="#">Experience</a>
        </li>
        <li
          className={selectedArray[3] == true ? "selected" : "not-selected"}
          onClick={() => select(3)}
        >
          {" "}
          <a href="#">Portfolio</a>
        </li>
        <li
          className={selectedArray[4] == true ? "selected" : "not-selected"}
          onClick={() => select(4)}
        >
          {" "}
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
