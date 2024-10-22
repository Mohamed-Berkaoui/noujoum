import "./richesseNotreCultureHome.scss";
import HomeSectionTitle from "../homeSectionTitle/HomeSectionTitle";
import image from "../../../assets/home/image1.webp"
function RichesseNotreCultureHome() {
  return (
    <div className="richesse-section">
      <HomeSectionTitle
        title={"La richesse de notre culture"}
        description={"Chaque moment est une célébration unique"}
        key={'richesse'}
      />
      <div className="flex">
        <div className="right">
          <p>
            Notre culture événementielle se caractérise par une passion
            inébranlable pour la création d'expériences mémorables et un
            engagement indéfectible envers l'innovation et l'excellence
          </p>
        </div>
        <img src={image} alt="" className="left" />
      </div>
    </div>
  );
}

export default RichesseNotreCultureHome;
