import React from "react";
import "./FilmAbout.scss";

// import { AiFillStar } from "react-icons/ai";

const filmAbout = (props) => {
  return (
    <div className="FilmAbout">
      <div
        className="img"
        style={{ backgroundImage: `url(${props.movie.img})` }}
      ></div>
      <div className="description">
        <div className="name">
          <h2>{props.movie.name}</h2>
          <div className="rating">
            <div className="stars" style={{'--stars':props.movie.rating}} >
            </div>
          </div>
        </div>
        <p className="category">{props.movie.category.join(", ")}</p>
        <div className="year">
          <p>{props.movie.year}</p>
          <p>{props.movie.duration}min</p>
        </div>
        <p className="description">{props.movie.description}</p>
      </div>
    </div>
  );
};

export default filmAbout;
