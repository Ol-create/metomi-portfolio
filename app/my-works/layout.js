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
          <footer>
              <p>If you are excited with any of my works,
              fell free to reach out to me.
              </p>
              <div className="bg-[#D37157] flex">
                        <p>Reach me </p>
                        <Image 
                        src="/images/diagonal-arrow.png" 
                        alt="design 6" 
                        width={20} 
                        height={15} 
                      />
                      </div>
          </footer>
        </div>
      );
  }