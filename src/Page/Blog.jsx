import React, { useState } from "react";
import Card from "../components/Card";
import pemandangan from "../assets/image/pemandangan-1.jpg";
import "../assets/css/Blog.css";

const Blog = () => {
  const [card, setCard] = useState([
    { title: "Judul 1", imgUrl: pemandangan },
    { title: "Judul 2", imgUrl: pemandangan },
    { title: "Judul 3", imgUrl: pemandangan },
    { title: "Judul 4", imgUrl: pemandangan },
    { title: "Judul 5", imgUrl: pemandangan },
    { title: "Judul 6", imgUrl: pemandangan },
  ]);

  return (
    <div className="Blog">
      {card.map((item, index) => (
        <Card judul={item.title} img={item.imgUrl} />
      ))}
    </div>
  );
};

export default Blog;
