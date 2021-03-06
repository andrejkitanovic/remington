import React, { useState, useEffect } from "react";
import "./Pocetna.scss";

import Utility from "../../../utility/Keys";

import TVKanali from "../../../components/Pocetna/TVKanali/TVKanali";
import ListaFilmova from "../../../components/Pocetna/ListaFilmova/ListaFilmova";

import kanaliData from "../../../data/kanali.json";
import filmoviData from "../../../data/filmovi.json";
import serijeData from "../../../data/serije.json";

import {connect} from 'react-redux'
import {toggleMenu} from '../../../store/actions/menu'

import axios from '../../../utility/axios'

const Pocetna = (props) => {
  const [column, setColumn] = useState(0);
  const [positionChannel, setPositionChannel] = useState(0);
  const [positionMovie, setPositionMovie] = useState(0);
  const [positionSerie, setPositionSerie] = useState(0);

  useEffect(() => {
    axios.get("/channels/new")
    .then(res => console.log(res))
  },[])

  useEffect(() => {
    const left = () => {
      switch (column) {
        case 0:
          positionChannel > 0 ? setPositionChannel((p) => p - 1) : props.toggleMenu(true);
          break;
        case 1:
          positionMovie > 0 ? setPositionMovie((p) => p - 1) : props.toggleMenu(true);
          break;
        case 2:
          positionSerie > 0 ? setPositionSerie((p) => p - 1) : props.toggleMenu(true);
          break;
        default:
          break;
      }
    };

    const right = () => {
      switch (column) {
        case 0:
          positionChannel < kanaliData.length - 1 &&
            setPositionChannel((p) => p + 1);
          break;
        case 1:
          positionMovie < filmoviData.length - 1 &&
            setPositionMovie((p) => p + 1);
          break;
        case 2:
          positionSerie < serijeData.length - 1 &&
            setPositionSerie((p) => p + 1);
          break;
        default:
          break;
      }
    };

    const up = () => {
      if (column > 0) {
        setColumn((c) => c - 1);
        setPositionMovie(0);
        setPositionSerie(0);
        setPositionChannel(0);
      }
    };

    const down = () => {
      if (column < 2) {
        setColumn((c) => c + 1);
        setPositionMovie(0);
        setPositionSerie(0);
        setPositionChannel(0);
      }
    };

    const enter = () => {
      switch (column) {
        case 1:
          props.history.push(`/film/${5}`);
          break;
        case 2:
          props.history.push(`/serija/${5}`);
          break;
        default:
          break;
      }
    };

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
          enter();
          break;
        default:
          break;
      }
    };

    if (!props.menu) {
      document.addEventListener("keydown", keyHandler);
    } else document.removeEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className={"Pocetna" + (!props.menu ? " active" : "")}>
      <div className={"row" + (column === 2 ? " translate" : "")}>
        <p>TV Kanali</p>
      </div>

      <TVKanali
        kanali={kanaliData}
        position={column === 0 && positionChannel}
        translate={column === 2}
      />

      <div className={"row two" + (column === 2 ? " translate" : "")}>
        <p>Novi filmovi</p>
      </div>

      <ListaFilmova
        filmovi={filmoviData}
        position={column === 1 && positionMovie}
        translate={column === 2}
      />

      <div className={"row three" + (column === 2 ? " translate" : "")}>
        <p>Nove serije</p>
      </div>

      <ListaFilmova
        second
        filmovi={serijeData}
        position={column === 2 && positionSerie}
        translate={column === 2}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    menu:state.menu.menu
  }
}

export default connect(mapStateToProps,{toggleMenu})(Pocetna);
