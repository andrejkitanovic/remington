import React from "react";
import "./ListaFilmova.scss";

const listaFilmova = (props) => {
  const filmovi = props.filmovi.map((film) => (
    <div className="Film" style={{ backgroundImage: `url(${film.img})` }}></div>
  ));

  return (
    <div
      className="ListaFilmovaPocetna"
      style={{ right: props.position * 249 + "px" }}
    >
      {filmovi}
    </div>
  );
};

export default listaFilmova;
