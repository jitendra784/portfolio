import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, createRoutesFromElements } from 'react-router-dom';
import React from 'react'
import Home from './header/home'
import About_us from './header/about_us'
import Service from './header/services'
import Team from './header/team';
import Test from './header/test'
import Contact from './header/contact'
import Project from './header/project'
import Nav from './header/nav'
import TeamSection from './header/team';
function App() {


  return (
    
    <div className='bg-neutral-900 text-white'>
      
    <Nav />
    <Home />
    <About_us/>
    <Service />
    <Project />
    <Team />
    <Test />
    <Contact />
    </div>
    
  )
}

export default App
