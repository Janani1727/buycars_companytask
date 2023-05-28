
import {useToast}from "@chakra-ui/react"

import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Login = () => {
  const Toast =useToast()
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
    

    <form style={{padding:"20px",width:"30%",height:"350px" , border:"1px solid black" ,marginTop:"80px",marginLeft:"550px"}}>


    <input style={{width:"100%",height:"40px",border:"1px solid black",borderRadius:"10px",marginTop:"20px"}} type="text" placeholder='Enter your email' name={email} value={email} onChange={(e)=>setEmail(e.target.value)}/>
  
    <input style={{width:"100%",height:"40px",border:"1px solid black",borderRadius:"10px",marginTop:"20px"}} type="text" placeholder='Enter your password' name={password} value={password} onChange={(e)=>setPassword(e.target.value)}/>
   <Link to="/displaycar">
    <button style={{backgroundColor:"teal",color:"white",width:"100%",height:"40px",border:"1px solid black",borderRadius:"10px",marginTop:"20px"}} onClick={()=>
      {
        handleSubmit()
        Toast({
          title: "logged in successfully",
          position: "bottom",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
    }>Login</button>
  </Link>
    </form>
    </>
  )
}

export default Login
