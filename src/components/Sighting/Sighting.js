import './Sighting.css';

const Sighting = ({id, location, description}) => {
  return (
    <div className='sighting-card'>
      <p>Location: {location}</p>
      <p>Description: {description} </p>
    </div>
  )
}

export default Sighting