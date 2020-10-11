import React from "react";
import "./ListaFilmova.scss";

const listaFilmova = (props) => {
  const filmovi = props.filmovi.map((film,index) => (
    <div className={"Film" + (props.position === index ? " active" : "")} style={{ backgroundImage: `url(${film.img})` }}></div>
  ));

  return (
    <div
      className="ListaFilmovaPocetna"
      style={{ right: props.position * 245 + "px" }}
    >
      {filmovi}
    </div>
  );
};

export default listaFilmova;
