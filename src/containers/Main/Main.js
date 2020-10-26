import React, { useEffect } from "react";
import "./Main.scss";

import Menu from "../Menu/Menu";
import {withRouter} from 'react-router-dom'


const Main = (props) => {

  useEffect(() => {
    localStorage.getItem('jwToken') ? props.history.push('/home') : props.history.push('/login')
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

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

export default withRouter(Main);
