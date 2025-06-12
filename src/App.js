// App.js
import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.css'; 
import Home from './components/home/home';
import AboutSection from './components/about/about';
import Worksection from './components/works/works';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      
      <section id="home">
        <Home />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="works">
        <Worksection />
      </section>
      <section id="contact">
        <Footer />
      </section>
      
      
    </div>
  );
}


export default App;
