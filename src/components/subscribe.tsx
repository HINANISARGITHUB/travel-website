import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope } from "@fortawesome/free-regular-svg-icons";



const Subscribe = () => {
  return (
    
    <div className='bg-gray-100 mt-5 mr-36 ml-36 pb-10 border rounded-tl-3xl rounded-br-xl'>
       
      <h1 className='text-3xl font-semibold font-serif pl-14 pr-14 pt-8 pb-8 text-center'>Subscribe to get information, latest news and other interesting offers about Cobham</h1>
      <form>
      
      <div className=' flex justify-center gap-7 mt-10'> 
      <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 relative left-16 top-4 text-gray-500"/>
        <input type = "text" size={40} maxLength={30} placeholder='Your email' className='placeholder-customMargin border rounded-xl py-3 pl-12'></input>
        <button className='bg-orange-400 text-white w-40 border border-orange-400 rounded-xl'>Subscribe</button>
      </div>
      </form>
    </div>
  )
}

export default Subscribe;

// // 
