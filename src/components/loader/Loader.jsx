import "./loader.scss";
import { AnimatePresence, motion } from "framer-motion";

import Image from "../../assets/LOGOS/noujoum LOGO2_Plan de travail 1 (2).png";
import image1 from "../../assets/LOGOS/noujoum LOGO2_Plan de travail 1 (2).png";
import image2 from "../../assets/LOGOS/noujoum LOGO2_Plan de travail 1 (2).png";
import image3 from "../../assets/LOGOS/noujoum LOGO2_Plan de travail 1 (2).png";
import image4 from "../../assets/LOGOS/noujoum LOGO2_Plan de travail 1 (2).png";

/// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: "1200%" },
  show: {
    opacity: 0.6,
    y: "1500%",
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      ease: "easeIn",
      duration: 0.4,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: -20,
    // x:200,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
exit:{x:300}
};

const Loader = () => {
  return (
    <motion.div className="loader" layoutTransition>
      <motion.div
        key="animation"
        variants={container}
        initial="hidden"
        layoutTransition
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <motion.img
          layoutTransition
          variants={itemMain}
          initial="hidden"
          animate="show"
          exit="exit"
          layoutId="main-image-1"
          src={Image}
          className="main-image"
          alt=""
        />
        <motion.div
          variants={container}
          initial="hidden"
          layoutTransition
          animate="show"
          exit="exit"
          className="text"
        >
          <motion.p variants={item}>Organisation  </motion.p>
          <motion.p variants={item}>de   </motion.p>
          <motion.p variants={item}> Mariage  </motion.p>

          <motion.p variants={item}>et </motion.p>
          <motion.p variants={item}>Fête </motion.p>


        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
