import React, { useState, useEffect } from "react";
import "./Main.scss";

import Utility from "../../utility/Keys";

import Menu from "../Menu/Menu";

const Main = (props) => {

  
  return (
    <div className="Main">
      <Menu open={props.menu}/>

      <div className="view">
        <div className="header"></div>
        {props.children}
      </div>
    </div>
  );
};

export default Main;
