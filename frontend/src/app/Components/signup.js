"use client"

import React, { useState } from 'react'

const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


let handleSubmit = async()=>{
    const payload ={
   name,
   email,
   password,
    }

await fetch("https://impossible-moth-loincloth.cyclic.app/user/signup",{
method:"POST",
body:JSON.stringify(payload),
headers:{
"Content-Type":"application/json"
}

}).then(res=>res.json())
.then(res=>{
    console.log(res)
    
})
.catch(err=>console.log(err))
}

  return (
    <form style={{width:"30%",height:"500px" , border:"1px solid red"}}>
    <p>Signup</p>
    <input type="text" placeholder='Enter your name' name={name} value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="email" placeholder='Enter your email' name={email} value={email} onChange={(e)=>setEmail(e.target.value)}/>
 
    <input type="password" placeholder='Enter your password' name={password} value={password} onChange={(e)=>setPassword(e.target.value)}/>

    <button onClick={handleSubmit}>Sign Up</button>
    </form>
  )
}

export default Signup