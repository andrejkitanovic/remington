import React, { useState, useEffect } from "react";
import "./Main.scss";

import Utility from "../../utility/Keys";

import Menu from "../Menu/Menu";
import Pocetna from "../views/Pocetna/Pocetna";
import Filmovi from "../views/Filmovi/Filmovi";
import Serije from "../views/Serije/Serije";
import TVKanali from "../views/TVKanali/TVKanali";
import SingleFilm from "../views/SingleFilm/SingleFilm";
import SingleSerie from "../views/SingleSerie/SingleSerie";

const Main = (props) => {
  const [row, setRow] = useState(0);
  const [hoveredScreen,setHoveredScreen] = useState(0);
  const [screen,setScreen] = useState(0);
  const [back,setBack] = useState(null);

  useEffect(() => {
    const enter = () => {
      if(row < 1){
        setRow((r) => r + 1);
        setScreen(hoveredScreen)
      }
    };

    const exit = () => {
      if(back !== null){
        setScreen(back);
        setBack(null)
      }else {
        row > 0 && setRow((r) => r - 1);
      }
 
    };

    const keyHandler = (e) => {
      switch (e.keyCode) {
        case Utility.right:
          enter();
          break;
        case Utility.enter:
          enter();
          break;
        case Utility.back:
          exit();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  const setHoveredScreenHandler = property => {
      return setHoveredScreen(property)
  }

  const playMovie = (property,back) => {
    setBack(back)
    return setScreen(6);
  }

  const playSerie = (property,back) => {
    setBack(back)
    return setScreen(7);
  }

  
  return (
    <div className="Main">
      <Menu open={row === 0} screen={setHoveredScreenHandler}/>

      <div className="view">
        <div className="header"></div>

        {screen === 0 && <Pocetna active={row === 1} playMovie={playMovie} playSerie={playSerie} exit={() => setRow(0)} />}
        {screen === 1 && <TVKanali active={row === 1} exit={() => setRow(0)} />}
        {screen === 2 && <Filmovi active={row === 1} playMovie={playMovie} exit={() => setRow(0)} />}
        {screen === 3 && <Serije active={row === 1} playSerie={playSerie} exit={() => setRow(0)} />}


        {screen === 6 && <SingleFilm active={row === 1} exit={() => setRow(0)} />}
        {screen === 7 && <SingleSerie active={row === 1} exit={() => setRow(0)} />}
      </div>
    </div>
  );
};

export default Main;
