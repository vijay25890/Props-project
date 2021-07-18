import React from "react";
import ReactDom from "react-dom";

const Card = (props) => {

  return (
    <>
      <div className="card-main">
        <div className="card-div">
          <div className="im">
            <img className="i" src={props.imgsrc} alt="images" />
          </div>
          <div>
            <h3>{props.name}</h3>
            <button className="btn">
              <a className="btn" href={props.links}>
                Watch Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
