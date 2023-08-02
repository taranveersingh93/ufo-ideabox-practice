import { useState } from 'react';
import './Form.css';

const Form = ({postSighting}) => {
  const [formData, setFormData]  = useState({location: '', description: ''});

  const handleChange = (e) => {
    const newData = {...formData};
    newData[e.target.name] = e.target.value;
    setFormData(newData);
  }

  const submitForm = (e) => {
    e.preventDefault();
    postSighting(formData);
    setFormData({location:'', description:''})
  }

  return (
    <form className='sightings-form' onSubmit={(e) => submitForm(e)}>
      <input placeholder="Location" className='location-input' type='text' name='location' value={formData.location} onChange={(e) => handleChange(e)}/>
      <input placeholder="Description"className='description-input' type='text' name='description' value={formData.description} onChange={(e) => handleChange(e)}/>
      <button className='submit-btn'>Sighted!</button>
    </form>
  )
}

export default Form;