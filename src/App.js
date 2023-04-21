
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Layout from './components/layout/Layout';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home'
import Footer from './components/Footer';
import Services from './components/Services'


function App() {
  return(
    <div>
      <BrowserRouter>
      <Sidebar/>
      {/* <Layout/> */}
         <Routes> 
          <Route exact path="/"      element={<Home />}> </Route>
          <Route exact path="/about" element ={<About/>}></Route>
          <Route  path='/contact' element= {<Contact/>}></Route>
          <Route exact path='/services' element={<Services/>}></Route>
          <Route exact path='/portfolio' element = {<Portfolio/>}></Route>
         </Routes>
   </BrowserRouter>
   <Footer/>
   </div>
     )
}

export default App;
