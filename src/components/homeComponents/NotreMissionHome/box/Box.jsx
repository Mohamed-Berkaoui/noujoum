import "./box.scss"

function Box({ children, imgSrc }) {
  return (
    
        <div>
      <img src={imgSrc} alt="" />
      {children}
      </div>
  );
}

export default Box;
