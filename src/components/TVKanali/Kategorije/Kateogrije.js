import React from "react";
import "./Kategorije.scss";

const kategorije = (props) => {
  const kategorijeLista = props.kategorije.map((kategorija, index) => (
    <div className={"Kategorija" + (props.position === index ? " active" : "")}>
      {kategorija}
    </div>
  ));

  return (
    <div
      className="KategorijeTVKanali"
     
    >
      <div className="container"  style={{ bottom: props.position > 16 ? (props.position - 16) * 60 + "px" : "0px" }}>{kategorijeLista}</div>
    </div>
  );
};

export default kategorije;
