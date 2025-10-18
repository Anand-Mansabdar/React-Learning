import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-3 px-8 justify-between bg-cyan-500 text-black font-semibold items-center'> 
      <h2 className='text-xl font-semibold'>Advance Routing</h2>
      <div className='flex gap-8'>
        <Link className='text-lg font-sans' to="/">Home</Link>
        <Link className='text-lg font-sans' to="/about">About</Link>
        <Link className='text-lg font-sans' to="/product">Product</Link>
        <Link className='text-lg font-sans' to="/courses">Courses</Link>
      </div>
    </div>
  )
}

export default Navbar