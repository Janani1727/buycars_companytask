import React, { useEffect, useState } from 'react'

const DisplayCar = async() => {

    const [data,setData]=useState([])

    useEffect(()=>{
      fetchData()
    },[])

   async function fetchData (){
      await fetch("https://impossible-moth-loincloth.cyclic.app/cars"
      // method:"GET",
      // body:JSON.stringify(payload),
      // headers:{
      // "Content-Type":"application/json"
      // }
      
      ).then(res=>res.json())
      .then(res=>{
          console.log(res)
          setData(res)

          
      })
      .catch(err=>console.log(err))
      
  
    }


  return (
  
    <div>
        {
    data.map(el=>{
      return(
     <div>
     <h1>{el.title}</h1>
     </div>
      )
    })
      }
    </div>
  )
}

export default DisplayCar