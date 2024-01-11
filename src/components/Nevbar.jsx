import React, { useState } from 'react';
import logo from '../assets/Group 3.png';
import { Link, NavLink } from 'react-router-dom';
import {  TbTruckDelivery, TbWallet } from "react-icons/tb";
import { IoClose, IoMenuSharp, IoSearch } from "react-icons/io5"
const Nevbar = () => {
    const [isMenuOpen,setIsMenu] =useState(false)
    const [nav,setNav] = useState(false)
    const handleMenuToggler =()=>{
        setIsMenu(!isMenuOpen)
    }
    const navItems = [
        {path: "/" ,title: "Start a search"},
        {path: "/my-job" ,title: "My Jobs"},
        {path: "/salary" ,title: "Salary"},
        {path: "/post-job" ,title: "Post a Job"},
    ]
    return (
        <header className='max-w-screen-2xl mx-auto container xl:px-24 px-4 '>
            <nav className='flex items-center justify-between gap-2 text-2xl text-black py-6'>
                <a href="/" className='flex items-center gap-2 text-2xl font-medium'>
                    <img src={logo} alt="" />
                    Find<span className="font-bold text-pink-500">Job</span></a>
            

            {/* nav items for large devices */}
            <ul className='hidden md:flex gap-12'>
                {
                        navItems.map(({path,title}) => (
                            <li key={path} className='text-base '>
                        <NavLink
                        to={path}
                        className={({ isActive }) => isActive ? "active" : ""
                        }
                        >
                        {title}
                        </NavLink>
                            </li>
                        ))
                }
            </ul>

            {/* Signup and  login butn */}
            <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                <Link to='/login' className='py-2 rounded px-5 border '>Login in</Link>
                <Link className='py-2 rounded px-5 border bg-pink-500 text-white' to='/signup'>Sign up</Link>
            </div>

                     {/* MObile menu */}
                     <div onClick={()=> setNav(!nav)} className="cursor-pointer md:hidden block">
            <IoMenuSharp size={30} />
                </div>
            {/* Overlay */}
            {
              nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">

              </div> : ""
            }
            
            {/* side drawer menu  */}
            <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 " }>
              <IoClose onClick={()=>setNav(!nav)} size={30} className="absolute top-4 right-4 cursor-pointer" />
              <h2 className="text-2xl  p-4">Find<span className="font-bold text-pink-500">Job</span></h2>
              <nav>
                <ul className="flex flex-col p-4 text-gray-800">
                    {
                        navItems.map(({path,title})=>(
                            <li key={path}  className="text-xl py-4 flex"> 
                            <NavLink
                        to={path}
                        className={({ isActive }) => isActive ? "text-pink-500" : ""
                        }
                        >
                        {title}
                        </NavLink>
                            </li>
                        ))
                    }
                  
                  
                  
                </ul>
              </nav>
            </div>
            
            </nav>
        </header>
    );
};

export default Nevbar;