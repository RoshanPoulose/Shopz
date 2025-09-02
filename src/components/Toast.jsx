import React, { useEffect } from 'react'

const Toast = ({message,onclose}) => {
    useEffect(()=>{
        const timer=setTimeout(() => {
            onclose();
        }, 3000); 
        return ()=> clearTimeout(timer)   
    })
  return (  
    <div>
      <div className='fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in'>
        {message} 
      </div>          
    </div>
  )
}

export default Toast
