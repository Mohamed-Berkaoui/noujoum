import React, { useEffect, useState } from 'react';
import "./slider.scss"
import { motion,useScroll,useTransform } from 'framer-motion';
import imgSlider1 from"../../../../assets/A propos/immg1.webp"
import imgSlider2 from"../../../../assets/A propos/immg2.webp"
import imgSlider3 from"../../../../assets/A propos/immg3.webp"
import imgSlider4 from"../../../../assets/A propos/immg4.webp"
import imgSlider5 from"../../../../assets/A propos/immg5.webp"
import imgSlider6 from"../../../../assets/A propos/immg6.webp"


const images = [
imgSlider1,imgSlider2,imgSlider3,imgSlider5,imgSlider6,imgSlider4,
imgSlider1,imgSlider2,imgSlider3,imgSlider5,imgSlider6,imgSlider4,
imgSlider1,imgSlider2,imgSlider3,imgSlider5,imgSlider6,imgSlider4,
imgSlider1,imgSlider2,imgSlider3,imgSlider5,imgSlider6,imgSlider4



]

const Slider = () => {
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    setImageWidth(images.length * 300); // Assuming max width of 300px
  }, []);

  let scrollTimeout;
  const [isScrolling, setIsScrolling] = useState(false);
  console.log("🚀 ~ Slider ~ isScrolling:", isScrolling)

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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout); 
    };
  }, []);
  return (
    <div className='slider-wrapper'>
      <motion.div
        animate={{ x: "-85%"}}
        transition={{ duration: isScrolling ?50:180, ease: 'linear', repeat: Infinity }}
  className='slider-container' style={{ width: imageWidth }}
      >
        {images.concat(images).map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} style={{ width: '100%',objectFit:"contain", height: '100%' }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
