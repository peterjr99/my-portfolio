import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../layout/card';
import { ProjectData } from '../utilities/data';
//import Image from 'react-bootstrap/Image';
import './project.css'

function Project() {

  return (
    <section id='project'>
      <Container>
      <Row className='project-title-row' >
        <div className='project-title-div'>
         <p>Browse My Recent</p>
         <h1> Projects </h1>
         </div>
        
      </Row>
      <Row>
            {ProjectData.map((Project) => {
               return( 
                <Col lg={4} md={6} sm={12} xs={12} key={Project.id} className='project-container'>
               <Card className="project-card" >
               <div className='image-div'>
                <img src={Project.projectpic} alt={Project.name} className='project-img' />
               </div>
             
                <div className='project-button'>
                    <button onClick={() => {window.location.href = Project.github_link} }> Github</button>
                    <button onClick={() => {window.location.href = Project.live_Demo} }> live Demo </button>
                </div>
               </Card> 
               </Col>
            )})}
      </Row>
    </Container>

    </section>
  )
}

export default Project