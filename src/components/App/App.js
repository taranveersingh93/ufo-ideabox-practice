import './App.css';
import SightingsContainer from '../SightingsContainer/SightingsContainer';
import { useEffect, useState } from 'react';

const App = () => {
  const [sightings, setSightings] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/sightings')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSightings(data)})
  }, [])

  return (
    <section className='full-page'>
      <h1>UFO Sightings</h1>
      <SightingsContainer sightings={sightings}/>
    </section>
  )
}

export default App;
