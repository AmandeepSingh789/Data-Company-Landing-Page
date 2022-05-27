import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-5xl font-bolds text-[#75FF26] font-Inconsolata'>REACT.</h1>
            <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fugiat adipisci officiis distinctio eos. Debitis veniam quaerat sunt repellendus dolore, quas laborum sit ducimus vitae dignissimos. Vitae praesentium quae officiis!
            </p>
            <div className='flex md:w-[75] justify-between'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaGithubSquare size={30}/>
                <FaTwitterSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>

        <div className='lg:col-span-3 flex justify-between'>
            <div>
            <h6 className='font-medium tet-gray-600'>Solutions</h6>
            <ul>
                <li className='py-3 text-sm'>Analytics</li>
                <li className='py-3 text-sm'>Insights</li>
                <li className='py-3 text-sm'>Marketing</li>
                <li className='py-3 text-sm'>Commerce</li>
                <li className='py-3 text-sm'>Analytics</li>
            </ul>
            </div>

            <div>
            <h6 className='font-medium tet-gray-600'>Support</h6>
            <ul>
                <li className='py-3 text-sm'>Analytics</li>
                <li className='py-3 text-sm'>Insights</li>
                <li className='py-3 text-sm'>Marketing</li>
                <li className='py-3 text-sm'>Commerce</li>
                <li className='py-3 text-sm'>Analytics</li>
            </ul>
            </div>

            <div>
            <h6 className='font-medium tet-gray-600'>Solutions</h6>
            <ul>
                <li className='py-3 text-sm'>Analytics</li>
                <li className='py-3 text-sm'>Insights</li>
                <li className='py-3 text-sm'>Marketing</li>
                <li className='py-3 text-sm'>Commerce</li>
                <li className='py-3 text-sm'>Analytics</li>
            </ul>
            </div>
            
        </div>

    </div>
  )
}

export default Footer