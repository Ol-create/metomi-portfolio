// pages/sub-page.js
import Image from 'next/image';

export default function Design() {
  return (
  <div>
          <Image 
            src="/images/design1.png" 
            alt="first image" 
            width={1282} 
            height={604} 
            className="w-full h-auto" 
          />
          <Image 
            src="/images/design2.png" 
            alt="first image" 
            width={1282} 
            height={604} 
            className="w-full h-auto" 
          />
          <Image 
            src="/images/design3.png" 
            alt="design6" 
            width={1282} 
            height={604} 
            className="w-full h-auto" 
          />
          <Image 
            src="/images/design4.png" 
            alt="design 4" 
            width={1282} 
            height={604} 
            className="w-full h-auto" 
          />
          <Image 
            src="/images/design5.png" 
            alt="design 5" 
            width={1282} 
            height={604} 
            className="w-full h-auto" 
          />
          <Image 
            src="/images/design6.png" 
            alt="design 6" 
            width={1282} 
            height={604} 
            className="w-full h-auto" 
          />
        </div>
  );
}
