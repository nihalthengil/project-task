import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../context'

const Home = () => {
  const navigate =useNavigate()
  const {product,cart,SetCart }=useContext(Context)
  console.log("🚀 ~ Home ~ product:", product)
  const AddProduct=(data)=>{
    navigate("/cart")
    SetCart([...cart,data])
  }
  return (
    <div>
        <h1>Home Page</h1>
        {product.map((data)=>(
          <div>
            <h3>ID: {data.id}</h3>
            <h3>Name: {data.name}</h3>
            <h3>Price: {data.price}</h3>
            <button onClick={()=> AddProduct(data)}>Cart</button>
          </div>
        ))}
        <Link to="/cart" >Cart</Link>
    </div>
  )
}

export default Home
