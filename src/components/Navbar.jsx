import React from 'react'
import {BsMenuButtonWideFill,BsMenuButtonFill} from 'react-icons/bs'
import { useState } from 'react'

const Navbar = () => {

    const[nav,setNav] = useState(false)

    const handleNav = () =>{

        setNav(!nav)
    }
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-4xl font-bolds text-[#75FF26] font-Inconsolata'>REACT.</h1>

        <ul className=' hidden md:flex uppercase font-Inconsolata'>
            <li className='p-4 text-xl hover:cursor-pointer  hover:text-[#75FF26]'>Home</li>
            <li className='p-4 text-xl hover:cursor-pointer hover:text-[#75FF26] '>Company</li>
            <li className='p-4 text-xl hover:cursor-pointer hover:text-[#75FF26]'>Resources</li>
            <li className='p-4 text-xl hover:cursor-pointer hover:text-[#75FF26]'>About</li>
            <li className='p-4 text-xl hover:cursor-pointer hover:text-[#75FF26]'>Contact</li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <BsMenuButtonFill size={30} className="hover:text-[#75FF26] hover:cursor-pointer" /> : <BsMenuButtonWideFill size={30}  className="hover:text-[#75FF26] hover:cursor-pointer"/ >}
            
        </div>

        {<div className={ !nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#75FF26] bg-[#0C0C0C] ease-in-out duration-700' : 'fixed left-[-100%]'}>
            
        <h1 className='w-full text-4xl p-4 font-bolds text-[#75FF26] font-Inconsolata'>REACT.</h1>
            
            <ul className='uppercase p-4 font-Inconsolata'>
            <li className='p-4 border-b border-[#75FF26] '>Home</li>
            <li className='p-4  border-b border-[#75FF26]'>Company</li>
            <li className='p-4  border-b border-[#75FF26]'>Resources</li>
            <li className='p-4  border-b border-[#75FF26]'>About</li>
            <li className='p-4 '>Contact</li>
            </ul>
        </div>}
    </div>
  )
}

export default Navbar

// BsMenuButtonWideFill