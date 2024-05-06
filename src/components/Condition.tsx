import React  from 'react'
import Modal from './Modal'

export default function Condition() {
    const [active,setActive] = React.useState<Boolean>(false)
    const handleClick = () =>{
        console.log(111111111);
        setActive(!active)
    }
  return (
    <div>Condition(điều kiện dể render)
        {active ? <Modal></Modal> :""}
        <button onClick={handleClick}> click </button>
    </div>
  )
}
