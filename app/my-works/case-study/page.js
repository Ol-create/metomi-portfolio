import Image from 'next/image'
import React from 'react'

const CaseStudy = () => {
  return (
    <div className='mx-20 mt-16'>
      <Image 
                  src="/images/case1.jpg" 
                  alt="first image" 
                  width={1282} 
                  height={604} 
                  className="w-full h-auto" 
                />  
                <Image 
                  src="/images/case2.jpg" 
                  alt="first image" 
                  width={1282} 
                  height={604} 
                  className="w-full h-auto" 
                /> 
                <Image 
                  src="/images/case3.jpg" 
                  alt="first image" 
                  width={1282} 
                  height={604} 
                  className="w-full h-auto" 
                /> 
                <Image 
                  src="/images/case4.jpg" 
                  alt="first image" 
                  width={1282} 
                  height={604} 
                  className="w-full h-auto" 
                /> 
                <Image 
                  src="/images/case5.jpg" 
                  alt="first image" 
                  width={1282} 
                  height={604} 
                  className="w-full h-auto" 
                />
                <Image 
                  src="/images/case6.jpg" 
                  alt="first image" 
                  width={1282} 
                  height={604} 
                  className="w-full h-auto" 
                /> 
                <Image 
                  src="/images/case7.jpg" 
                  alt="first image" 
                  width={1282} 
                  height={604} 
                  className="w-full h-auto" 
                />  
                <Image 
                  src="/images/case8.jpg" 
                  alt="first image" 
                  width={1282} 
                  height={604} 
                  className="w-full h-auto" 
                /> 
                <Image 
                  src="/images/case9.jpg" 
                  alt="first image" 
                  width={1282} 
                  height={604} 
                  className="w-full h-auto" 
                /> 
                <div className='mt-20'>
                <div className='flex items-center justify-center mx-auto hover:bg-orange-400 p-2  rounded-lg cursor-pointer w-60 '>
                    <p>View all on Behance</p>
                    <Image 
                  src="/images/diagonal-arrow-black.png" 
                  alt="first image" 
                  width={20} 
                  height={20} 
                /> 
                </div>
                </div>
                
    </div>
  )
}

export default CaseStudy