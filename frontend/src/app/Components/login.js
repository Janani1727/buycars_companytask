"use client"

import React, { useState } from 'react'

const Login = () => {
  
    const [email,setEmail] = useState("")
  
    const [password,setPassword] = useState("")
  

const handleSubmit = ()=>{
    const payload ={

   email,

   password,

    }
fetch("https://impossible-moth-loincloth.cyclic.app/user/login",{
method:"POST",
mode:"cors",
body:JSON.stringify(payload),
headers:{
"Content-type":"application/json"
}

}).then(res=>res.json())
.then(res=>{
    console.log(res)
    localStorage.setItem("token",res.token)
})
.catch(err=>console.log(err))
}

  return (
    <>
    <p>Login</p>

    <input type="text" placeholder='Enter your email' name={email} value={email} onChange={(e)=>setEmail(e.target.value)}/>
  
    <input type="text" placeholder='Enter your password' name={password} value={password} onChange={(e)=>setPassword(e.target.value)}/>

    <button onClick={handleSubmit}>Login</button>
    </>
  )
}

export default Login
