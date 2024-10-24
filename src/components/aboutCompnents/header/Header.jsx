import "./header.scss";
import {motion} from "framer-motion"

function Header() { 
  return (
    <div className="about-header">
      <header>
        <motion.h4 initial={{y:40,opacity:0}}  animate={{y:0,opacity:1}} transition={{delay:0.8,duration:0.4}}>A PROPOS</motion.h4>
        <motion.p initial={{y:40,opacity:0}}  animate={{y:0,opacity:1}} transition={{delay:0.9,duration:0.4}}>
          Forte d'une expérience artistique qui s'étend sur près de quatre
          décennies, Noujoum Ben Ammar se positionne comme une entreprise
          éminente dédiée à l'enrichissement continu du paysage culturel
          tunisien. Notre empreinte significative se manifeste à travers la
          création soignée de plus de dix pièces de théâtre, la réalisation de
          concerts mettant en avant des artistes de renom, ainsi que notre
          participation active à des festivals, tant nationaux
          qu'internationaux, notamment le prestigieux Festival de Carthage.
        </motion.p>
      </header>
     <div className="shadow"/>
     <div className="shadow2"/>
    </div>
  );
}

export default Header;
