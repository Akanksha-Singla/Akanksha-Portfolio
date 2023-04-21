import React from 'react'
import './contact.scss'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactImg from '../images/contact-us-Asset1.svg'
import { faEnvelope, faLocation, faMapLocation, faMobile } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return (
    <>
    <div className='ContactImg'></div>
    <div className="contact">
      <div className="left">
          <h1>Get in touch</h1>
        <p> Hello and thank you for your interest in my front-end development services.

As a skilled front-end developer with a passion for creating visually appealing and user-friendly websites, I would be happy to discuss your project needs and how I can help you achieve your goals.

Please feel free to contact me via email or phone with any questions or project inquiries you may have. I am available for remote work and can accommodate a variety of project scopes and timelines.

I strive to provide prompt and reliable communication, and I look forward to hearing from you soon to discuss your project in more detail. 
<br></br>
Thank you for considering me for your front-end development needs.
<br></br>
<b>Best regards</b>
<br></br>

<b>Akanksha</b>
</p>


<div className='section'>
          <span><FontAwesomeIcon icon={faMapLocation} /></span>
          <span>
          Thane(400606), Mumbai
          </span>
        </div>
        <div className='section'><span><FontAwesomeIcon icon={faLinkedinIn} /> </span>
          <span>https://www.linkedin.com/in/akanksha-singla-723a67bb/
          </span></div>
        <div className='section'><span><FontAwesomeIcon icon={faGithub} /> </span>
          <span>   Akanksha-Singla (github.com)
          </span></div>
        <div className='section'><span><FontAwesomeIcon icon={faMobile} /> </span>
          <span>   9050606382
          </span></div>
        <div className='section'><span><FontAwesomeIcon icon={faEnvelope} /> </span>
          <span>  singla.akanksha92@gmail.com
          </span></div>
        </div>
      <div className="right">
       <h1>  Contact Form </h1>
       <h2>Please fill information</h2>
        <div className="contactForm">
<form action='https://formspree.io/f/meqwrpwq' method='POST'>
<div className='formLabel'>
<label>Name:</label>
<input type='text' name='username' placeholder='username' autoComplete='off' required></input>
</div>
<div className='formLabel'>
<label>Email:</label>
<input type='email' name='Email' placeholder='Email' autoComplete='off' required></input>
</div>
<div className='formLabel'>
<label>Number:</label>
<input type='Number' name='Phone' placeholder='Phone' autoComplete='off' required></input>
</div>
<div className='formLabel'>
<label>Message:</label>
<textarea name='message' cols={23} rows = {5}  autoComplete='off' placeholder='Messsage'required></textarea>
</div>
<div className='submitBtn'>
<input type='submit' className='btn' value='send'></input>
</div>

          </form>

        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
