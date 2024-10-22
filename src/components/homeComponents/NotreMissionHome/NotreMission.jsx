import Box from "./box/Box";
import "./notreMission.scss";
import HomeSectionTitle from "../homeSectionTitle/HomeSectionTitle";

import imageBox1 from "../../../assets/home/theater (2) 1.png";
import imageBox2 from "../../../assets/home/microphone 1.png";
import imageBox3 from "../../../assets/home/world 1.png";
import imageBox4 from "../../../assets/home/stage 1.png";
import { motion } from "framer-motion";

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

function NotreMission() {
  return (
    <div className="notreMission">
      <HomeSectionTitle key={'mission'}
        title={"Notre mission"}
        description={
          "   Excellence événementielle : notre engagement à  créer des expériences inoubliables."
        }
      />
      <div className="boxes">
        {boxesContent.map((element, i) => (
      <motion.div className="notreMissionBox" initial={{top:50,opacity:0}} transition={{delay:0.1,duration:0.4}} whileInView={{top:0,opacity:1}}>  <Box key={i} imgSrc={element.imgSrc}>
      {element.children}
    </Box></motion.div>
        ))}
      </div>
    </div>
  );
}

export default NotreMission;
