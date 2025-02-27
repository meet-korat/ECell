import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import {useMediaQuery} from 'react-responsive';

export const First = () => {
    const [color,setColor]=useState(new Array(8).fill('#00477A'));
    const [array,setArray]=useState([]);

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 601px) and (max-width: 1024px)' });
    
  

  return (

    
    <>
    <Navbar/>

    <div style={{
        flexDirection:isMobile? 'column-reverse' :'row', 
        marginLeft:isMobile ? '13%' : '0',
        gap:isMobile ? '2vh' : '1.5vw'
    
        }}
     className=' flex justify-center flex-wrap mt-11  gap-[1.5vw]  '>

        <div style={{
            width : isTablet?'700px':'350px',
        }}
         className='text-white h-[350px] w-[350px]  rounded-2xl bg-gradient-to-br from-[#3300FF] to-[#FA00FF]'></div>
        <div className='text-white bg-gray-100 overflow-hidden h-[350px] w-[350px] rounded-2xl border border-gray-900 '>
            <img className='object-contain w-full h-full' src="/image/logo.png" alt="E cell logo" />
        </div>
        <div className='text-white shadow-inner grid grid-cols-3 grid-rows-3 p-7 gap-1.5 bg-[#d9d9d9] h-[350px] w-[350px] rounded-2xl'
        style={{
            boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.5)',
          }}
        flex flex-wrap>
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
                          }, i*200);
                    })
                }
            }
            style={{background:color}} id='8' class="bg-[#7A0000] p-6 rounded-xl" ></div>

           
            
        </div>
        
    </div>
    </>
    
  )
}

