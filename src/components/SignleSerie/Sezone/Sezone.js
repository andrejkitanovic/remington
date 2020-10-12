import React from "react";
import "./Sezone.scss";

const sezone = (props) => {
  const sezoneList = Object.keys(props.sezone).map((sezona, indexRow) => (
    <React.Fragment>
      <div className={"row" + (props.active === indexRow + 1 ? " active" : "")}>
        {sezona}
      </div>
      <div
        className="container"
        style={{
          right: props.active === indexRow + 1 && props.position * 248 + "px",
        }}
      >
        {props.sezone[sezona].map((epg,index) => (
          <div
            className={"Serie" + (props.active === indexRow + 1&& props.position === index ? " active" : "")}
            style={{ backgroundImage: `url(${props.img})` }}
          ></div>
        ))}
      </div>
    </React.Fragment>
  ));

  return <div className="Sezone">
    <div className="sezona"  style={{bottom:props.active > 0 && (props.active-1) * 448 + "px"}}>
    {sezoneList} </div></div>;
};

export default sezone;
