import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './Aboutme.css'



function Aboutme() {
  return (
    <section id='about'>
    <Container>
      <Row>
        <div className='title-div'>
         <p className='subtitle'>Get To Know More </p>
         <h1> About Me </h1>
         </div>

         <div className='about-div'>
          <p>
          I began learning to code a few years ago, and ever since then, I've developed an obsession with coding and creating user-friendly websites. My projects helped me secure my first web developer internship,  I primarily assisted with the front-end but also contributed a little bit with the Backend. This experience taught me time management skills, teamwork techniques, and new technologies. 
          <br/>
          <br/>
          As a Junior Web Developer, I am proficient in HTML, CSS, Javascript, and React on the Frontend and Node.js PostgreSQL on the Backend.
           I'm excellent at creating and managing user-friendly, responsive websites. My area of expertise is creating dynamic, 
           captivating interfaces using state-of-the-art development tools and methodologies along with well-written, efficient code.
            Outside of coding, I'm equally passionate about Soccer, Basketball and hanging with family and friends.
           </p>
          
         </div>
        
      </Row>
      
    </Container>
    </section>
  )
}

export default Aboutme