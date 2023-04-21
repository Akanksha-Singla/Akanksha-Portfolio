import React from 'react'
import './about.scss'
import './Services.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import about from '../images/about.png'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import Sidebar from './sidebar/Sidebar'
const About = () => {
  
  return (
  
    <>
    
<div className='about'>
  <div className="upper">
    <div className="aboutText">
    <span>About Me</span>
    <span> 
    Welcome to my website! I'm a frontend developer with expertise in HTML5, CSS, JavaScript, and React. My passion is creating beautiful and intuitive user interfaces that deliver exceptional user experiences.

As a frontend developer, I understand the importance of clean and organized code that adheres to industry best practices. I take pride in my attention to detail and my ability to deliver high-quality work that meets the needs of my clients and exceeds their expectations.

Whether you need a new website or an overhaul of an existing one, I have the skills and expertise to deliver a solution that meets your needs. From responsive design to accessibility, I prioritize the user and ensure that every aspect of the website is optimized for their needs.

Please take a look at my portfolio to see some of my past work and feel free to reach out to me if you have any questions or would like to discuss a potential project. Thank you for visiting my website and I look forward to hearing from you soon!


    </span>
</div>
<div className='image'>
  <img src ={about}></img>
</div>
{/* <div className="upperRight">
<span>Services</span>
<div className="skills">
<div className='skillLogo'><img src={logo1}></img></div>
<div className='skillLogo'><img src={logo2}></img></div>
<div className='skillLogo'><img src={logo3}/></div>
<div><img src={logo5}/></div>
<div><img src={logo6}/></div>
</div>
</div> */}
</div>
  
</div>
      
    </>
  )
}

export default About
