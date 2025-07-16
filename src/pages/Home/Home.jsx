import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";

const images = [
  "/images/cl.jpg",
  "/images/el.avif",
  "/images/ss.webp"
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
};

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1><strong>Welcome to ShopZee</strong></h1>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "600px", borderRadius: "10px" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;
