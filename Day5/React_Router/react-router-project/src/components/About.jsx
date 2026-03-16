import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate=useNavigate(); //usenavigate helps to explicitly move between pages without having to refresh the browser again and again
  function handleClick(){
    navigate('/dashboard')
  }
  return (
    <div>About page
      <button onClick={handleClick}>move to dashboard</button>
    </div>
  )
}

export default About