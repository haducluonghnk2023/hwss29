import React from 'react'

export default function Ex08() {
    const [count, setCount] = React.useState(0);
    const handleChange = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <h2>Ex08</h2>
        <p>Count: {count}</p>
        <button onClick={handleChange}>Tang</button>
    </div>
  )
}
