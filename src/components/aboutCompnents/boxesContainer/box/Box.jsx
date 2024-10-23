import "./box.scss";
import arrowIcon from "../../../../assets/home/Back Arrow.png";

function Box({ event }) {
  // {
  //   imgSrc: imgCart11,
  //   location: "Festival International de Carthage ",
  //   aritist: "Concert de Cheb Khaled",
  //   date: "09 aout 2009",
  //   video: "",
  // },
  return (
    <div className="about-box">
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
    </div>
  );
}

export default Box;
