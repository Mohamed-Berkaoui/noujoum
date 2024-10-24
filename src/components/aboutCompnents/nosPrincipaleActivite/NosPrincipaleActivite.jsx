import "./nosPrincipaleActivite.scss";
import {motion} from "framer-motion"
function NosPrincipaleActivite() {
  return (
    <motion.div initial={{y:40,opacity:0}}  animate={{y:0,opacity:1}} transition={{delay:0.9,duration:0.4}} className="nos-principale-activite">
      <h4> Principales Activités  :</h4>
      <ol type="1">
        <li>Production et distribution de pièces de théâtre.</li>
        <li>
          Organisation de concerts lors des festivals, mettant en vedette les
          meilleurs chanteurs tunisiens et étrangers.
        </li>
        <li>
          Participation à l'ouverture d'événements et festivals tels que
          Carthage, Sousse, El Jem, et les Journées Cinématographiques de
          Carthage (JCC).
        </li>
        <li>
          Organisation d'événements privés tels que fêtes d'anniversaire,
          mariages et conférences.
        </li>
        <li>
          Animation de croisières, avec trois événements réalisés en
          collaboration avec la Société Tunisienne de Navigation.
        </li>
        <li>Location et exploitation de restaurants et cafés</li>
      </ol>
    </motion.div>
  );
}

export default NosPrincipaleActivite;
