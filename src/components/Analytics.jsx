import React from 'react'
import chart from '../assets/analytics.svg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 font-Inconsolata'>

    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>

    <img src={chart} alt="/" className='my-4 pr-16' />
     <div className='flex flex-col justify-center'>
         <p className='text-[#5FD21F] text-3xl font-bold '>DATA ANALYTICS DASHBOARD</p>
         <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold py-2'> Manage Data Analytics Centrally</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim ipsum porro explicabo ut repudiandae autem dolor? Architecto amet laborum eligendi quasi at, velit nihil deleniti odit natus excepturi cupiditate.</p>
         <button className=' md:text-3xl sm:text-2xl text-lg bg-black w-[200px] rounded-lg mx-auto py-3  my-6 text-[#5FD21F]'>Get Started</button>
     </div>
    </div>
    </div>
  )
}

export default Analytics