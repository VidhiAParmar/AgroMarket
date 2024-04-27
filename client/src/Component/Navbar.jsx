import React from 'react'
import {BiUserCircle, BiSearch} from "react-icons/bi"
import {RiArrowDropDownFill} from "react-icons/ri"
import { Link } from "react-router-dom"
import { BiSolidCameraMovie } from "react-icons/bi";


const Navbar = () => {
 let user = JSON.parse(localStorage.getItem('user'))
  const logout = () => {
    
  }
  let admin = "admin@gmail.com";
  return (
    <nav className='flex justify-between p-3 items-center text-white bg-[#3f8c48]'>
        <div className='left flex items-center'>
          <BiSolidCameraMovie size={30}/>
        </div>
        <div className='flex justify-center items-center gap-10'>
            <Link to={'/'}>Home</Link>
            <Link to={'/sell'}>Sell</Link>
            <Link onClick={() => logout()}>Logout</Link>
            <Link to={'/'}><BiUserCircle/></Link> 
          </div>
    </nav>
  )
}

export default Navbar
