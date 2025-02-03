import Image from "next/image";
import Link from "next/link";

export default function MyWorksLayout({ children }) {
    return(
        <div className="flex flex-col items-center">
          <header className="flex w-[560px] justify-center mt-7">
          <Link href="./design"
                className="text-center w-40 bg-[#D37157] hover:bg-[#b85c43] m-auto rounded-lg p-3 mt-7 cursor-pointer">
                  Designs
          </Link>
          <Link href="./case-study"
                className="text-center w-40 bg-[#FFECE7] hover:bg-[#b85c43] m-auto rounded-lg p-3 mt-7 cursor-pointer">
                  Case Study
          </Link>
          <Link href="./project"
                className="text-center w-40 bg-[#FFECE7] hover:bg-[#b85c43] m-auto rounded-lg p-3 mt-7 cursor-pointer">
                  Projects
          </Link>
          </header>
          <p className="my-8  bg-[#FFECE7] py-3 px-6">Feel free to explore some of the designs and projects that I have worked on</p>
          <main>{children}</main>
          <footer className="flex flex-col justify-center items-center mt-24">
              <p className="text-lg">If you are excited with any of my works,
              </p>
              <p className="text-lg">fell free to reach out to me.</p>
               <div className="flex justify-center items-center w-40 bg-[#D37157] hover:bg-[#b85c43] m-auto rounded-lg p-3 mt-7 mb-12 cursor-pointer">
              <p className="text-lg text-white">Reach Me</p> 
              <Image 
                        src="/images/diagonal-arrow.png" 
                        alt="diagonal-arrow" 
                        width={24} 
                        height={24} 
                        className="w-5 h-5"
                      />
              </div>
          </footer>
        </div>
      );
  }