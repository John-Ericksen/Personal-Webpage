import { useState } from "react";
import Backround from "../Backround/Backround";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";

export default function Content() {
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
      <>
        <Header />
        <SideNav selectedArray={selectedArray} select={select} />
        <Backround />
      </>
    );
  }

