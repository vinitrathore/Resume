import React from 'react'
import "./skill.css"

function Skill() {
  const programming = `
  Programming:
    JavaScript
    React Developer
    React native Developer
    Mern Stack Developer
  `
  return (
    <div className='skill'>Skill
    <div>
      {programming}
    </div>
    <div>
      Communication:
      Hindi
      English
    </div>
    </div>
  )
}

export default Skill