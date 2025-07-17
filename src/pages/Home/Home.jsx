import React from "react";
import { useNavigate } from "react-router-dom"; // for navigation
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
  autoplaySpeed: 1250,
};

function Home() {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate("/products");
  };

  return (
    <div className={styles.homeContainer}>
      <h1><strong>Welcome to ShopZee</strong></h1>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className={styles.slideWrapper}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className={styles.slideImage}
            />
            <button onClick={handleViewProducts} className={styles.viewButton}>
              View All Products
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;
