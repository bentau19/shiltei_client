import React, { useState } from 'react';
import './ContactUs.css'; // Import your CSS file for styling
import Axios from 'axios';
import { getServerId } from '../../../localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
  const success_notify = (message) =>toast.success(message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });;
    const error_notify=(message)=>toast.error(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(getServerId() + "/send-feedback", { name:formData.name,email:formData.email
      ,subject:formData.subject,content:formData.content}).then((res)=>{
        if (res.status===200){
          if(res.data=="success"){
          success_notify("Thank you for contact us!!");
          }else{
            error_notify("internet connection error");  
          }
        }else{  
          error_notify("internet connection error");
        console.log("Try Again Later!")
      }
      })
    // You can handle form submission logic here, e.g., sending data to a server
    console.log('Form Data:', formData);
  };

  return (
    <div style={{marginBottom:"20px", marginTop:"-20px",width:"60%",float: "left"}} className="contact-us-container">
      <button onClick={()=>success_notify("Thank you for contact us!!")}>try</button>
      <form onSubmit={handleSubmit}>
        <div className="contact-us-form-group">
         
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-us-input"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="contact-us-form-group">
        
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-us-input"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="contact-us-form-group">
  
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="contact-us-input"
            placeholder="Subject"
            required
          />
        </div>
        <div className="contact-us-form-group">

          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="contact-us-textarea"
            placeholder="Your Message"
            required
          />
        </div>
        <button type="submit" className="contact-us-button">Send</button>
      </form>
      <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
/>
  <ToastContainer
  position="bottom-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  />
    </div>
  );
}

export default ContactUs;
