import React, {useState,useEffect} from 'react'

import Utility from "../../../utility/Keys";

import FilmAbout from "../../../components/SingleFilm/FilmAbout/FilmAbout";
import FilmButtons from "../../../components/SingleFilm/FilmButtons/FilmButtons";
import Sezone from '../../../components/SignleSerie/Sezone/Sezone'

import serijaData from '../../../data/serija.json';

const SingleSerie = props => {
    const [row, setRow] = useState(0);
    const [button, setButton] = useState(0);
    const [movie, setMovie] = useState(0);
  
    useEffect(() => {
      const left = () => {
        switch (row) {
          case 0:
            button > 0 && setButton((c) => c - 1);
            break;
          default:
            movie > 0 && setMovie((c) => c - 1);
            break;
        }
      };
  
      const right = () => {
        switch (row) {
          case 0:
            button < 1 && setButton((c) => c + 1);
            break;
          default:
            var keys = Object.keys( serijaData.sezone );
            movie < serijaData.sezone[keys[row-1]].length - 1 && setMovie((c) => c + 1);
            break;
        }
      };
  
      const up = () => {
        row > 0 && setRow(r => r-1);
        setMovie(0);
      };
  
      const down = () => {
        row < Object.keys(serijaData.sezone).length && setRow(r => r+1);
        setMovie(0);
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
      <div className="SingleSerie">
        <div className="wallpaper" style={{backgroundImage:`url(${serijaData.banner})`}}></div>
  
        <div className="container" 
        style={{bottom:row > 0 && "40px"}}
        >
          <FilmAbout movie={serijaData}/>
          <FilmButtons serie active={row === 0 && button} show={row > 0}/>
          <Sezone sezone={serijaData.sezone} img={serijaData.img} active={row > 0 && row} position={movie}/>
        </div>
      </div>
    );
}

export default SingleSerie;

//style={{bottom:row * 448 + "px"}}