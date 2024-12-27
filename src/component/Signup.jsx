import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate =useNavigate()
  const [formdata, Setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const HandleChange =(e)=>{
    const {name,value}= e.target
    Setformdata({
        ...formdata,[name]:value
    })
}
const HandleSubmit =(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/user",formdata)
    navigate("/")

}
  return (
    <div>
      <h1>Signup</h1>

      <div>
        <label htmlFor="name">Name</label>
        <input type="text" value={formdata.name} onChange={HandleChange} name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" value={formdata.email} onChange={HandleChange} name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" value={formdata.password} onChange={HandleChange} name="password" />
      </div>
      <button type="submit" onClick={HandleSubmit}>Submit</button>

      <Link to="/">Login</Link>
    </div>
  );
};

export default Signup;
