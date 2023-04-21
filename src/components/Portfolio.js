import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Portfolio.scss'
import textUtils from '../images/textUtils.jpg';
import postman from '../images/postman.jpg';
import newsapp from '../images/News app.png';


const Portfolio = () => {
  return (
    <>  
     <div className='portfolio'>
      
      <div className="lower">
    <div>
      <h1>Projects Completed</h1>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}

      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
    >
      
 <SwiperSlide><div className="card">
  <a href='https://github.com/Akanksha-Singla/TextUtils' target='_blank'> 
  <img src={textUtils} alt="Avatar" style={{width:"100%"}}/> </a>
 
       <div className="container">
    <h4><b>Text Utils</b></h4>
    <p>is a web-based text manipulation tool that allows users to perform various operations on text such as removing extra spaces, converting text case, and generating random passwords. The project was built using HTML, CSS, and JavaScript</p>
  </div>
</div>
         </SwiperSlide>
         <SwiperSlide><div className="card">
<a href='https://github.com/Akanksha-Singla/News-Now' target='_blank'>  <img src={newsapp} alt="Avatar" style={{width:"100%"}}/> </a>
       <div className="container">
    <h4><b>News-Now App</b></h4>
    <p>Project implemented with the concepts of fetching APIs from third party, state component of react, react router dom to navigate among news categories. This website has different cards for all news categories and each card has its own picture, headline, content etc. along with “Read More” button to know more details about the selected category.</p>
    </div>
</div>
         </SwiperSlide>
         <SwiperSlide><div className="card">
          <a href='https://github.com/Akanksha-Singla/Postman-clone' target='_blank'>
             <img src={postman} alt="Avatar" style={{width:"100%"}}/></a>
 
       <div className="container">
    <h4><b>PostMan Clone</b></h4>
    <p> PostMan Clone is a web-based application that allows users to send HTTP requests to APIs and view the responses. The app was built using HTML, CSS, and JavaScript, and it uses the Fetch API to make HTTP requests to APIs. Some of the features of the Postman clone app include support for multiple HTTP methods, URL parameters, request headers, and response types. The app is a great example of how to build a real-world web application that interacts with APIs using modern web development technologies.</p>
  </div>
</div>
         </SwiperSlide>
</Swiper>
    
      </div>
   </div>  
    </div>
    </>
 
  )
}

export default Portfolio
