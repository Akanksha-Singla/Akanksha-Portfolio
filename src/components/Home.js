import React from 'react'
import About from './About';
import Contact from './Contact'
import Portfolio from './Portfolio'
import Layout from './layout/Layout';
import Sidebar from './sidebar/Sidebar';
import Services from './Services';


const Home = () => {
  return (
    <div>
      <Layout/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default Home
