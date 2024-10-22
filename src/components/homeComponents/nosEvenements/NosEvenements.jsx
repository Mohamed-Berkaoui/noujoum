import "./nosEvenements.scss";
import HomeSectionTitle from "../homeSectionTitle/HomeSectionTitle";
import Box from "./box/Box";
import creationTheatraleImg from "../../../assets/home/CRÉATION THÉÂTRALE_edited.jpg";
import EvenmentArabeImg from "../../../assets/home/ÉVÉNEMENTS arabe_edited.jpg";
import EvenmentEtrangerseImg from "../../../assets/home/ÉVÉNEMENTS ÉTRANGERS_edited.jpg";
import {AnimatePresence, motion} from "framer-motion"
import { anim, boxAni, boxBanner } from "../header/animation";
const boxesContent = [
  {
    imgSrc: creationTheatraleImg,
    title: "CRÉATION THÉÂTRALE",
    description:
      "Mise en scène de prestations artistiques et culturelles de qualité.",
    buttonText: "Théâtre",
  },
  {
    imgSrc: EvenmentEtrangerseImg,
    title: "ÉVÉNEMENTS ÉTRANGERS",
    description:
      "Mise en scène de prestations artistiques et culturelles de qualité.",
    buttonText: "International",
  },
  {
    imgSrc: EvenmentArabeImg,
    title: "ÉVÉNEMENTS ARABES",
    description:
      "Mise en scène de prestations artistiques et culturelles de qualité.",
    buttonText: "Événts arabes",
  },
];
function NosEvenements() {
  return (
    <div className="nos-evenements">
      <HomeSectionTitle
        title={"Nos Evenements"}
        description={
          "Découvrez les moments les plus mémorables avec notre expertise événementielle!"
        }
        key={'evrnmrnt'}
      />
      <AnimatePresence>
      <motion.div {...anim(boxBanner)} className="boxes">
        {boxesContent.map((element,i) => (
         <motion.div key={i} variants={boxAni} >
           <Box
            image={element.imgSrc}
            title={element.title}
            description={element.description}
            buttonText={element.buttonText}
          />
         </motion.div>
        ))}
 
      </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default NosEvenements;
