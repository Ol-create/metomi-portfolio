"use client"
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const pathname = usePathname()
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <html lang="en">
      <body
        className="bg-orange-200"
      >
        <nav className="mt-7 w-full"> 
    <ul className="flex w-full">
      <Link href='/'><li className={`flex items-center justify-center absolute left-32 top-7 w-20 h-20 rounded-full font-semibold hover:bg-[#df856c] ${pathname === "/" ? "bg-[#D37157] text-white" : "bg-[#FFECE7] text-gray-700"}`}>Home</li></Link>
      <li className="text-gray-700 flex mx-auto space-x-9 bg-gradient-to-r from-rose-100 to-rose-200 shadow-lg rounded-3xl px-8 py-2 justify-around items-center w-[500px]">
        <Link 
          href='/contact'
          className={`text-center w-40 hover:bg-[#df856c]  rounded-lg p-3 cursor-pointer ${pathname.startsWith("/contact") ? "bg-[#D37157] text-white" : " text-gray-700"}`}>
          <p>Contact</p></Link>
      <Link 
        href='/my-works/design'
        className={`text-center w-40 hover:bg-[#df856c]  rounded-lg p-3 cursor-pointer ${pathname.startsWith("/my-works") ? "bg-[#D37157] text-white" : " text-gray-700"}`}
      >
      <p>My Works</p></Link></li>
    </ul>
   </nav>        
   {children}
   <section className="flex flex-col items-center bg-[#1E1E1E] w-full h-[75vh] text-white">
    <h4 className="font-bold text-3xl mt-14 mb-10">Connect with me</h4>
    <p className="text-xl"> You can connect with me on various </p>
    <p className="mb-12 text-xl"> social media platforms </p>
    <div className="flex  space-x-7">
       <Link href="https://x.com/MET0MI" target="_blank">
       <Image 
                 src="/images/twitter.png" 
                 alt="twitter" 
                 width={80} 
                 height={80} 
                 className="flex justify-center items-center p-7 rounded-full border border-[#D37157] cursor-pointer hover:bg-[#343434]"
               />
               </Link>
<Link href="https://www.behance.net/metomioyetunde" target="_blank">
      <Image 
                src="/images/benhance.png" 
                alt="benhance" 
                width={80} 
                height={80} 
                className="flex justify-center items-center p-7 rounded-full border border-[#D37157] cursor-pointer hover:bg-[#343434]"
              />
</Link>

    <Link href="https://www.linkedin.com/in/metomi-oyetunde-288319183" target="_blank">
    <Image 
  src="/images/linkedin.png" 
  alt="LinkedIn" 
  width={80} 
  height={80} 
  className="flex justify-center items-center p-7 rounded-full border border-[#D37157] cursor-pointer hover:bg-[#343434]"
/></Link>
    </div>
    <div 
      className="flex space-x-2 m-10 hover:bg-[#343434] p-1 rounded-md cursor-pointer px-2"
      onClick={scrollToTop}
      >
    <p>Back to the top</p>
     <Image 
               src="/images/arrow-up.png" 
               alt="goto top arrow" 
               width={20} 
               height={12} 
             />
    </div>
    
   </section>

      </body>
    </html>
  );
}
