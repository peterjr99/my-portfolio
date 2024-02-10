import NavBar from './components/Main Header/NavBar'
import Herosection from './components/layout/hero-section';
import Aboutme from './components/about/Aboutme';
import Skill from './components/Skill/Skill';
import Project from './components/project/project';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
     <NavBar/>
     <Herosection/>
     <Aboutme/>
     <Skill/>
     <Project/>
     <Contact/>
     
    </>
  );
}

export default App;
