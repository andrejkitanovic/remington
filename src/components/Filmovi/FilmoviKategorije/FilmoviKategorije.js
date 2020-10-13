import React from "react";
import './FilmoviKategorije.scss'

const filmoviKategorije = (props) => {

    const kategorije = props.kategorije.map((kategorija,index) => <div className={"Kategorija" + (props.position === index ? " active" : "")}><h3>{kategorija.ime}</h3><p>Ukupno:220</p></div>)

  return <div className="FimoviKateogirje" 
  style={{transform:`translateY(${props.position * -104}px)`}}
  >
      {kategorije}
  </div>;
};

export default filmoviKategorije;
