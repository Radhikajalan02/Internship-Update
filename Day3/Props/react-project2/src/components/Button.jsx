import React from 'react'
// import {useState} from 'react'


//button is a child of app bcz we have passed the button component there
const Button = (props) => {
  return (
    <div >
        {props.children}
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    </div>
  )
}

export default Button