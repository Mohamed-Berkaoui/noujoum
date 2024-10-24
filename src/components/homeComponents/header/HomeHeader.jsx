import Button from "../../button/Button";
import "./homeHeader.scss";
import { banner, letterAni, text, anim } from "./animation";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "../../aboutCompnents/header/slider/Slider";
function HomeHeader() {
  return (
    <AnimatePresence >
      <motion.div className="homeHeader">
        <motion.div className="header">
          <motion.h2 {...anim(banner)}>
            <motion.p>
              {[...text.Noujoum].map((letter, i) => (
                <motion.span key={i} variants={letterAni}>
                  {letter}
                </motion.span>
              ))}
            </motion.p>
            &nbsp;
            <motion.p>
              {[...text.Ben].map((letter, i) => (
                <motion.span key={i} variants={letterAni}>
                  {letter}
                </motion.span>
              ))}
            </motion.p>
            &nbsp;
            <motion.p>
              {[...text.Ammar].map((letter, i) => (
                <motion.span key={i} variants={letterAni}>
                  {letter}
                </motion.span>
              ))}
            </motion.p>
            &nbsp;
          </motion.h2>
 
          <motion.p initial={{y:70,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8,delay:0.2}} >
            Fort d'une expérience artistique distinguée de près de 40 ans, nous
            sommes une entreprise éminente engagée dans l'enrichissement du
            paysage culturel tunisien. Nous avons marqué notre présence par la
            production de plus de 10 pièces de théâtre, l'organisation de
            concerts mettant en vedette des artistes de renom, et une
            participation active aux festivals tant nationaux qu'internationaux,
            dont le prestigieux Festival de Carthage. Au-delà de la célébration
            d'occasions spéciales, nous animons des croisières et assurons la
            gestion professionnelle de restaurants et cafés. Explorez avec nous
            un héritage artistique et culturel d'excellence, façonné par notre
            engagement inébranlable envers l'art et la qualité.
          </motion.p>
          {/* <Button /> */}
        </motion.div>
        <Slider/>

        <div className="overlay"/>

        <div className="shadow" />
        <div className="shadow2" />

      </motion.div>
    </AnimatePresence>
  );
}

export default HomeHeader;
