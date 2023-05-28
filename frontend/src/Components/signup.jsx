
import {useToast}from "@chakra-ui/react"

import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

const Signup = () => {

  const navigate=useNavigate()
const Toast =useToast()

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

}).then(res=>res.json()
  

)
.then(res=>{
  // navigate("/login")
    console.log(res)
})
.catch(err=>console.log(err))

}


  return (
    <form style={{padding:"20px",width:"30%",height:"350px" , border:"1px solid black" ,marginTop:"80px",marginLeft:"550px"}}>
  
    <input style={{width:"100%",height:"40px",border:"1px solid black",borderRadius:"10px",marginTop:"20px"}} type="text" placeholder='Enter your name' name={name} value={name} onChange={(e)=>setName(e.target.value)}/>
   
    <input style={{width:"100%",height:"40px",border:"1px solid black",borderRadius:"10px",marginTop:"20px"}} type="email" placeholder='Enter your email' name={email} value={email} onChange={(e)=>setEmail(e.target.value)}/>
 
    <input style={{width:"100%",height:"40px",border:"1px solid black",borderRadius:"10px",marginTop:"20px"}} type="password" placeholder='Enter your password' name={password} value={password} onChange={(e)=>setPassword(e.target.value)}/>

    <Link to="/login">
    <button  style={{backgroundColor:"teal",color:"white",width:"100%",height:"40px",border:"1px solid black",borderRadius:"10px",marginTop:"20px"}} onClick={()=>
      {handleSubmit()
        Toast({
          title: "registered successfully",
          position: "bottom",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
    }>
      Sign Up
      </button>
      </Link>
    </form>
  )
}

export default Signup