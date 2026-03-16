import React from 'react'
// wrapping the component inside React.memo then component tabhi re render hoga jab props change honge nahi toh nahi hoga but it works with prop.values only not for props.function 
const Childcomp =React.memo(
     (props) => {
    console.log("child component got re- rendered")
  return (
    <div>
        <button onClick={props.Handleclick}>
            {props.buttonName}
        </button>
    </div>
  )
})

export default Childcomp