import { motion } from "framer-motion";
import Header from "../../components/aboutCompnents/header/Header";
import NosPrincipaleActivite from "../../components/aboutCompnents/nosPrincipaleActivite/NosPrincipaleActivite";
import BoxesContainer from "../../components/aboutCompnents/boxesContainer/BoxesContainer";
// import imgCart1 from "../../assets/A propos/img1.webp";
import imgCart2 from "../../assets/A propos/img2.jpg";
import imgCart3 from "../../assets/A propos/img3.jpg";
import imgCart4 from "../../assets/A propos/img4.jpg";
import imgCart5 from "../../assets/A propos/img5.jpg";
import imgCart6 from "../../assets/A propos/img6.jpg";
import imgCart7 from "../../assets/A propos/img7.jpg";
import imgCart8 from "../../assets/A propos/img8.jpg";
import imgCart9 from "../../assets/A propos/img9.jpg";
import imgCart10 from "../../assets/A propos/img10.jpg";
import imgCart11 from "../../assets/A propos/img11.jpg";

const events = [
  {
    imgSrc: imgCart2,
    location: "Festival international de Hammamet.",
    artiste: "QUEEN OMEGA",
    date: "Vendredi 11 août 2023  ",
    video: "",
  },
  {
    imgSrc: imgCart3,
    location: "Festival d'Hammamet",
    artiste: "Gloria Gaynor",
    date: "2023 ",
    video: "",
  },
  {
    imgSrc: imgCart4,
    location: "Festival international de Carthage",
    artiste: "Alpha Blondy ",
    date: "2022 ",
    video: "",
  },
  {
    imgSrc: imgCart5,
    location: "Festival International de Carthage",
    artiste: "YASMINE ALI ET ABU",
    date: "Mardi 17 juillet 2018 ",
    video: "",
  },
  {
    imgSrc: imgCart6,
    location: "Festival international de hammamet",
    artiste: "MARCEL KHALIFA",
    date: "Jeudi 26 juillet 2018 ",
    video: "",
  },
  {
    imgSrc: imgCart7,
    location: "Festival tunisie",
    artiste: "Le Cirque de Glace de Peter Pan en Tunisie",
    date: "Les 19 et 20 août  2018 ",
    video: "",
  },

  {
    imgSrc: imgCart8,
    location: "Concert Hammamet ",
    artiste: "Kool and the Gang",
    date: "2014",
    video: "",
  },
  {
    imgSrc: imgCart9,
    location: "Festtival Eljem ",
    artiste: "Les 100 violons",
    date: "2012",
    video: "",
  },
  {
    imgSrc: imgCart10,
    location: "Concert Practice Tunis ",
    artiste: "Googoosh",
    date: "2012",
    video: "",
  },
  {
    imgSrc: imgCart11,
    location: "Festival International de Carthage ",
    artiste: "Concert de Cheb Khaled",
    date: "09 aout 2009",
    video: "",
  },
];

function About() {
  return (
    <div className="about-page">
      <Header />
      <NosPrincipaleActivite />
      <BoxesContainer date={2023} events={[events[0], events[1]]} />
      <BoxesContainer date={2022} events={[events[2]]} />
      <BoxesContainer date={2018} events={[events[3], events[4], events[5]]} />
      <BoxesContainer date={2014} events={[events[6]]} />
      <BoxesContainer date={2012} events={[events[7], events[8]]} />
      <BoxesContainer date={2009} events={[events[9]]} />
    </div>
  );
}

export default About;
