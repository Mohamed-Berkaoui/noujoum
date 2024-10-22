
import './slider.scss'; 

function SliderBox({ imgSrc, name }) {
  return (
    <div className='home-slider-box'>
      <img src={imgSrc} alt={name} />
   
        <aside className="backgroundbox" />
        <p>{name}</p>
    
    </div>
  );
}

export default SliderBox;
