import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'


const Plans = () => {
  return (

     
    <div className='w-full py-[6rem] px-4 bg-white font-Inconsolata'>
        <div className='flex flex-row justify-center text-6xl font-bold mb-20'>
            PLANS
         </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

            <div className='w-full shadow-2xl shadow-[#5FD21F] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 mb-16'>
                <img src={single} alt="Single User" className='w-20 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-4xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-5xl font-bold'>$99</p>
                <div className='text-center font-lg text-xl'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 User </p>
                    <p className='py-2 border-b mx-8'>Upload speeds upto 100 mb/s</p>
                </div>
                <button className='md:text-xl sm:text-xl text-lg bg-[#5FD21F] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-4 py-3 hover:text-white'>Start Trial</button>
            </div>
            <div className='w-full shadow-2xl shadow-[#5FD21F] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 mb-16'>
                <img src={double} alt="Single User" className='w-20 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-4xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center text-5xl font-bold'>$149</p>
                <div className='text-center font-lg text-xl'>
                    <p className='py-2 border-b mx-8 mt-8'>1000 GB Storage</p>
                    <p className='py-2 border-b mx-8'>2 Users </p>
                    <p className='py-2 border-b mx-8'>Upload speeds upto 500 mb/s</p>
                </div>
                <button className='md:text-xl sm:text-xl text-lg bg-[#5FD21F] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-4 py-3 hover:text-white'>Start Trial</button>
            </div>
            <div className='w-full shadow-2xl shadow-[#5FD21F] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 mb-16'>
                <img src={triple} alt="Single User" className='w-20 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-4xl font-bold text-center py-8'>Triple User</h2>
                <p className='text-center text-5xl font-bold'>$199</p>
                <div className='text-center font-lg text-xl'>
                    <p className='py-2 border-b mx-8 mt-8'>2000 GB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Users </p>
                    <p className='py-2 border-b mx-8'>Upload speeds upto 1000 mb/s</p>
                </div>
                <button className='md:text-xl sm:text-xl text-lg bg-[#5FD21F] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-4 py-3 hover:text-white'>Start Trial</button>
            </div>
            

          
        </div>
    </div>
  )
}

export default Plans