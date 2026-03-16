import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input type='text' onChange={(e)=>{props.setName(e.target.value)}}
        />
        <p>name state variable ki value inside {props.title} is :{props.name}</p>
    </div>
  )
}

export default Card