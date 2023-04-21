import React from 'react'
import { NavLink } from 'react-router-dom'
import './Layout.scss'
import homeImg from '../../images/homeImg.svg'
import './AkankshaSinglaResume.pdf'
// 
const Layout = () => {
  //using local host
// const pdf_url = "http://localhost:52108/AkankshaSinglaResume.pdf"
  // const download = (url)=>{
  //   const fileName=url.split("/").pop();
  
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.setAttribute("download", fileName);
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  //   console.log("clicked");
  // }
const url="./AkankshaSinglaResume.pdf"
  const download = (url)=>{
     const fileName = url.split("/").pop();
     const aTag = document.createElement("a");
      aTag.href = url ;
      aTag.setAttribute("download", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
      console.log("clicked");
    }
  

  return (
    <>
     <div className="intro">
      <div className="iLeft">
        <div className="iName">
          <span>Hey! I am</span>
          <span>Akanksha</span>
          <span>Frontend developer<br></br> 
             experience in
             high level of<br></br>
             web desiging and development
             producing the quality work </span> 
          <span><button  onClick ={()=>{download(url)}}className='btn btnCV'>Download CV</button></span> 
      </div>
      </div>
      <div className="iRight"> 
        <img src={homeImg} alt="INTRO image" className='animation'></img>
      </div>
     </div>
     </>
  )
}

export default Layout
