import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {
     const navigate =useNavigate()
    const [formdata, Setformdata] = useState({
      email: "",
      password: "",
    });
    const HandleChange =(e)=>{
      const {name,value}= e.target
      Setformdata({
          ...formdata,[name]:value
      })
  }
  const HandleSubmit=async(e)=>{
    e.preventDefault()
    const response =await axios.get(`http://localhost:3000/user?email=${formdata.email}`)
    const user = response.data[0]
    console.log(user);
    if(user.password===formdata.password){
      navigate('/home')
    }
    
  }
  return (
    <div>
    <form 
    onSubmit={HandleSubmit}>
        <div>
            <label htmlFor="email">email:</label>
            <input type="text" id="email" onChange={HandleChange} value={formdata.email} name="email" required />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={HandleChange} value={formdata.password} name="password" required />
        </div>
        <button type="submit" >Login</button>
        
    </form>
    <Link to ="/signup">signup</Link>
    </div>
  )
}

export default Login
