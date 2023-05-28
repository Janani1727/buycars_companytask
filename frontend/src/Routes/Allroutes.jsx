

import React from 'react'
import {Routes , Route} from "react-router-dom"
import Login from "../Components/login"
import Signup from "../Components/signup"
import AddCarDetails from '../Components/AddCarDetails'
import DisplayCar from "../Components/DisplayCar"



const Allroutes = () => {
  return (
    <div>

<Routes>

<Route path ="/signup" element={<Signup/>}/>
<Route path ="/login" element={<Login/>}/>
<Route path ="/addcar" element={<AddCarDetails/>}/>
<Route path ="/displaycar" element={<DisplayCar/>}/>


</Routes>

    </div>
  )
}

export default Allroutes