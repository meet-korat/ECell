import React from 'react'

export const Second = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-black via-pink-700 to-red-600'  >
        
        <a href="/" className='absolute z-1 top-0 text-pink-900'>Back to grid</a>
        <img className='z-1 mt-[5%] pl-[10%]  top-0 absolute ' src="/image/mypic.jpg" alt="myPicture" />
        <h1 className='z-1 absolute p-4 ml-[50%] mt-[20%] top-0 bg-green-700 text-white font-extrabold text-4xl'>Korat Meet</h1>
        <div className='bg-green-700 absolute z-1 top-0 p-4 mt-[27%] ml-[50%]'>
            <h1 className='text-4xl font-extrabold text-white  '>20233165</h1>
        </div>
        <div className='bg-green-700 rounded-md text-white font-bold p-4 ml-[50%] mt-[34%] absolute z-1 max-w-40'>
            <a href="https://www.instagram.com/_.meeettt_/">To the Instagram</a>
        </div>
        <img className='absolute z-1 top-0 mt-[8%] ml-[70%]' src="/image/sg3.jpg" alt="three shapes" />
    </div>
        
  )
}
