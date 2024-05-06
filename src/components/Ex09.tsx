import React from 'react'

export default function Ex09() {
    const [user, setUser] = React.useState({
        userName: '',
        email: ''
    })
    const handleChange = (e:any) => {
        setUser({
           ...user,
            [e.target.name]: e.target.value
        })
    }
    const register = () => {
        console.log(user)
    }
  return (
    <div>
        <h2>Ex09</h2>
        <label htmlFor="">userName</label>
        <input onChange={handleChange} id='userName' name="userName" type="text" value={user.userName} /><br />

        <label htmlFor="">email</label>
        <input onChange={handleChange} id='email' name="email" type="text" value={user.email}/>

        <button onClick={register}>register</button>
    </div>
  )
}
