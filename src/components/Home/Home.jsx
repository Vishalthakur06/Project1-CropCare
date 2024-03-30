import React from 'react'
import agri from './image/agri.jpg'


export default function Home() {
    return (
        <>
          <div style={{
            width:'100%',
            height:'750px',
            backgroundImage: `url(${agri})`,
            backgroundRepeat:'no-repeat', 
            backgroundSize:'cover'
             
          }}>
            <div className='text-white h-screen w-screen flex justify-center items-center'>
            <h1 className='h-70 w-70 text-4xl font-bold flex justify-center items-center'>Tiny seeds, tender care; fruitful yields, nature's share</h1>
            </div>
          </div>
        </>
    );
}