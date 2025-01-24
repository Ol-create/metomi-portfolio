import Image from "next/image";
import Link from "next/link";

export default function MyWorksLayout({ children }) {
    return(
        <div>
          <header>
          <Link href="./design">Designs</Link>
          <Link href="./case-study">Case Study</Link>
          <Link href="./project">Projects</Link>
          </header>
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