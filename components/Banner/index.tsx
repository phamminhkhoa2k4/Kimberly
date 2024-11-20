import Image from "next/image";



type Props = {
  imageUrl: string;
  imageUrlMobile: string;
};
const Banner = ({imageUrl,imageUrlMobile} : Props) => {
    return (
      <>
        <section className="mt-2">
          <Image
            src={imageUrl!}
            alt=""
            width={1920}
            height={600}
            className="w-full object-cover object-center h-[478px] hidden lg:block"
          />
          <Image
            src={imageUrlMobile!}
            alt=""
            width={600}
            height={188}
            className="w-full object-cover object-center h-[122px] lg:hidden"
          />
        </section>
      </>
    );
}

export default Banner;