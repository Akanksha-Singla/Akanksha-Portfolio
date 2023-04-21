import React from 'react'
import './Services.scss'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
const Services = () => {
  return (
    <div>
<div className="upperRight">
<span>Services</span>
<div className="skills">
<div className='skillLogo'><img src={logo1}></img></div>
<div className='skillLogo'><img src={logo2}></img></div>
<div className='skillLogo'><img src={logo3}/></div>
<div><img src={logo5}/></div>
<div><img src={logo6}/></div>
</div>
</div> 
</div>
  )
}

export default Services
