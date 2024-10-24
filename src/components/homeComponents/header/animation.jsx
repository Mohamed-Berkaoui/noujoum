import { delay } from "framer-motion";

export const anim = (variants) => {
    return {
      initial: "initial",
      animate: "animate",
      whileInView:"inView",
      variants,
    };
  };
  export const banner = {
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.08,
      },
    },
  };
  
  export const letterAni = {
    initial: { y: 10  ,opacity:0},
    animate: {
      y: 0,
      opacity:1,
      transition: {
        duration: 0.4,
      },
    },
  };

  export const boxBanner = {
    inView: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };
  
  export const boxAni = {
    initial: { y: 10  ,opacity:0},
    inView: {
      y: 0,
      opacity:1,
      transition: {
        duration: 0.4,
      },
    },
  };
  
  export const text = {
    Noujoum:"Noujoum",
    Ben:"Ben",
    Ammar:"Ammar"

  };