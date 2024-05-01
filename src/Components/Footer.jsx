import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='footer-section'> 
        <div className='footer-box'>
            <div className='About-web'>
                <h1>ByteP<i className="fa-solid fa-pen-to-square"></i>st</h1>
                <p>BytePost: Where Ideas Take Flight. Dive into a world of captivating narratives, insightful analysis, and diverse perspectives. From tech innovations to lifestyle hacks, our curated content fuels your curiosity and inspires creativity. Join our community of avid readers and writers, and embark on a journey of discovery with BytePost.</p>
            </div>
            <div className='footer-info'>
                <div className='table1'>
                    <ul>
                        <h2>Usefull Links</h2>
                        <li>contant</li>
                        <li>How it works</li>
                        <li>create</li>
                        <li>Explore</li>
                        <li>Terms & Services</li>
                    </ul>
                </div>
                <div className='table1'>
                    <ul>
                        <h2>Community</h2>
                        <li>Help Center</li>
                        <li>Parterns</li>
                        <li>Suggestions</li>
                        <li>Blog</li>
                        <li>Newsletters</li>
                    </ul>
                </div>
                <div className='table1'>
                    <ul>
                        <h2>Partner</h2>
                        <li>Our partner</li>
                        <li>Become a partner</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='line'></div>
        <p className='copywrite'>Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer
