import "./contactForm.scss";
import iconPhone from "../../../../assets/home/bxs_phone-call.png";
import iconMail from "../../../../assets/home/ic_sharp-email.png";
import iconLocation from "../../../../assets/home/carbon_location-filled.png";
import {motion} from "framer-motion"

function ContactForm() {
  return (
    <motion.div initial={{opacity:0,y:80}} whileInView={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}} className="home-contact-form">
      <div className="infos">
        <div className="cordonnees">
          <h3>Coordonnées</h3>
          <p>Envoyez-nous votre défi</p>
        </div>
        <div className="addreesses">
          <p>
            <img src={iconPhone} alt="" />{" "}
            <span>+216 71 676 569 / +216 92 621 622 / +216 26 621 622</span>{" "}
          </p>
          <p>
            <img src={iconMail} alt="" /> <span>noujoumbenammar@gmail.com</span>{" "}
          </p>
          <p>
            <img src={iconLocation} alt="" /> <span>Manouba, Tunisia</span>{" "}
          </p>
        </div>
        <main className="big-circle" />
        <main className="small-circle" />
      </div>
      <form>
        <div className="inputbox">
          <label htmlFor="">Prénom</label>
          <input type="text" name="prenom" placeholder="tape votre prenom ..." required />
        </div>
        <div className="inputbox">
          <label htmlFor="">Nom</label>
          <input type="text" name="nom" placeholder="tape votre nom ..." required />
        </div>
        <div className="inputbox">
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder="tape votre email ..." required />
        </div>
        <div className="inputbox">
          <label htmlFor="">Telephone</label>
          <input type="number" name="telephone" placeholder="tape votre nmero du ......" required />
        </div>
        <div className="textearaBox">
          <label htmlFor="">Sujet</label>
          <textarea
            name="message"
            placeholder="Écrivez votre message.."
            id=""
          ></textarea>
        </div>
          <button>Envoyer le message</button>
      </form>
    </motion.div>
  );
}

export default ContactForm;
