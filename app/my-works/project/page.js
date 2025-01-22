import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div>
        <h4>
        No project to view yet!
        </h4>
        <Image 
                    src="/images/no-project.png" 
                    alt="first image" 
                    width={60} 
                    height={60}  
                  />
        <div>
        <p>
        Click here to view other works
        </p>
        <Image 
                    src="/images/diagonal-arrow.png" 
                    alt="first image" 
                    width={1282} 
                    height={604} 
                    className="w-full h-auto" 
                  />
        </div>
    </div>
  )
}

export default Projects