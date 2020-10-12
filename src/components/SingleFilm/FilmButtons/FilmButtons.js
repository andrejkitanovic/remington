import React from "react";
import "./FilmButtons.scss";

import { TiArrowBack } from "react-icons/ti";
import { AiOutlineHeart } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { ImPlay2 } from "react-icons/im";

const filmButtons = (props) => {
  let buttons = (
    <React.Fragment>
      <div className={props.active === 0 ? "active" : ""}>
        <ImPlay2 />
        <p>Produciraj</p>
      </div>
      <div className={props.active === 1 ? "active" : ""}>
        <MdLocalMovies />
        <p>Trailer</p>
      </div>
      <div className={props.active === 2 ? "active" : ""}>
        <AiOutlineHeart />
        <p>Favorit</p>
      </div>
      <div className={props.active === 3 ? "active" : ""}>
        <TiArrowBack />
        <p>Nazad</p>
      </div>
    </React.Fragment>
  );

  if (props.serie) {
    buttons = (
      <React.Fragment>
        <div className={props.active === 0 ? "active" : ""}>
          <AiOutlineHeart />
          <p>Favorit</p>
        </div>
        <div className={props.active === 1 ? "active" : ""}>
          <TiArrowBack />
          <p>Nazad</p>
        </div>
      </React.Fragment>
    );
  }

  return <div className={"FilmButtons" + (props.show ? " show" : "")}>{buttons}</div>;
};

export default filmButtons;
