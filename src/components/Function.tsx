import React, { useState } from 'react'
interface User {
    userName:string;
    email:string;
}
export default function Function() {
    // const [userName,setUserName] = useState<string>("")
    // const [email,setEmail] = useState<string>("")
    // hàm xử lí khi click vào button
    const [user,setUser] = useState<User>({
        userName:"",
        email:""
    })
    const handleClick = () => {
        console.log("click")
    }
    // gọi hàm theo kiểu truyền tham số
    const hanldeDelete = (userID:any) => {
        console.log(userID)
    }
    // khai báo hàm register 
    const register = () => {
        console.log("register",user)
    }
    // // khai bao ham handleChangeName
    const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser ({
            ...user,[name]:value
        })
    }
    // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     setUserName(e.target.value)
    //     setEmail(e.target.value)
    // }
    // khai báo hàm handleChangEmail
  return (
    <div>
        Function
        <p onClick={()=>hanldeDelete(5)}>hoa</p>
        <button onClick={handleClick}>click</button>

        <label htmlFor="">userName</label>
        <input onChange={handleChange} name="userName" type="text" /><br />

        <label htmlFor="">email</label>
        <input onChange={handleChange} name="email" type="text" />

        <button onClick={register}>register</button>
    </div>
  )
}
