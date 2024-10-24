import Box from "./box/Box";
import "./notreMission.scss";
import HomeSectionTitle from "../homeSectionTitle/HomeSectionTitle";

import imageBox1 from "../../../assets/home/theater (2) 1.png";
import imageBox2 from "../../../assets/home/microphone 1.png";
import imageBox3 from "../../../assets/home/world 1.png";
import imageBox4 from "../../../assets/home/stage 1.png";
import { AnimatePresence, motion } from "framer-motion";
import { anim, boxAni, boxBanner } from "../header/animation";

const boxesContent = [
  {
    imgSrc: imageBox1,
    children:
      "Conception et réalisation de productions théâtrales et artistiques.",
  },
  { imgSrc: imageBox2, children: "Animation ciblée pour un public jeune." },
  {
    imgSrc: imageBox3,
    children: "Assistance aux festivals locaux et internationaux.",
  },
  {
    imgSrc: imageBox4,
    children:
      "Mise en scène de prestations artistiques et culturelles de qualité.",
  },
];

const variantsChild = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
};
function NotreMission() {
  return (
    <div className="notreMission">
      <HomeSectionTitle
        key={"mission"}
        title={"Notre mission"}
        description={
          "   Excellence événementielle : notre engagement à  créer des expériences inoubliables."
        }
      />
      <AnimatePresence key={'animated'}>
      <motion.div   {...anim(boxBanner)} className="boxes">
        {boxesContent.map((element, i) => (
          <motion.div
            className="notreMissionBox"
       variants={boxAni}
          >
         
            <Box key={i} imgSrc={element.imgSrc}>
              {element.children}
            </Box>
          </motion.div>
        ))}
      </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default NotreMission;
