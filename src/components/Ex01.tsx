import React from 'react'

export default function Ex01() {
    const handleChange = ()=>{
        console.log("Clicked");
        
    }
  return (
    <div>
        <h2>Ex01</h2>
        <button onClick={handleChange}>click me</button>
    </div>
  )
}
