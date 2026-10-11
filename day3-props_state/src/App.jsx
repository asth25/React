import React from 'react'
import Contact from './Contact'
import Something, { two, one } from './test'
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';

const App = () => {
  two();
  one()

  return (
    <div style={{backgroundColor: 'lightblue'}}>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
