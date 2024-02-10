import React, {useState} from 'react'
import './Skill.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {SkillsData}  from '../utilities/data';
import SkillsCard from './SkillsCard';
import SkillsinfoCard from './SkillsinfoCard';
//import  Image  from 'react-bootstrap/image';

function Skill() {

  const [selectedSkill, setSelectedSkill] = useState(SkillsData[0]);
  const [isActive, setIsActive] = useState(false);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data)
    setIsActive(true)
  }


  return (
    <section id='skill'>
    <Container className='skill-container' >
    <Row className='skill-title-row' >
        <div className='skill-title-div'>
         
         <h1> Skills </h1>
         </div>
        
      </Row>
      <Row>
        <Col xs={12} md={7} lg={6}>
          <div className='skillscontent-div'>
             <div className='skills'>
              {SkillsData.map((item) => (
                <SkillsCard key={item.id} 
                onClick={() => { handleSelectedSkill(item)}}  
                isActive={ selectedSkill.title === item.title}
                title={item.title} 
                iconUrl={item.image} >
               
               
                </SkillsCard>
              ))}
              </div>
          </div>
         


        </Col>
        <Col xs={12} md={5} lg={6}>
          <div className='skillsinfo-div'>
          <SkillsinfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}

             />
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}


export default Skill