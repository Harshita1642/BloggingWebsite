import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './query.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Query = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gxjknga', 'template_gwr2v9n', form.current, {
        publicKey: 'bm7M66yzh3g-0ROmJ',
      })
      .then(
        () => {
          console.log('Message sent successfully..');
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Error try again");
        },
      );
  };
  return (
    <>
    <div className='sec-4'>
        <div className='anyQuery'>
            <h1>Email For Any Query</h1>
            <p>At BytePost, we value our readers and are here to assist you with any inquiries or concerns you may have. Whether you need help navigating our website, have questions about our content, or want to provide feedback, our dedicated support team is ready to help.</p>
        </div>
    <div className='queryform'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <br></br>
      <input type="text" name="user_name" placeholder='Name'/>
      <br></br>
      <label>Email</label>
      <br></br>
      <input type="email" name="user_email" placeholder='Email' />
      <br></br>
      <label>Message</label>
      <br></br>
      <textarea name="message" />
      <br></br>
      <input type="submit" value="Send" className='submit-btn'/>
      <ToastContainer />
    </form>
    </div>
    </div>
    </>
  )
}

export default Query
