import React from 'react'
import './SkillsCard.css'
import  Image  from 'react-bootstrap/Image'

const SkillsCard = ({title,iconUrl,  isActive, onClick}) => {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`} 
    onClick={() => onClick()}>

    <div className='skill-icon'>
      <Image src={iconUrl} alt={title} className='skill-image'/>
    </div>

    <span> {title} </span>
     

    </div>
  )
}

export default SkillsCard