import Box from "./box/Box"
import "./boxesContainer.scss"

function BoxesContainer({date,events}) {

  return (
    <div className='about-boxes-container'>
        <div className="banner">
            <div className='line'/>
            <h4>Noujoum ben ammar en {date}</h4>
        </div>
        <div className="boxes">
            {events.map((event,i)=><Box key={i} event={event}/>)}
        </div>

    </div>
  )
}

export default BoxesContainer