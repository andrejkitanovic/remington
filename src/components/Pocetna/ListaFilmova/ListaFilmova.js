import React from "react";
import "./ListaFilmova.scss";

const listaFilmova = (props) => {
  const filmovi = props.filmovi.map((film,index) => (
    <div className={"Film" + (props.position === index ? " active" : "")} style={{ backgroundImage: `url(${film.img})` }}>
      <div className="opis">
            <h5>{film.name}</h5>
            <div className="zanr">
              <div className="rating">
                <p>{film.year}</p>
                <div className="stars" style={{ "--stars": 3.4 }}></div>
              </div>
              <p>{film.category.join(", ")}</p>
            </div>
          </div>
    </div>
  ));

  return (
    <div
      className={"ListaFilmovaPocetna" + (props.second ? " two" : "")} 
      style={{transform:`translateX(${props.position > 3 ? (props.position-3) * -240 : 0}px) translateY(${props.translate ? -250 : 0}px)`}} 
    >
      {filmovi}
    </div>
  );
};

export default listaFilmova;
