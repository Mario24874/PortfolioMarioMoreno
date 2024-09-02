import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import letraIcon from '../images/letra.png';
import './Form.css';
import '../App.css';

const Form = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '', // Ajustado para coincidir con el ejemplo
    user_email: '',
    message: '',    
  });
  const formRef = useRef();

  const toggleForm = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFieldClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const serviceID = 'service_xuq7s3h'; // Cambia esto por tu Service ID real
      const templateID = 'template_o41bvpk'; // Cambia esto por tu Template ID real
      const userID = 'sMxe6UVQQ9fu3NNNm'; // Cambia esto por tu User ID real

      const response = await emailjs.sendForm(
        serviceID,
        templateID,
        formRef.current,
        userID
      );

      if (response.status === 200) {
        console.log('Email sent successfully!');
        setFormData({ from_name: '', user_email: '', message: '', }); // Limpia los campos
        alert('Message sent successfully');
      } else {
        console.error('Error sending email:', response.text);
        alert('Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message');
    }
  };

  return (
    <div className={`container ${isExpanded? 'expanded' : ''}`} onClick={toggleForm}>
      <div className="container-header">
        <img src={letraIcon} alt="Contact" /> Contact me
      </div>
      {isExpanded && (
        <div className="form-container" onClick={handleFieldClick}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                value={formData.from_name}
                onChange={(e) => setFormData({...formData, from_name: e.target.value })}
              />
            </div>
            
            <div className="field">
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                value={formData.user_email}
                onChange={(e) => setFormData({...formData, user_email: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value })}
              ></textarea>
            </div>
            
            <input type="submit" id="button" value="Send mail" />
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
