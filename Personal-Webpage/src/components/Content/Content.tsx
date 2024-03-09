import { useState } from "react";
import Backround from "../Backround/Backround";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";

export default function Content() {
    const [sectionArray, setSectionArray] = useState([
      true,
      false,
      false,
      false,
      false,
    ]);

    function select(section: number) {
      setSectionArray((prevSelectedArray: any) => {
        const updatedArray = prevSelectedArray.map(
          (_value: boolean, index: number) => {
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
        <SideNav selectedArray={sectionArray} select={select} />
        <Home sectionArray={sectionArray}/>
        <Skills sectionArray={sectionArray}/>
        <Backround />
      </>
    );
  }

