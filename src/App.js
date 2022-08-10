import "./styles/Main.css";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Skills from './component/Skills';
import profile from './Images/profile.png';
import Contact from './component/Contact';
import React from 'react';
import Projects from './component/Projects';
import Workprofile from "./component/workProfiles";
class App extends React.Component {
  render(){
    return (
      <div className='App'>
      <Router>
          <Navbar/>
          <span className='background'></span>
          <img src={profile} alt="profile" className="profile"></img>
          <Routes>
            <Route path="/" element={<Home/>} className="active"/>
            <Route path="/skills" element={<Skills/>} className="active"/>
            <Route path="/contact" element={<Contact/>} className="active"/>
            <Route path="/projects" element={<Projects/>} className="active"/>
            <Route path="/workprofiles" element={<Workprofile/>} className="active"/>
          </Routes>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
