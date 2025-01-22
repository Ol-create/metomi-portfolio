import Image from "next/image";

export default function Home() {
  return (
    <>
   
    <h2 className="text-5xl text-center">
      Making it productive
    </h2>
    <section>
        <Image 
          src="/images/homeImage1.png" 
          alt="first image" 
          width={1282} 
          height={604} 
          className="w-full h-auto" 
        />
      </section>
      <section>
        <p>
        Hi there! I'm Lordom, a Product Designer and I focus on understanding 
        user needs to create solutions that balance functionality and aesthetics. 
        I design and manage products for start-ups companies, overseeing projects from start to finish. 
        I believe in the power of design to turn ideas into impactful experiences. 
        Trust me to help bring your vision to life.
        </p>

        <p>
        I currently design and manage products at Fordest Technologies.
        </p>
        <h4>
        You can trust me with projects relating to
        </h4>
        <Image 
          src="/images/service-type.png" 
          alt="first image" 
          width={1282} 
          height={604} 
          className="w-full h-auto" 
        />
      </section>
      <section>
        <h4>
        Checkout some of my designs
        </h4>
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
