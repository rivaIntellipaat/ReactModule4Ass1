import React, { useState } from 'react';
import side from './assests/side.png'
import icons from './assests/icons.png'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email is not valid';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(`Submitted Information:\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nFeedback: ${formData.feedback}`);
      console.log(formData);
  
      setFormData({
        name: '',
        email: '',
        subject: '',
        feedback: '',
      });
    }
  };

  return (
    <div  className=' flex inter justify-between bg-[#EBEFFF] ' >
   
      <div className=' flex flex-col justify-center items-center w-[40vw]'>
      <h2 className=' font-bold  text-[36px] mb-6'>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
       <br/>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </label>
        </div>
        <div>
          <label>
            Email:
            <br/>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </label>
        </div>
        <div>
          <label>
            Subject:
            <br/>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Feedback:
            <br/>

            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        <div className=' flex justify-center '>
        <img  src={icons} alt=" " />

        </div>
      </form>

      </div>

      <div>
        <img className=' h-screen w-[700px] ' src={side} alt=""/>
      </div>
 
    </div>
  );
}

export default App;