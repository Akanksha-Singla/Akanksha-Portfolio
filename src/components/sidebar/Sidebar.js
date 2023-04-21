import React from 'react'
// import './Sidebar.scss';
import './sidebar2.scss';
import { useState } from 'react';
import logo1 from '../../images/logo1.jpeg'
import { Link, NavLink } from 'react-router-dom';
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
    faServicestack,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

const[openMenu,setopenMenu]=useState(false)

    return (
        <div className='nav-bar'>
        <div className='brandName'>Akanksha</div>
            <nav className={openMenu?'responsiveBar':"noclass"}>
             <a href="#" class="toggleBtn" onClick={()=>{
                console.log("value of oopen ",openMenu);
                if(openMenu === false)
               {setopenMenu(true);} 
               else{
                setopenMenu(false);
                console.log("value of oopen ",openMenu);
               }
                }}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
             </a>
             <div className={openMenu?"active":"navbarLinks"}>
                 <NavLink exact="true" activeclassname="active " to="/">
                <div className='menu'> 
                <span><FontAwesomeIcon icon={faHome} color="#4d4d4e" /> </span>
                <span>Home</span>
                </div>
                </NavLink>
                <NavLink activeclassname="active" className="about-link " to="/About" >
                <div className='menu'>  
                <span><FontAwesomeIcon icon={faUser} color="#4d4d4e" /></span>
                 <span>  About Me </span></div> 
                </NavLink>
                <NavLink activeclassname="active" className="about-link " to="/Services" >
                <div className='menu'>  
                <span><FontAwesomeIcon icon={faServicestack} color="#4d4d4e" /></span>
                 <span>  Services </span></div> 
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="portfolio-link menu"
                    to="/portfolio">
             <div> 
                <span><FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" /> </span>
                <span>Portfolio</span>
             </div>
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/Contact"
                >
               <div className='menu'>
                <span> <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/> </span>
              <span>Contact us</span></div>
                </NavLink>
                </div>
                </nav>
             </div>

    )
}

export default Sidebar
