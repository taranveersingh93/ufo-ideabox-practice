import './Sighting.css';

const Sighting = ({id, location, description}) => {
  return (
    <div className='sighting-card' id={id}>
      <p>Location: {location}</p>
      <p>Description: {description} </p>
    </div>
  )
}

export default Sighting