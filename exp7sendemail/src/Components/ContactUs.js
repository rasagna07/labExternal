import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactMessage: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_93ltfwb', 
      'template_0ednetk', 
      formData,
      'GrSAnfoPNPcrWAsf7' 
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
      setFormData({ contactName: '', contactEmail: '', contactMessage: '' });
    }, (error) => {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div>
   
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="contactName">Name</label>
          <input 
            type="text" 
            id="contactName" 
            placeholder="Enter your name" 
            value={formData.contactName} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="contactEmail">Email address</label>
          <input 
            type="email" 
            id="contactEmail" 
            placeholder="Enter your email" 
            value={formData.contactEmail} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="contactMessage">Message</label>
          <textarea 
            id="contactMessage" 
            rows="6" 
            placeholder="Enter your message" 
            value={formData.contactMessage} 
            onChange={handleChange} 
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
     
    </div>
  );
}

export default ContactUs;
