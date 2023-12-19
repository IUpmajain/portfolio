import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3g7v4bo', 'template_45yt6ug', form.current, 'f9NSME07YFMpPnH8b')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert("message successfully sent!!")
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='container mt-5 d-flex  flex-column justify-content-center align-items-center' id='contact'>
    <h1 className='fw-bold mt-4 overflow-sm-hidden'>Contact Me</h1>
     <form className='d-flex flex-column justify-content-center align-items-center w-75 text-white ' ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder='Your name' className='inp form-control  bg-transparent text-white mt-3' name='your_name'/>
        <input type="email" placeholder='your email'className='inp form-control  bg-transparent text-white mt-3' name='your_email' />
        {/* <input type="number" placeholder='your number'className='inp form-control mt-1 bg-transparent text-white mt-3' /> */}
        <textarea name="message"  rows="5" placeholder='your message'className='inp form-control mt-1 bg-transparent mt-3 text-white' ></textarea>
        <button type='submit' className="btn btn-success fw-bold w-25 mt-4" value={"Send"}>Submit</button>
        </form> 


    </div>
  )
}

export default Contact
