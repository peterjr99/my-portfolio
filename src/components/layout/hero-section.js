import React from 'react'
import './hero-section.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';
import Profilepic from '../../assets/IMG_9429.JPG'
import resume from '../../assets/Software dev intern resume pdf 2024.pdf'


function Hero_section() {

  let Githuburl = 'https://github.com/peterjr99'  
  let Linkedinurl = 'https://www.linkedin.com/in/peter-tayong-jr-/'  
  let contact = '#contact'

  return (
    <section className='hero-section' id='home'>
      <Container>
      <Row className='align-items-center'>
        <Col className='left-section' xs={12} md={6} xl={7}>
          
          <h1 className='hello-text'>Hello I'm <br/> <span className='webdev-text'> Web Developer </span></h1>
          
          <p> My name is Peter Tayong i like to create user-friendly websites and find solutions to challenging issues.</p>
          <div className='button-div'>
            <button onClick={() => { window.location.href = contact; } }>Hire Me</button>
            <button> <a className='download-text' href={resume} download='peter tayong resume'> Download CV </a></button>
          </div>
          <div className='icon-div'>
          <i className='icon' onClick={() => { window.location.href = Githuburl; } } > <Github/> </i>
          <i className='icon' onClick={() => { window.location.href = Linkedinurl; } }> <Linkedin/>  </i>
          <i className='icon' onClick={() => {window.location.href = 'mailto:p.tayong@yahoo.com';}}> <Envelope/>  </i>
          </div>
        </Col>
        <Col xs={12} md={6} xl={5} className='img-div'>
           <Image className='Header-pic' src={Profilepic} alt='Header Img' roundedCircle />
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Hero_section