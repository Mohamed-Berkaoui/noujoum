import "./nosEvenements.scss";
import HomeSectionTitle from "../homeSectionTitle/HomeSectionTitle";
import Box from "./box/Box";
import creationTheatraleImg from "../../../assets/home/CRÉATION THÉÂTRALE_edited.jpg";
import EvenmentArabeImg from "../../../assets/home/ÉVÉNEMENTS arabe_edited.jpg";
import EvenmentEtrangerseImg from "../../../assets/home/ÉVÉNEMENTS ÉTRANGERS_edited.jpg";

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
      <div className="boxes">
        {boxesContent.map((element,i) => (
          <Box key={i}
            image={element.imgSrc}
            title={element.title}
            description={element.description}
            buttonText={element.buttonText}
          />
        ))}
 
      </div>
    </div>
  );
}

export default NosEvenements;