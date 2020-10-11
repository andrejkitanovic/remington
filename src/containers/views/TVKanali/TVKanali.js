import React, { useState, useEffect } from "react";
import "./TVKanali.scss";

import Utility from "../../../utility/Keys";

import Kategorije from "../../../components/TVKanali/Kategorije/Kateogrije";
import Kanali from "../../../components/TVKanali/Kanali/Kanali";
import SortiranjeIPretraga from "../../../components/TVKanali/SortiranjeIPretraga/SortiranjeIPretraga";
import MiniPlayer from "../../../components/TVKanali/MiniPlayer/MiniPlayer";
import EPGLista from "../../../components/TVKanali/EPGLista/EPGLista";

import kateogrijeData from "../../../data/kanaliKategorije.json";

const TVKanali = (props) => {
  const [column, setColumn] = useState(0);
  const [kategorija, setKategorija] = useState(0);
  const [kanal, setKanal] = useState(0);
  const [kanalSelected, setKanalSelected] = useState(0);
  const [mainRow, setMainRow] = useState(0);
  const [sortSearch, setSortSearch] = useState(0);
  const [epg, setEpg] = useState(0);

  useEffect(() => {
    const right = () => {
      switch (column) {
        case 0:
          setColumn(1);
          break;
        case 1:
          setColumn(2);
          break;
        case 2:
          sortSearch < 2 && setSortSearch((c) => c + 1);
          break;
        default:
          break;
      }
    };

    const left = () => {
      switch (column) {
        case 0:
          props.exit();
          break;
        case 1:
          setColumn(0);
          break;
        case 2:
          if (mainRow === 0 && sortSearch > 0) {
            setSortSearch((c) => c - 1);
          } else setColumn(1);
          break;
        default:
          break;
      }
    };

    const up = () => {
      switch (column) {
        case 0:
          kategorija > 0 && setKategorija((r) => r - 1);
          break;
        case 1:
          kanal > 0 && setKanal((r) => r - 1);
          break;
        case 2:
          if (mainRow === 1) {
            setMainRow(0);
          } else if (mainRow === 2) {
            if (epg > 0) setEpg((r) => r - 1);
            else setMainRow(1);
          }
          break;
        default:
          break;
      }
    };

    const down = () => {
      switch (column) {
        case 0:
          kategorija < kateogrijeData.length - 1 && setKategorija((r) => r + 1);
          break;
        case 1:
          kanal < kateogrijeData.length - 1 && setKanal((r) => r + 1);
          break;
        case 2:
          if (mainRow < 2) {
            setMainRow((r) => r + 1);
          } else {
            epg < kateogrijeData.length - 1 && setEpg((r) => r + 1);
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
    <div className="TVKanali">
      <Kategorije
        kategorije={kateogrijeData}
        active={column === 0 && kategorija}
        position={kategorija}
      />
      <Kanali
        kanali={kateogrijeData}
        active={kanalSelected}
        position={kanal}
        hovered={column === 1}
      />
      <div className="mover"  style={{bottom: epg * 57 + "px"}}>
        <SortiranjeIPretraga
          active={column === 2 && mainRow === 0 && sortSearch}
        />
        <MiniPlayer active={column === 2 && mainRow === 1} />
        <EPGLista
          epgs={kateogrijeData}
          active={column === 2 && mainRow === 2 && epg}
          position={epg}
        />
      </div>
    </div>
  );
};

export default TVKanali;
