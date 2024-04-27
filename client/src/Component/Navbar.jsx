import React from 'react'
import {BiUserCircle, BiSearch} from "react-icons/bi"
import {RiArrowDropDownFill} from "react-icons/ri"
import { Link } from "react-router-dom"
import { BiSolidCameraMovie } from "react-icons/bi";
import Logo from "../../public/logo2.png"
import { FaHeart } from "react-icons/fa";


const Navbar = () => {
 let user = JSON.parse(localStorage.getItem('user'))
  const logout = () => {
    
  }
  return (
    <nav className='flex justify-between p-3 items-center text-2xl font-bold text-[#173d1c] bg-[#3f8c48]'>
        <div className='left flex items-center ml-6'>
          <img src={Logo} alt='logo' width={64} height={64}/>
        </div>
        <div className='flex justify-center items-center gap-10'>
            <Link to={'/'}>Home</Link>
            <Link to={'/sell'}>Sell</Link>
            <Link onClick={() => logout()}>Logout</Link>
            <Link to={'/wishlist'}><FaHeart size={30}/></Link>
            <Link to={'/'}><BiUserCircle size={30}/></Link> 
          </div>
    </nav>
  )
}

export default Navbar
