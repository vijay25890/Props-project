import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./component.card";
import Data from "./cards.data";

ReactDOM.render(
  <>
    <h1 className="title">The Hotstar Movies</h1>
    {Data.map((val) => {
      return <Card imgsrc={val.imgsrc} name={val.name} links={val.links} />;
    })}
  </>,
  document.getElementById("root")
);
