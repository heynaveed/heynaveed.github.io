import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import './App.css';
import About from './Compo/About';
import Contact from './Compo/Contact';
import Navbar from './Compo/Navbar';
import Profile from './Compo/Profile';
import Project from './Compo/Projects';
import Skills from './Compo/Skills';

function App() {
  const ProfileRef = useRef(null);
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);

  const HandleScrollTo = (ref) =>{
    window.scrollTo({
      top : ref.current.offsetTop,
      behavior : 'smooth'
    })
  }
  return (
    <div className="App">
      <Box>
        <Navbar
        ProfileRef={( ) => HandleScrollTo(ProfileRef)} 
        AboutRef = {( ) => HandleScrollTo(AboutRef)}
        SkillRef = {( ) => HandleScrollTo(SkillsRef)}
        ProjectRef = {( ) => HandleScrollTo(ProjectRef)}
        ContactRef = {( ) => HandleScrollTo(ContactRef)}
        />
      </Box>

      <Box ref={ProfileRef}> 
        <Profile/>
      </Box>

      <Box mt={{base : '15%', md : '10%'}} ref={AboutRef}>
        <About/>
      </Box>

      <Box mt={{base : '10%'}} ref={SkillsRef}>
        <Skills/>
      </Box>

      <Box mt={{base : '10%'}} ref={ProjectRef}>
        <Project/>
      </Box>

      <Box ref={ContactRef}>
        <Contact/>
      </Box>
     
    </div>
  );
}

export default App;