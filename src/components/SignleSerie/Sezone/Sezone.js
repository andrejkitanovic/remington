import React from "react";
import "./Sezone.scss";

const sezone = (props) => {
  const sezoneList = Object.keys(props.sezone).map((sezona, indexRow) => (
    <React.Fragment
    >
      <div className="SingleSezona" 
      style={{top:indexRow * 420 + "px"}}
      >
        <div
          className="row"
        >
          {sezona}
        </div>
        <div
          className="container"
          style={{
            transform:`translateX(${props.active === indexRow+1 && props.position * -248}px)`
          }}
        >
          {props.sezone[sezona].map((epg, index) => (
            <div
              className={
                "Serie" +
                (props.active === indexRow + 1 && props.position === index
                  ? " active"
                  : "")
              }
              style={{ backgroundImage: `url(${props.img})` }}
            ></div>
          ))}
        </div>
      </div>
    </React.Fragment>
  ));

  return (
    <div className="Sezone">
      <div
        className="sezona"
        style={{transform:`translateY(${props.active > 0 ? 320 + props.active * -420 : 0}px)`}}
      >
        {sezoneList}
      </div>
    </div>
  );
};

export default sezone;
