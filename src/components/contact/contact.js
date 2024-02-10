import React, {useState} from 'react';
import axios from 'axios';
import './contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputField from '../UI/Inputfield';

function Contact() {

const [fullName, setFullName] = useState('')
const [email, setemail] = useState('')
const [message, setmessage] = useState('')


let About = '#about'
let Skill = '#skill'
let Projects = '#project'
let Contact = '#contact'


const handleSubmit = (e) =>{
e.preventDefault()

axios.post('https://getform.io/f/ab6e6533-35e9-41e0-bf37-f1ccef3331dd',{
  fullName, email,message,
   })
  .then(response => (console.log(response)))
  .catch(err => (console.log(err)))
    setFullName('')
    setemail('')
    setmessage('')
}

const d = new Date();
let year = d.getFullYear();


  return (
    <footer id='contact'>
      <Container>
      <Row>
        <div className='title-div'>
         <p>feel free to reach out </p>
         <h1> Contact Me </h1>
         </div>
      </Row>
       <Row>
         <Col>
         <form onSubmit={handleSubmit} className='form' method='POST' >
           <InputField 
           value={fullName}
            name='fullname'
            placeholder='enter your full name'
            type='text'
            onChange={(e) => setFullName(e.target.value) }

           />

<InputField 
           value={email}
            name='email'
            placeholder='enter your email '
            type='email'
            onChange={(e) => setemail(e.target.value)}

           />
           
           <textarea
            name='message'
            className='textarea'
            type='text'
            placeholder='message'
            value={message}
            onChange={(e) => setmessage(e.target.value)}

           />
           <br/>
           <button> let's talk</button>
           </form>

         </Col>
        
       </Row>
       <div className='footer-div'>
         <ul>
          
          <li onClick={() => {window.location.href = About}}> About</li> 
          <li onClick={() => {window.location.href = Skill}}> Skills</li>
          <li onClick={() => {window.location.href = Projects}}> Projects</li>
          <li onClick={() => {window.location.href = Contact}}> Contact</li>
         </ul>

         <p> Copyright © {year} Peter Tayong. All Rights Reserved</p>
         </div>


    </Container>

    </footer>
  )
}

export default Contact