import React, { useState } from "react";
import tpa1 from "../assets/image/tpa1.png";
import tpa2 from "../assets/image/tpa2.png";
import Card from "../components/Card";
import "../assets/css/Portfolio.css";

const Portfolio = () => {
  const [porto, setPorto] = useState([
    { portoTitle: "TPA 1: Personal Website (using HTML & CSS)", portoImg: tpa1 },
    { portoTitle: "TPA 2: BMI Calculator (HTML, CSS, JS)", portoImg: tpa2 },
  ]);
  return (
    <div className="Portfolio">
      <div className="portfolio-title">
        <h3>Berikut adalah beberapa tugas TPA selama mengikuti program MSIB di Skilvul</h3>
      </div>
      <div className="portfolio-card">
        {porto.map((item, index) => (
          <Card key={index} judul={item.portoTitle} img={item.portoImg} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
