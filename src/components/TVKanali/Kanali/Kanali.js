import React from "react";
import "./Kanali.scss";

import Kanal from "../../../assets/Delete/kanal.png";

const kanali = (props) => {
  const kanaliLista = props.kanali.map((kanal,index) => (
    <div className={"Kanal" + (props.position === index && props.hovered ? " selected" : "") + (props.active === index ? " active" : "")} >
      <div className="flex">
        <div className="img" style={{ backgroundImage: `url(${Kanal})` }}></div>
        <p>Utakmica Broj Ses - Pasipoljana (Seoski Fudbal)</p>
      </div>
      <div className="progress"></div>
    </div>
  ));

  return <div className="Kanali" 
  style={{bottom: props.position && props.position * 97 + "px"}}
  >{kanaliLista}</div>;
};

export default kanali;
