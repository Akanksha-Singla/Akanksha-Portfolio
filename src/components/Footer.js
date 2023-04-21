import { faFacebook, faGithub, faLinkedinIn, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import React from 'react'

import './Footer.scss'
import { faMobileButton, faMobilePhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    // '#4d4d4e'
    <>
<footer class="page-footer font-small pt-4 " style={{backgroundColor:"#0E4931"}}>

  {/* <!-- Footer Links --> */}
  <div class="container-fluid text-center text-md-left">

    {/* <!-- Grid row --> */}  
    <div class="row">

      {/* <!-- Grid column --> */}
      {/* <div className="col-md-6 mt-md-0 mt-3"> */}
<div>
        {/* <!-- Content --> */}
        <h5 className="text-uppercase center" >Web Developer</h5>
        <p style={{color:"white"}}  className='center'>"Proficient in a range of web development technologies, including HTML5, CSS, JavaScript, and React."</p>

      </div>
      {/* <!-- Grid column --> */}
       <div >        
        <ul className="list-unstyled icon">
          <li>
            <a href="#!"></a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send/?phone=9050606382&text=Hi%2C+I+%27m+interested+in+Painting+class"><span><FontAwesomeIcon icon={faMobileButton}style={{color:'white'}}/></span></a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send/?phone=9050606382&text=Hi%2C+I+%27m+interested+in+Painting+class"><span><FontAwesomeIcon icon={faWhatsapp} style={{color:'white'}}/></span></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/akanksha-singla-723a67bb/" target='_blank'><span><FontAwesomeIcon icon={faLinkedinIn} style={{color:'white'}} /></span></a>
          </li>
          <li>
            <a href="https://github.com/Akanksha-Singla" target='_blank'><span><FontAwesomeIcon icon={faGithub} style={{color: 'white' }}/></span></a>
          </li>
        </ul>
        </div>

      
  <div class="footer-copyright text-center py-3" style={{background:'#0e4925' }}>© 2020 Copyright:
    <a href="/"> MDBootstrap.com</a>
  </div>
  </div>
  </div>
  {/* <!-- Copyright --> */}

</footer>
    </>
  )
}

export default Footer
