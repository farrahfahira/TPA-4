import React from "react";
import pemandangan from "../assets/image/pemandangan-1.jpg";
import "../assets/css/Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="article-image">
        <img src={props.img} alt="" />
      </div>
      <div className="article-desc">
        <div className="article-title">
          <h3>{props.judul}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
