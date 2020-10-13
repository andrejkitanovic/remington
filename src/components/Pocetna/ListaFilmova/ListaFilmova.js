import React from "react";
import "./ListaFilmova.scss";

const listaFilmova = (props) => {
  const filmovi = props.filmovi.map((film,index) => (
    <div className={"Film" + (props.position === index ? " active" : "")} style={{ backgroundImage: `url(${film.img})` }}></div>
  ));

  return (
    <div
      className={"ListaFilmovaPocetna" + (props.second ? " two" : "") + (props.translate ? " translate" : "")} 
      style={{transform:`translateX(${props.position * -250}px) translateY(${props.translate ? -250 : 0}px)`}} 
    >
      {filmovi}
    </div>
  );
};

export default listaFilmova;
