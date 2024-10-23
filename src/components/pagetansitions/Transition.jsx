import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoNoujoum from "../../assets/logo.png";
import "./transition.scss";

const createMotionProps = (variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

const textVariants = {
  initial: {
    opacity: 0.5,
    transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
  enter: {
    opacity: 0,
    top: -100,
    display: "block",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },

    transitionEnd: { top: "40.5%", display: "none" },
  },
  exit: {
    opacity: 0.5,
    display: "block",

    top: "24%",
    transition: { duration: 0.75, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
    transitionEnd: { top: "40.5%" },
  },
};

const curveVariants = (initialPath, targetPath) => ({
  initial: { d: initialPath },
  enter: {
    d: targetPath,
    display: "block",

    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { display: "none" },
  },
  exit: {
    d: initialPath,
    display: "block",

    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
});

const translateVariants = {
  initial: { top: "-300px" },
  enter: {
    top: "-100vh",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { top: "100vh" },
  },
  exit: {
    top: "-300px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Curve({ children }) {
  const [dimensions, setDimensions] = useState({ width: null, height: null });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve">
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
      />
      <motion.img
        src={logoNoujoum}
        alt=""
        className="route"
        {...createMotionProps(textVariants)}
      />
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...createMotionProps(translateVariants)}>
      <motion.path
        {...createMotionProps(curveVariants(initialPath, targetPath))}
      />
    </motion.svg>
  );
};
