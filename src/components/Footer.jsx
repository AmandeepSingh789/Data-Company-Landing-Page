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
            <div className='flex md:w-[75] justify-between '>
                <FaFacebookSquare size={30}  className="hover:cursor-pointer hover:bg-white" />
                <FaInstagram size={30}  className="hover:cursor-pointer hover:bg-white"/>
                <FaGithubSquare size={30}  className="hover:cursor-pointer hover:bg-white"/>
                <FaTwitterSquare size={30}  className="hover:cursor-pointer hover:bg-white"/>
                <FaDribbbleSquare size={30}  className="hover:cursor-pointer hover:bg-white"/>
            </div>
        </div>

        <div className='lg:col-span-2 flex justify-between mt-6 ml-6'>
            <div>
            <h6 className='font-medium tet-gray-600 hover:text-[#75FF26] hover:cursor-pointer'>Solutions</h6>
            <ul>
                <li className='py-3 text-sm hover:text-[#75FF26] hover:cursor-pointer'>Analytics</li>
                <li className='py-3 text-sm hover:text-[#75FF26] hover:cursor-pointer'>Insights</li>
                <li className='py-3 text-sm hover:text-[#75FF26] hover:cursor-pointer'>Marketing</li>
                <li className='py-3 text-sm hover:text-[#75FF26] hover:cursor-pointer'>Commerce</li>
               
            </ul>
            </div>

            <div>
            <h6 className='font-medium tet-gray-600 hover:text-[#75FF26] hover:cursor-pointer'>Support</h6>
            <ul>
                <li className='py-3 text-sm hover:text-[#75FF26] hover:cursor-pointer'>Pricing</li>
                <li className='py-3 text-sm hover:text-[#75FF26] hover:cursor-pointer'>Guides</li>
                <li className='py-3 text-sm hover:text-[#75FF26] hover:cursor-pointer'>Documentation</li>
                <li className='py-3 text-sm hover:text-[#75FF26] hover:cursor-pointer'>API Status</li>

            </ul>
            </div>

            <div>
            <h6 className='font-medium tet-gray-600 hover:text-[#75FF26] hover:cursor-pointer'>Company</h6>
            <ul>
                <li className='py-3 text-sm hover:text-[#75FF26] hover:cursor-pointer'>About</li>
                <li className='py-3 text-sm hover:text-[#75FF26] hover:cursor-pointer'>Blog</li>
                <li className='py-3 text-sm hover:text-[#75FF26] hover:cursor-pointer'>Jobs</li>
                <li className='py-3 text-sm hover:text-[#75FF26] hover:cursor-pointer'>Press</li>
                <li className='py-3 text-sm hover:cursor-pointer hover:text-[#75FF26]'>Careers</li>
            </ul>
            </div>

            <div>
            <h6 className='font-medium tet-gray-600 hover:text-[#75FF26] hover:cursor-pointer'>Legal</h6>
            <ul>
                <li className='py-3 text-sm hover:cursor-pointer hover:text-[#75FF26]'>Claim</li>
                <li className='py-3 text-sm  hover:cursor-pointer hover:text-[#75FF26]'>Policy</li>
                <li className='py-3 text-sm hover:cursor-pointer hover:text-[#75FF26]'>Terms</li>

            </ul>
            </div>
            
        </div>

    </div>
  )
}

export default Footer