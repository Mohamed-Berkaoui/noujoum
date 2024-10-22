// src/BoxSlider.js
import React, { useRef } from "react";
import imgSaberRbaii from "../../../../assets/home/saber erbé3i image_edited.jpg"
import ImgSamirLwsif from "../../../../assets/home/Samir Loussif image_edited.jpg";
import ImgNourChiba from "../../../../assets/home/IMAGE4_edited.jpg";
import ImgSlahMesbah from "../../../../assets/home/image3_edited.jpg";

import "./slider.scss"; 
import SliderBox from "./SliderBox"; 

const BoxSlider = () => {
  const stars = [
    { imgSrc: ImgNourChiba, name: "Nour Chiba" },
    { imgSrc: imgSaberRbaii, name: "Saber Rebaï" },
    { imgSrc: ImgSamirLwsif, name: "Samir Loussif" },
    { imgSrc: ImgSlahMesbah, name: "Slah Mosbah" },
    { imgSrc: ImgNourChiba, name: "Nour Chiba" },
    { imgSrc: imgSaberRbaii, name: "Saber Rebaï" },
    { imgSrc: ImgSamirLwsif, name: "Samir Loussif" },
    { imgSrc: ImgSlahMesbah, name: "Slah Mosbah" },
    { imgSrc: ImgSamirLwsif, name: "Samir Loussif" },
    { imgSrc: ImgSlahMesbah, name: "Slah Mosbah" },
  ];

  const sliderRef = useRef(null);

  const scrollTo = (direction) => {
    const scrollAmount = 230
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: direction === "next" ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="slider-container">
    <button className="arrow-button left" onClick={() => scrollTo("prev")}>&#9664;</button>
      <div className="boxes" ref={sliderRef}>
        {stars.map((star, i) => (
          <SliderBox imgSrc={star.imgSrc} name={star.name} key={i} />
        ))}
      </div>
      <button className="arrow-button right" onClick={() => scrollTo("next")}>&#9654;</button>
    </div>
  );
};

export default BoxSlider;
