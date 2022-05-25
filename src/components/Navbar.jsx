import React from 'react'
import {BsMenuButtonWideFill,BsMenuButtonFill} from 'react-icons/bs'
import { useState } from 'react'

const Navbar = () => {

    const[nav,setNav] = useState(false)
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-4xl font-bolds text-[#B026FF] font-Inconsolata'>REACT.</h1>

        <ul className=' hidden  flex uppercase'>
            <li className='p-4 '>Home</li>
            <li className='p-4 '>Company</li>
            <li className='p-4 '>Resources</li>
            <li className='p-4 '>About</li>
            <li className='p-4 '>Contact</li>
        </ul>

        <div>
            <BsMenuButtonWideFill size={30} className="hover:text-[#B026FF] hover:cursor-pointer" />
        </div>

        <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-[#B026FF] bg-[#0C0C0C]'>
            
        <h1 className='w-full text-4xl font-bolds text-[#B026FF] font-Inconsolata'>REACT.</h1>
            
            <ul className='uppercase p-4 font-Inconsolata'>
            <li className='p-4 border-b border-[#B026FF] '>Home</li>
            <li className='p-4  border-b border-[#B026FF]'>Company</li>
            <li className='p-4  border-b border-[#B026FF]'>Resources</li>
            <li className='p-4  border-b border-[#B026FF]'>About</li>
            <li className='p-4 '>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

// BsMenuButtonWideFill