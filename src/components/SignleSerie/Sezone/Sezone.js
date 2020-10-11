import React from "react";
import "./Sezone.scss";

const sezone = (props) => {
  const sezoneList = Object.keys(props.sezone).map((sezona, index) => (
    <React.Fragment>
      <div className={"row" + (props.active === index + 1 ? " active" : "")}>
        {sezona}
      </div>
      <div
        className="container"
        style={{
          right: props.active === index + 1 && props.position * 248 + "px",
        }}
      >
        {props.sezone[sezona].map((epg) => (
          <div
            className="Serie"
            style={{ backgroundImage: `url(${props.img})` }}
          ></div>
        ))}
      </div>
    </React.Fragment>
  ));

  return <div className="Sezone">{sezoneList}</div>;
};

export default sezone;
