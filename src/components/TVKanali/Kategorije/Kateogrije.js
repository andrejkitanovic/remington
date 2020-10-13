import React from "react";
import "./Kategorije.scss";

const kategorije = (props) => {
  const kategorijeLista = props.kategorije.map((kategorija, index) => (
    <div className={"Kategorija" + (props.position === index ? " active" : "")} style={{top:index * 60 + "px"}}>
      {kategorija}
    </div>
  ));

  return (
    <div
      className="KategorijeTVKanali"
     
    >
      <div className="container"  style={{ transform: `translateY(${props.position > 16 ? (props.position - 16) * -60 : 0}px)`}}>{kategorijeLista}</div>
    </div>
  );
};

export default kategorije;
