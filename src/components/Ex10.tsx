import React from 'react'

export default function Ex10() {
    const genders = ["nam","nu","khac"];
    const [currentGender,setCurrentGender] = React.useState("nam");
    const handleRandomGender = ()=>{
        const randomIndex = Math.floor(Math.random() * genders.length);
        const randomGender = genders[randomIndex];
        setCurrentGender(randomGender);
    }
  return (
    <div>
            <h2>Ex10</h2>
            <p>Giới tính hiện tại: {currentGender}</p>
            <button onClick={handleRandomGender}>Random gender</button>
    </div>
  )
}
