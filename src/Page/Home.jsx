import React from "react";
import "../assets/css/Home.css";
import img from "../assets/image/image-farrah.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="section-1">
        <div className="content-section">
          <div className="name">
            <h1>Farrah Fahira.</h1>
          </div>
          <div className="line">
            <hr />
          </div>
          <div className="socmed">
            <h6>instagram</h6>
            <h6>linkedin</h6>
          </div>
          <div className="contact-me">
            <button className="button" role="button">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="content-section">
          <img src={img} />
        </div>
      </div>
      <div className="section-3">
        <div className="content-section">
          <h5>INTRODUCTION</h5>
          <h2>CS STUDENT WHO INTERESTED IN FRONT-END WEB DEVELOPMENT</h2>
          <h4>saya adalah mahasiswa informatika semester 5 yang sedang mengikuti program Kampus Merdeka Studi Independen Bersertifikat di Skilvul </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
