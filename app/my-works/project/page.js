import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <h4>
        No project to view yet!
        </h4>
        <Image 
                    src="/images/no-project.png" 
                    alt="first image" 
                    width={300} 
                    height={300}  
                    className='mt-14'
                  />

                  <div className='flex items-center justify-center mx-auto hover:bg-orange-300 p-2  rounded-lg cursor-pointer w-80 '>
                                      <p>Click here to view other works</p>
                                      <Image 
                                    src="/images/diagonal-arrow-black.png" 
                                    alt="first image" 
                                    width={20} 
                                    height={20} 
                                  /> 
                                  </div>
    </div>
  )
}

export default Projects