import React, { Component } from 'react';
//import Navbar from './Navbar';
//import Fullpage from './components/Fullpage';
import ReactFullpage from '@fullpage/react-fullpage';
import Main from './pages/Main.js';
import About from './pages/About.js';
import Experience from './pages/Experience.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
//import './css/loader.css';
import './App.css';
import logo from './svg/keyboard_resized.svg';

const anchors = ["Home", "About", "Experience", "Projects", "Contact"];

const Fullpages = () => (
    <ReactFullpage 
        menu='#menu'
        anchors={anchors}
        
        sectionsColor={['#edece8', '#acdcd9', '#acc7dc', '#acafdc', '']}
        render={({state, fullpageApi}) => {
            return(
                <div id='fullpage'>
                    <Main />
                    <About />
                    <Experience />
                    <Projects />
                    <Contact />
                </div>
            );
        }}
    />
);

const Navbar = () => (
  <ul id='menu' className="hide">
    <li data-menuanchor="Home" className="active"><a href="#Home">HOME</a></li>
    <li data-menuanchor="About"><a href='#About'>ABOUT</a></li>
    <li data-menuanchor="Experience"><a href='#Experience'>EXPERIENCE</a></li>
    <li data-menuanchor="Projects"><a href='#Projects'>PROJECTS</a></li>
    <li data-menuanchor="Contact"><a href='#Contact'>CONTACT ME</a></li>
  </ul>
);

const Logo = () => (
  <div id="logo">
    <img className="item" src={logo} alt="mouse and keyboard" href="https://danielglee.me#Home" />
    <div className="item" >Daniel G Lee</div>
  </div>
);

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Logo />
        <Navbar />
        <Fullpages />
      </div>
    );
  }
}

export default App;
