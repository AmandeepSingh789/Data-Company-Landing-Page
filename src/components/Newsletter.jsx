import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white font-Inconsolata px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3' >

            <div className='lg:col-span-2 my-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want Tips And Tricks To Optimize Your Flow</h1>
                <p className='md:text-2xl sm:text-xl text-lg'>Subscribe To Our Newsletter And Stay Up To Date.</p>
            </div>
            <div className='my-4'>

                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                <input type="email" placeholder='Enter Your Email' className='p-3 px-8 flex w-full rounded-md text-black ' />
                <button className='md:text-xl sm:text-xl text-lg bg-[#5FD21F] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-4 py-3'>Notify Me</button>

                </div>
                <p className='md:text-xl sm:text-xl text-lg'>We care bout the protection of your data. Read our <span className='text-[#5fd21f]'>Privacy Policy. </span></p>
            </div>

            
        </div>
    </div>
  )
}

export default Newsletter