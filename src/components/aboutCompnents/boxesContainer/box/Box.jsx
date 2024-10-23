import "./box.scss";
import {motion} from "framer-motion"
function Box({ event }) {

  return (
    <motion.div initial={{opacity:0,y:80}} whileInView={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}} className="about-box">
      <div className="rotate">
        <img src={event.imgSrc} alt="" />
        <div className="more-infos">
          <p>plus d'informations :</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </div>

        <div className="infos">
          <img src={event.imgSrc} alt="" />
          <section>
            <button>Voir Video</button>
            <p>{event.location}</p>
            <h4> {event.artiste} </h4>
            <h5>{event.date} </h5>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default Box;
