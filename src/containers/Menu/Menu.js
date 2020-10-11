import React, { useEffect, useState } from "react";
import "./Menu.scss";

import Logo from "../../assets/Layout/logo.png";

import Pocetna from "../../assets/Layout/pocetna.png";
import TVKanali from "../../assets/Layout/tvkanali.png";
import Filmovi from "../../assets/Layout/filmovi.png";
import Serije from "../../assets/Layout/serije.png";
import Radio from "../../assets/Layout/radio.png";
import Podesavanja from "../../assets/Layout/podesavanja.png";

import Utility from "../../utility/Keys";

const Menu = (props) => {
  const [column, setColumn] = useState(0);

  useEffect(() => {
    const keyHandler = (e) => {
      switch (e.keyCode) {
        case Utility.down:
          column < 5 && setColumn((c) => c + 1);
          break;
        case Utility.up:
          column > 0 && setColumn((c) => c - 1);
          break;
        default:
          break;
      }
    };

    if(props.open){
        document.addEventListener("keydown", keyHandler);
    }else document.removeEventListener("keydown", keyHandler)
  

    return () => document.removeEventListener("keydown", keyHandler);
  }, [column,props]);

  useEffect(() => {
    props.screen(column)
  },[column,props])

  return (
    <div className={"Menu" + (!props.open ? " close" : "")} >
      <div className="logo">
        <img src={Logo} alt="MaxiTV" />
      </div>

      <div className={"nav-item" + (column === 0 ? " active" : "")}>
        <img src={Pocetna} alt="Pocetna" />
        <p>Pocetna</p>
      </div>

      <div className={"nav-item" + (column === 1 ? " active" : "")}>
        <img src={TVKanali} alt="Pocetna" />
        <p>Tv kanali</p>
      </div>

      <div className={"nav-item" + (column === 2 ? " active" : "")}>
        <img src={Filmovi} alt="Pocetna" />
        <p>Filmovi</p>
      </div>

      <div className={"nav-item" + (column === 3 ? " active" : "")}>
        <img src={Serije} alt="Pocetna" />
        <p>Serije</p>
      </div>

      <div className={"nav-item" + (column === 4 ? " active" : "")}>
        <img src={Radio} alt="Pocetna" />
        <p>Radio</p>
      </div>

      <div className={"nav-item" + (column === 5 ? " active" : "")}>
        <img src={Podesavanja} alt="Pocetna" />
        <p>Podesavanja</p>
      </div>
    </div>
  );
};

export default Menu;
