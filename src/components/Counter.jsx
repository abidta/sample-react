import React from 'react'

function Counter({name,count,title,age}) {
  
  return (
    <div>Counter: {count}
    <h1>{title}</h1>
    <p>{name} : {age}</p>
    </div>
  )
}

export default Counter