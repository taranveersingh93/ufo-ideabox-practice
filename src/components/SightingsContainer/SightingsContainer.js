import Sighting from "../Sighting/Sighting";
import './SightingsContainer.css';

const SightingsContainer = ({sightings}) => {
  const sightingsCode = sightings.map(sighting => {
   return (
    <Sighting location={sighting.location} description={sighting.description} id={sighting.id} key={sighting.id}/>
   ) 
  })
  
  return (
    <div className="sightings-container">
      {sightingsCode}
    </div>
  )
}

export default SightingsContainer;
