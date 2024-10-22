import HomeSectionTitle from "../homeSectionTitle/HomeSectionTitle"
import "./nosCollaborationsArtistiques.scss"
import BoxSlider from "./slider/Slider"
function NosCollaborationsArtistiques() {
  return (
    <div className='nosCollaborationsArtistiques'>
        <HomeSectionTitle key={'collaborations'} description={"Nos collaborations artistiques donnent vie à vos événements avec éclat"} title={"Nos collaborations artistiques"}/>
    <BoxSlider/>
    </div>
  )
}

export default NosCollaborationsArtistiques