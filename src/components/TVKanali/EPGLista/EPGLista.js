import React from "react";
import "./EPGLista.scss";

const epgLista = (props) => {
  const epgs = props.epgs.map((epg,index) => (
    <div className={"EPG" + (props.active === index ? " active" : "")}>
      <div className="about">
        <p className="time">05:00</p>
        <p>Dnevnik 2</p>
      </div>
      <div className="progress"></div>
    </div>
  ));

  return (
    <div className="EPGLista">
      <h3>HRT 1</h3>
     
          {epgs}
    
    </div>
  );
};

export default epgLista;
