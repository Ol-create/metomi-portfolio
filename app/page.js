import Image from "next/image";

export default function Home() {
  return (
    <>
   <section className="pb-14">
    <div className="w-full mx-auto mt-14 text-center">
    <h2 className="text-5xl ">
      Making it productive
    </h2>
    <h4 className="mt-8 text-[#706d6d]">I partner with clients to turn their innovative ideas into digital successes.

<br />Let’s create something extraordinary.</h4>
<div className="flex justify-center items-center w-40 bg-[#D37157] m-auto rounded-lg p-3 mt-7">
<p className="text-lg text-white">Reach Me</p> 
<Image 
          src="/images/diagonal-arrow.png" 
          alt="diagonal-arrow" 
          width={24} 
          height={24} 
          className="w-5 h-5"
        />
</div>
    </div>
        <Image 
          src="/images/homeImage1.png" 
          alt="first image" 
          width={1282} 
          height={604} 
          className="w-full h-auto" 
        />
      </section>
      <section className="pt-16 bg-[#FFECE7]">
        <div className="flex items-center flex-col text-[#898686] text-lg mb-10">
          <p className="flex justify-center items-center ">
          Hi there! I'm Lordom, a Product Designer and I focus on understanding user needs to create 
        </p>
        <p>
        solutions that balance functionality and aesthetics. I design and manage products for start-ups 
        </p>
        <p>
        companies, overseeing projects from start to finish. I believe in the power of design to turn ideas 
        </p>

        <p>
        into impactful experiences. Trust me to help bring your vision to life.
        </p>

        <p className="my-4">
        I currently design and manage products at Fordest Technologies.
        </p>
        <h4 className="text-black mt-16">
        You can trust me with projects relating to
        </h4>
        </div>

        <Image 
          src="/images/service-type.png" 
          alt="first image" 
          width={1282} 
          height={500} 
          className="w-[75%] mx-auto" 
        />
      </section>
      <section className="bg-[#7ab8d9]">
        <h4>
        Checkout some of my designs
        </h4>
        <div className="grid grid-cols-2 gap-y-10">
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
      </section>

      <section className="bg-[#D37157]">
        <h4>
        Expressions from some of my clients
        </h4>
        <Image 
          src="/images/no-testimony.png" 
          alt="design 6" 
          width={1282} 
          height={604} 
          className="w-full h-auto" 
        />
      </section>
      <section>
        <h4>
        I delight in designing intuitive and productive solutions that
        resonate with users.
        </h4>
        <p>
        LET’S BUILD SOMETHING REMARKABLE
        TOGETHER!
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
      </section>
    </>
  );
}
