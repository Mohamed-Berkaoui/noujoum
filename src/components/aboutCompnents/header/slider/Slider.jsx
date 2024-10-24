import React, { useEffect, useState } from "react";
import "./slider.scss";
import { motion } from "framer-motion";
import imgSlider1 from "../../../../assets/A propos/immg1.webp";
import imgSlider2 from "../../../../assets/A propos/immg2.webp";
import imgSlider3 from "../../../../assets/A propos/immg3.webp";
import imgSlider4 from "../../../../assets/A propos/immg4.webp";
import imgSlider5 from "../../../../assets/A propos/immg5.webp";
import imgSlider6 from "../../../../assets/A propos/immg6.webp";
const imgs = [imgSlider1, imgSlider2, imgSlider3, imgSlider5, imgSlider6];
const images = [
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
  ...imgs,
];

const Slider = () => {
  const [imageWidth, setImageWidth] = useState(0);
  // Base speed
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setImageWidth(images.length * 300); // Assuming max width of 300px
  }, []);

  let scrollTimeout;

  const handleScroll = () => {
    // Set the scrolling state to true
    setIsScrolling(true);

    // Clear any existing timeout
    if (scrollTimeout) clearTimeout(scrollTimeout);

    // Set a timeout to change the state back to false after 100ms (adjust as needed)
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="slider-wrapper">
      <motion.div
        animate={{ x: !isScrolling ? "-85%" : "-90%" }} // Adjust based on your design
        transition={{
          duration: isScrolling ? 150 : 1500, // Use current speed when scrolling, otherwise default speed
          ease: "linear",
          repeat: Infinity,
        }}
        initial={true}
        className="slider-container"
        style={{ width: imageWidth }}
      >
        {images.concat(images).map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: "100%", objectFit: "contain", height: "100%" }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
