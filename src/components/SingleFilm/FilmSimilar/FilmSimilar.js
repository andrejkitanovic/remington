import React from "react";
import "./FilmSimilar.scss";

const filmSimilar = (props) => {
  const movies = props.movies.map((movie) => (
    <div className="Movie" style={{ backgroundImage: `url(${movie.img})` }}></div>
  ));

  return (
    <div className="FilmSimilar">
      <div className={"row" + (props.active ? " active" : "")}>STRANI FILMOVI 2020</div>
      <div className="container"  style={{right:props.position * 248 + "px"}}>{movies}</div>
    </div>
  );
};

export default filmSimilar;
