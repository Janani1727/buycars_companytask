import {React , useState} from 'react'
import {
    Button,
    FormControl,
    Input,
  } from '@chakra-ui/react'


const AddCarDetails = () => {

  const [image,setImage]=useState("")
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [color,setColor]=useState("")
  const [mileage,setMileage]=useState("")
  const[price,setPrice]=useState("")

  const handleSubmit = async()=>{
    const payload ={
       image,
       title,
       description,
       color,
       mileage,
       price
         }
         await fetch("https://impossible-moth-loincloth.cyclic.app/cars/postcar",{
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
    <div>
        <FormControl>
  <Input placeholder='image' type="url" name={image} value={image}  onChange={(e)=>setImage(e.target.value)}/>
  <Input placeholder='title' type="text" name={title} value={title}  onChange={(e)=>setTitle(e.target.value)}/>
  <Input placeholder='description' type="textarea" name={description} value={description}  onChange={(e)=>setDescription(e.target.value)}/>
  <Input placeholder='color' type="text" name={color} value={color}  onChange={(e)=>setColor(e.target.value)}/>
  <Input placeholder='mileage' type="number" name={mileage} value={mileage}  onChange={(e)=>setMileage(e.target.value)}/>
  <Input placeholder='price' type="number" name={price} value={price}  onChange={(e)=>setPrice(e.target.value)}/>
  
  <Button onClick={handleSubmit}>add car details</Button>
  </FormControl>

    </div>
  )
}

export default AddCarDetails