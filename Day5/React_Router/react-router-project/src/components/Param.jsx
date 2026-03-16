import React from 'react'

const Param = () => {
    const {id}=useParams();
  return (
    <div>
Params:{id}
    </div>
  )
}

export default Param