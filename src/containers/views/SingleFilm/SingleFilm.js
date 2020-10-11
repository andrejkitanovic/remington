import React, { useEffect, useState } from "react";
import "./SingleFilm.scss";

import Utility from "../../../utility/Keys";

import FilmAbout from "../../../components/SingleFilm/FilmAbout/FilmAbout";
import FilmSimilar from "../../../components/SingleFilm/FilmSimilar/FilmSimilar";
import FilmButtons from "../../../components/SingleFilm/FilmButtons/FilmButtons";

import filmoviData from "../../../data/filmovi.json";
import filmData from '../../../data/film.json';


const SingleFilm = (props) => {
  const [row, setRow] = useState(0);
  const [button, setButton] = useState(0);
  const [movie, setMovie] = useState(0);

  useEffect(() => {
    const left = () => {
      switch (row) {
        case 0:
          button > 0 && setButton((c) => c - 1);
          break;
        case 1:
          movie > 0 && setMovie((c) => c - 1);
          break;
        default:
          break;
      }
    };

    const right = () => {
      switch (row) {
        case 0:
          button < 3 && setButton((c) => c + 1);
          break;
        case 1:
          movie < filmoviData.length - 1 && setMovie((c) => c + 1);
          break;
        default:
          break;
      }
    };

    const up = () => {
      row === 1 && setRow(0);
    };

    const down = () => {
      row === 0 && setRow(1);
    };

    // const enter = () => {

    // };

    const keyHandler = (e) => {
      switch (e.keyCode) {
        case Utility.down:
          down();
          break;
        case Utility.up:
          up();
          break;
        case Utility.left:
          left();
          break;
        case Utility.right:
          right();
          break;
        case Utility.enter:
          //   enter();
          break;
        default:
          break;
      }
    };

    if (props.active) {
      document.addEventListener("keydown", keyHandler);
    } else document.removeEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="SingleFilm">
      <div className="wallpaper" style={{backgroundImage:`url(${filmData.banner})`}}></div>

      <div className="container">
        <FilmAbout movie={filmData} />
        <FilmButtons active={row === 0 && button}/>
        <FilmSimilar movies={filmoviData} active={row === 1} position={movie} />
      </div>
    </div>
  );
};

export default SingleFilm;
