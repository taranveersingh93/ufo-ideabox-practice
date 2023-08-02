import './App.css';
import SightingsContainer from '../SightingsContainer/SightingsContainer';
import Form from '../Form/Form';
import { useEffect, useState } from 'react';

const App = () => {
  const [sightings, setSightings] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/sightings')
      .then(response => response.json())
      .then(data => {
        setSightings(data)})
  }, [])

  const postSighting = (sightingData) => {
    fetch('http://localhost:3001/sightings', {
      method: 'POST',
      body: JSON.stringify(sightingData),
      headers: {
        "Content-type": "application/json"
      }
    }).then((response) => response.json())
    .then(newSighting => {
      setSightings([...sightings, newSighting])
    })
  }

  return (
    <section className='full-page'>
      <h1>UFO Sightings</h1>
        <Form postSighting={postSighting}/>
        <SightingsContainer sightings={sightings}/>
    </section>
  )
}

export default App;
