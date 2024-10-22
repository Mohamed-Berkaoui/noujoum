import "./header.scss";
import Slider from "./slider/Slider";

function Header() {
  return (
    <div className="about-header">
      <header>
        <h4>A PROPOS</h4>
        <p>
          Forte d'une expérience artistique qui s'étend sur près de quatre
          décennies, Noujoum Ben Ammar se positionne comme une entreprise
          éminente dédiée à l'enrichissement continu du paysage culturel
          tunisien. Notre empreinte significative se manifeste à travers la
          création soignée de plus de dix pièces de théâtre, la réalisation de
          concerts mettant en avant des artistes de renom, ainsi que notre
          participation active à des festivals, tant nationaux
          qu'internationaux, notamment le prestigieux Festival de Carthage.
        </p>
      </header>
      <Slider/>
    </div>
  );
}

export default Header;
