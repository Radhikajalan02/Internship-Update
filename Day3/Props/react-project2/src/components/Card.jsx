import React from 'react'

const Card = ({children}) => {  //passing children as a destructured prop
  return (
    <div>{children}</div>
  )
}

export default Card