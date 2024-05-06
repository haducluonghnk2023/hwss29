import React from 'react'

export default function Ex07() {
    const [numbers,setNumbers] = React.useState<number[]>([]);
    const addNumber = () => {
        const newNumber = Math.floor(Math.random() *1000000)
        setNumbers([...numbers,newNumber])
    }
  return (
    <div>
        <h2>Ex07</h2>
        <button onClick={addNumber}>Theem so duong:</button>
        <p>so duong: {numbers.join(",")}</p>
    </div>
  )
}
