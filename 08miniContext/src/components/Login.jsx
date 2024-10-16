import React, {useContext, useState } from "react";
import UserContext from "../Context/UserContext";


function Login() {

const [username, setUsename ] = useState('')
const [password, setPassword] = useState('')


// this is for sending data
const {setUser} = useContext(UserContext)

   const handleSubmit = (e) =>{
    e.preventDefault()
    setUser({username, password})
   }
  return (
    <div>
        <h2>Login</h2>
        <input 
        value={username}
        onChange={(e) => setUsename(e.target.value)}
        type="text" placeholder="username"/>
        {" "}
        <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text" placeholder="password"/>
        <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}

export default Login