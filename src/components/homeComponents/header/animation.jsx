export const anim = (variants) => {
    return {
      initial: "initial",
      whileInView: "animate",
      variants,
    };
  };
  export const banner = {
    animate: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
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
  
  export const text = {
    Noujoum:"Noujoum",
    Ben:"Ben",
    Ammar:"Ammar"

  };