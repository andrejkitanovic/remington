import React from "react";
import "./Kanali.scss";

import Kanal from "../../../assets/Delete/kanal.png";

const kanali = (props) => {
  const kanaliLista = props.kanali.map((kanal,index) => (
    <div className={"Kanal" + (props.position === index && props.hovered ? " selected" : "") + (props.active === index ? " active" : "")} >
      <div className="flex">
        <div className="img" style={{ backgroundImage: `url(${Kanal})` }}></div>
        <p>Frankie Drake istrazuje, serija 3, ep. 3.</p>
      </div>
      <div className="progress"></div>
    </div>
  ));

  return <div className="Kanali" 
  style={{transform:`translateY(${props.position && props.position * -102.5}px)`}}
  >{kanaliLista}</div>;
};

export default kanali;
