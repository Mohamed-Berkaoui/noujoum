import Button from "../../../button/Button";
import "./box.scss";
import arrowIcon from "../../../../assets/home/Back Arrow.png"

function Box({ image, title, description, buttonText }) {
  return (
    <div className="nosEvenmentBox">
      <img src={image} alt="" />
    <div className="elements">
    <h3>{title}</h3>
      <p>{description}</p>
      <button>{buttonText} <img src={arrowIcon} alt="" /></button>
    </div>
    <div className="shadow"/>
    </div>
  );
}

export default Box;
