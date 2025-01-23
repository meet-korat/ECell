import React, {useState} from 'react'
import {useMediaQuery} from 'react-responsive';
import { FaBars } from 'react-icons/fa'; 
import { IoClose } from "react-icons/io5";
export const Navbar = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className='flex justify-end items-center px-5 py-3.5 bg-white border-b w-screen bg-opacity-25 shadow-md '>
        
{/* for bars  */}

       
        <div className={`lg:hidden md:hidden ${isMenuOpen ? 'hidden' : 'flex'}`} onClick={toggleMenu}>
          <FaBars size={30} /> 
        </div>


      

{/* for desktop  */}

      <div className={` flex gap-10 ${isMenuOpen ? 'hidden' : 'hidden'} lg:flex md:flex `}>
        <a href="/second" className='text-lg text-black'>Home</a>
        <a href="/" className='text-lg text-black'>Grid</a>
        <a href="https://www.linkedin.com/in/meet-korat-43a4a9267/" className='no-underline text-lg text-black'>LinkedIn</a>
       </div>
       



{/* for dropdown bars */}

       <div className={`lg:hidden  ${isMenuOpen ? 'block' : 'hidden'} flex flex-col justify-between mr-[45%] mb-[0vh] `}>
          {/* for close icon  */}
          
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} ml-[350%] `} onClick={toggleMenu}>
            <IoClose size={40} />
          </div>
        
        <a href="/second" className='text-lg text-black'>Home</a>
        <a href="/" className='text-lg text-black'>Grid</a>
        <a href="https://www.linkedin.com/in/meet-korat-43a4a9267/" className='no-underline text-lg text-black'>LinkedIn</a>
       </div>

    </nav>
    
  )
}
