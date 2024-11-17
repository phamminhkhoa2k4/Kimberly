import Image from "next/image";


const Banner  = () => {
    return (
      <>
        <section>
          <Image src={"/Banner/banner-1.png"} alt="" height={870} width={1600} className="object-cover object-center w-full h-[220px] lg:h-[861px]"/>
        </section>
      </>
    );
}

export default Banner;