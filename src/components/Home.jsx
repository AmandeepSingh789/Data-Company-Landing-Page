import React from 'react'
import Typed from 'react-typed';

const Home = () => {
  return (
    <div className='text-white  font-Inconsolata'>

        <div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

            <p className='text-[#75FF26] text-3xl font-bold p-2'>Growing With Data Analytics</p>
            <h1 className=' md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>GROW WITH DATA.</h1>
            <div className='flex justify-center items-center  '>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, Flexible, Financing for </p>
                <Typed  className=' pl-2 md:text-5xl sm:text-4xl text-xl font-bold'strings={['BTB','BTC','SASS']}
                    typeSpeed={140} backSpeed={140} loop/>
            </div>
            <p className='py-4 md:text-2xl text-xl text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        </div>
    </div>
  )
}

export default Home