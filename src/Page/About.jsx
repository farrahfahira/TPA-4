import React from "react";
import "../assets/css/About.css";
import img from "../assets/image/image-farrah.png";

const About = () => {
  return (
    <div className="About">
      <div className="section-1">
        <div className="content-section">
          <img src={img} />
        </div>
      </div>
      <div className="section-2">
        <div className="content-section">
          <h5>ABOUT ME</h5>
          <h4>
            Nama lengkap saya adalah Farrah Fahira Murzani. Sekarang saya sedang menempuh semester 5 di perkuliahan. Pada semester ini saya memutuskan untuk mengikuti program KM Studi Independen di Skilvul dengan learning track Front-End
            Web Development.
          </h4>
          <h4>Saya tertarik pada bidang Front-End semenjak semester lalu dan ingin terus belajar lebih dalam mengenai bidang ini. Saya juga sangat tertarik untuk berkarir di bidang ini.</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
