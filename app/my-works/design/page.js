// pages/sub-page.js
import Image from 'next/image';

export default function Design() {
  return (
  <div className="grid grid-cols-2 gap-y-24">
          <Image 
            src="/images/design1.png" 
            alt="first image" 
            width={568} 
            height={534} 
            className="w-full h-auto" 
          />
          <Image 
            src="/images/design2.png" 
            alt="first image" 
            width={568} 
            height={534} 
            className="w-full h-auto" 
          />
          <Image 
            src="/images/design3.png" 
            alt="design6" 
            width={568} 
            height={534} 
            className="w-full h-auto" 
          />
          <Image 
            src="/images/design4.png" 
            alt="design 4" 
            width={568} 
            height={534} 
            className="w-full h-auto" 
          />
          <Image 
            src="/images/design5.png" 
            alt="design 5" 
            width={568} 
            height={534} 
            className="w-full h-auto" 
          />
          <Image 
            src="/images/design6.png" 
            alt="design 6" 
            width={568} 
            height={534} 
            className="w-full h-auto" 
          />
          </div>
  );
}
