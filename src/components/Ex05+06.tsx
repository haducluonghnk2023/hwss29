import React from 'react'

export default function Ex05() {
    const [isShown, setIsShown] = React.useState(true)
    const toggleButton = () => {
        // console.log(!isShown);
        setIsShown(!isShown)
    }
  return (
    <div>
        <h2>Ex05</h2>
        <button onClick={toggleButton}>{isShown ? "Hiển" : "Ẩn"}</button>
    </div>
  )
}
