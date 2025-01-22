import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-end items-center px-5 py-3.5 bg-white border-b w-screen bg-opacity-25 shadow-md '>
       <div className='flex gap-10 '>
        <a href="/second" className='text-lg text-black'>Home</a>
        <a href="/" className='text-lg text-black'>Grid</a>
        <a href="https://www.linkedin.com/in/meet-korat-43a4a9267/" className='no-underline text-lg text-black'>LinkedIn</a>
       </div>

    </nav>
    
  )
}
