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

            <div className='w-full border '>
                <img src={single} alt="Single User" className='w-20 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p>$99</p>
                <div>
                    <p>500 GB Storage</p>
                    <p>1 User </p>
                    <p>Upload speeds upto 100 mb/s</p>
                </div>
                <button>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Plans