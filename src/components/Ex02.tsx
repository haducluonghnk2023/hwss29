import React from 'react'

export default function Ex02() { 
   const [userName,setUserName] = React.useState('')
   const handleChange = (event:any) => {
       setUserName(event.target.value)
   }
  return (
    <div>
        <h2>Ex02</h2>
        <input type="text" value={userName}  onChange={handleChange} />
        <p>{userName}</p>
    </div>
  )
}
