import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Main from '../pages/Main.js';
import About from '../pages/About.js';
import Experience from '../pages/Experience.js';
import Projects from '../pages/Projects.js';
import Contact from '../pages/Contact.js';

const anchors = ["Home", "About", "Experience", "Projects", "Contact Me"];
const Navbar = () => (
    <ul id='#menu'>
      <li data-menuanchor='Home' className='active'><a href='#Home'>HOME</a></li>
      <li data-menuanchor='About'><a href='#About'>ABOUT</a></li>
      <li data-menuanchor='Experience'><a href='#Experience'>EXPERIENCE</a></li>
      <li data-menuanchor='Projects'><a href='#Projects'>PROJECTS</a></li>
      <li data-menuanchor='Contact'><a href='#Contact'>CONTACT ME</a></li>
    </ul>
  );

const Fullpages = () => (
    <ReactFullpage 
        anchors={anchors}
        menu='#menu'
        navigation={true}
        navigationTooltips={anchors}
        sectionsColor={['#acdcd9', '#acc7dc', '#acafdc', '', '']}
        render={({state, fullpageApi}) => {
            return(
                <div>
                    <Main />
                    <About />
                    <Experience />
                    <Projects />
                    <Contact />
                </div>
            )
        }}

    />
);
export default class Fullpage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Fullpages />
            </div>
            
        );
    }
}