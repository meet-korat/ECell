import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
export const First = () => {
    const [color,setColor]=useState(new Array(8).fill('#00477A'));
    const [array,setArray]=useState([]);

  return (

    
    <>
    <Navbar/>

    <div className=' flex justify-center flex-wrap mt-11  gap-[1.5vw]  '>
        <div className='text-white h-[350px] w-[350px]  rounded-2xl bg-gradient-to-br from-[#3300FF] to-[#FA00FF]'></div>
        <div className='text-white bg-gray-100 overflow-hidden h-[350px] w-[350px] rounded-2xl border border-gray-900 '>
            <img className='object-contain w-full h-full' src="src\image\logo.png" alt="logo" />
        </div>
        <div className='text-white grid grid-cols-3 grid-rows-3 p-7 gap-1.5 bg-[#d9d9d9] h-[350px] w-[350px] rounded-2xl' flex flex-wrap>
            <div onClick={
                ()=>{
                    if(color[0]==='#00477A'){
                        const update=[...color];
                        update[0]='#7A0000';
                        setColor(update);
                        setArray((prevArray)=>[...prevArray,0]);
                    }
                        
                }
            } style={{background:color[0]}} id='0' class="bg-[#00477A] p-6 rounded-xl" ></div>
            <div onClick={
                ()=>{
                    if(color[1]==='#00477A'){
                        const update=[...color];
                        update[1]='#7A0000';
                        setColor(update);
                        setArray(prevArray=>[...prevArray,1]);
                    }
                }
            } style={{background:color[1]}} id='1' class="bg-[#00477A] p-6 rounded-xl" ></div>
            <div onClick={
                ()=>{
                    if(color[2]==='#00477A'){
                        const update=[...color];
                        update[2]='#7A0000';
                        setColor(update);
                        setArray(prevArray=>[...prevArray,2]);
                    }
                        
                }
            } style={{background:color[2]}} id='2' class="bg-[#00477A] p-6 rounded-xl" ></div>
            <div onClick={
                ()=>{
                    if(color[3]==='#00477A'){
                        const update=[...color];
                        update[3]='#7A0000';
                        setColor(update);
                        setArray(prevArray=>[...prevArray,3]);
                    }
                        
                }
            } style={{background:color[3]}} id='3' class="bg-[#00477A] p-6 rounded-xl" ></div>
            <div onClick={
                ()=>{
                    if(color[4]==='#00477A'){
                        const update=[...color];
                        update[4]='#7A0000';
                        setColor(update);
                        setArray(prevArray=>[...prevArray,4]);
                    }
                        
                }
            } style={{background:color[4]}} id='4' class="bg-[#00477A] p-6 rounded-xl" ></div>
            <div onClick={
                ()=>{
                    if(color[5]==='#00477A'){
                        const update=[...color];
                        update[5]='#7A0000';
                        setColor(update);
                        setArray(prevArray=>[...prevArray,5]);
                        
                    }
                        
                }
            } style={{background:color[5]}} id='5' class="bg-[#00477A] p-6 rounded-xl" ></div>
            <div onClick={
                ()=>{
                    if(color[6]==='#00477A'){
                        const update=[...color];
                        update[6]='#7A0000';
                        setColor(update);
                        setArray(prevArray=>[...prevArray,6]);
                        
                    }
                        
                }
            } style={{background:color[6]}} id='6' class="bg-[#00477A] p-6 rounded-xl" ></div>
            <div onClick={
                ()=>{
                    if(color[7]==='#00477A'){
                        const update=[...color];
                        update[7]='#7A0000';
                        setColor(update);
                        setArray(prevArray=>[...prevArray,7]);
                    }
                        
                }
            } style={{background:color[7]}} id='7' class="bg-[#00477A] p-6 rounded-xl" ></div>
            <div onClick={
                ()=>{
                    
                    array.forEach((index,i)=>{
                       
                        setTimeout(() => {
                            setColor((prevColors) => {
                              const updatedColors = [...prevColors];
                              updatedColors[index] = "#00477A"; // Reset color to blue
                              return updatedColors;
                            });
                          }, i*400);
                    })
                }
            }
            style={{background:color}} id='8' class="bg-[#7A0000] p-6 rounded-xl" ></div>

           
            
        </div>
        

    </div>
    </>
    
  )
}

