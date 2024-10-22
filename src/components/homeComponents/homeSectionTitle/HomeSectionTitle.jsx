import "./sectionTitle.scss"
import logoNoujoum from "../../../assets/home/logonoujoum.png";

function HomeSectionTitle({  title, description }) {
  return (
    <div className="home-section-title">
      <img src={logoNoujoum} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default HomeSectionTitle;
