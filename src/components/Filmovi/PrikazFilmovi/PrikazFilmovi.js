import React from "react";
import "./PrikazFilmovi.scss";

const prikazFilmovi = (props) => {
  const filmovi1 = props.filmovi.map(
    (film, index) =>
      index % 2 === 0 && (
        <div
          className={
            "Film" + (props.row && props.active * 2 === index ? " active" : "")
          }
          style={{ backgroundImage: `url(${film.img})` }}
        >
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
      )
  );

  const filmovi2 = props.filmovi.map(
    (film, index) =>
      index % 2 !== 0 && (
        <div
          className={
            "Film" +
            (!props.row && props.active * 2 + 1 === index ? " active" : "")
          }
          style={{ backgroundImage: `url(${film.img})` }}
        >
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
      )
  );

  return (
    <div
      className="PrikazFilmovi"
    
    >
      <div className="container"   style={{ transform: `translateX(${props.position * -245}px)` }}>
        <div className="prikaz">{filmovi1}</div>
        <div className="prikaz">{filmovi2}</div>
      </div>
    </div>
  );
};

export default prikazFilmovi;
