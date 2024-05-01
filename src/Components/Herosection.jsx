import React, {useReF} from 'react'
import './herosection.css'
import video from '../assets/clip1.mp4.webm'
import image1 from '../assets/image1.jpg'
import Container from './Container'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'
const Herosection = () =>{
  return (
    <>  <div>
        <div className='herosec'>
        <h1 className='heading'>Blog With the best</h1>
        <p className='desc'>More bloggers and independent creators choose WordPress than any other blogging tool.<br /> Tap into intuitive, flexible tools that put writers, bloggers, and creators first.</p>
        <Link to='/Postcreateform'><button className='startbtn'>Start Blog</button></Link>
        <div className='frame'>
            <div className='insideframe'>
            <video src={video} autoPlay={true} loop={true} muted className='insideframe'/>
            </div>
        </div>
        <div className='section2'>
          <div className='box'>
            <div className='box1'>
        <h1 className='title1'>Simple meets Flexible</h1>
        <p className='info'>Whatever you’re publishing. Whoever your audience is. WordPress.com makes it <br / >simple to get started. And easy to expand your site as your audience grows.</p>
        <button className='writingbtn'>
          start writing
        </button>
        </div>
        <div className='box2'></div>
        </div>
        </div>
        </div>
        </div>
    </>
  );
}

export default Herosection
