import React, { useState, useEffect } from "react";
import "../Filmovi/Filmovi.scss";

import Utility from "../../../utility/Keys";

import FilmoviKategorije from "../../../components/Filmovi/FilmoviKategorije/FilmoviKategorije";
import SortiranjeIPretraga from "../../../components/Filmovi/SortiranjeIPretraga/SortiranjeIPretraga";
import Sort from "../../../components/Filmovi/Sort/Sort";
import PrikazFilmovi from "../../../components/Filmovi/PrikazFilmovi/PrikazFilmovi";

import kategorijeData from "../../../data/serijeKategorije.json";
import serijeData from "../../../data/serije.json";

import {connect} from 'react-redux'
import {toggleMenu} from '../../../store/actions/menu'

const Serije = (props) => {
  const [sort,] = useState(true);

  const [column, setColumn] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [sortSearch, setSortSearch] = useState(0);
  const [mainRow, setMainRow] = useState(0);
  const [sortPosition, setSortPosition] = useState(0);
  const [moviePosition, setMoviePosition] = useState(0);

  useEffect(() => {
    const down = () => {
      switch (column) {
        case 0:
          activeCategory < kategorijeData.length - 1 &&
            setActiveCategory((p) => p + 1);
          break;
        case 1:
          if (mainRow === 0) {
            if (sortSearch === 0) {
              setSortPosition(0);
            } else {
              setSortPosition(1);
            }
            setMainRow(1);
          } else {
            mainRow < 2 && setMainRow((r) => r + 1);
            if (
              mainRow === 2 &&
              serijeData.length % 2 === 1 &&
              moviePosition > serijeData.length / 2 - 1
            ) {
              break;
            } else if (mainRow === 2) setMainRow(3);
          }
          break;
        default:
          break;
      }
    };

    const up = () => {
      switch (column) {
        case 0:
          activeCategory > 0 && setActiveCategory((p) => p - 1);
          break;
        case 1:
          if (mainRow === 1) {
            if (sort && sortPosition > 0) {
              setSortSearch(1);
            } else setSortSearch(0);
            setMainRow(0);
          } else if (mainRow === 2) {
            sort && setSortPosition(0);
            setMainRow(1);
          } else mainRow > 0 && setMainRow((r) => r - 1);
          break;
        default:
          break;
      }
    };

    const left = () => {
      switch (column) {
        case 0:
          props.toggleMenu(true);
          break;
        case 1:
          if (mainRow === 0) {
            if (sortSearch === 1) {
              setSortSearch(0);
            } else setColumn(0);
          } else if (mainRow === 1) {
            if (sort && sortPosition > 0) {
              setSortPosition((p) => p - 1);
            } else setColumn(0);
          } else if (mainRow === 2 || mainRow === 3) {
            if (moviePosition > 0) setMoviePosition((p) => p - 1);
            else setColumn(0);
          }

          break;
        default:
          break;
      }
    };

    const right = () => {
      switch (column) {
        case 0:
          setColumn(1);
          break;
        case 1:
          if (mainRow === 0 && sortSearch === 0) {
            setSortSearch(1);
          } else if (mainRow === 1 && sort && sortPosition < 3) {
            setSortPosition((p) => p + 1);
          } else if (mainRow === 2 || mainRow === 3) {
            moviePosition < (serijeData.length - 2) / 2 &&
              setMoviePosition((p) => p + 1);
            if (
              serijeData.length % 2 === 1 &&
              moviePosition > serijeData.length / 2 - 2
            ) {
              setMainRow(2);
            }
          }
          break;
        default:
          break;
      }
    };

    const enter = () => {
      switch (column) {
        case 1:
          if (mainRow === 2 || mainRow === 3) {
            props.history.push(`/serija/${5}`)
          }
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
    <div className="Filmovi active">
      <FilmoviKategorije
        kategorije={kategorijeData}
        active={column === 0 && activeCategory}
        position={activeCategory}
      />
      <div className="main">
        <SortiranjeIPretraga
          active={column === 1 && mainRow === 0 && sortSearch}
        />
        <Sort active={column === 1 && mainRow === 1 && sortPosition} />
        <PrikazFilmovi
          filmovi={serijeData}
          active={
            column === 1 && mainRow > 1 && mainRow < 4 ? moviePosition : -1
          }
          position={moviePosition}
          row={mainRow === 2}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    menu:state.menu.menu
  }
}


export default connect(mapStateToProps,{toggleMenu})(Serije);
