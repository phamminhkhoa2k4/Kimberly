import Image from "next/image";


const Discovery = () => {
    return (
      <>
        <section>
          <div className="text-2xl my-5 mt-20 text-[#20475d] font-semibold text-center">
            Khám Phá
          </div>
          <div className="bg-slate-50 lg:py-20">
            <div className="mx-auto lg:w-5/6 flex items-center  justify-between">
              <div className="bg-white">
                <Image
                  src={"/discovery.jpg"}
                  alt=""
                  height={367}
                  width={560}
                  className="object-cover lg:h-[380px] lg:w-[560px] object-center p-4"
                />
                <p className="px-4 pb-4 text-base capitalize font-medium text-[#20475d]">
                  this is description
                </p>
              </div>
              <div className="bg-white">
                <Image
                  src={"/discovery.jpg"}
                  alt=""
                  height={367}
                  width={560}
                  className="object-cover lg:h-[380px] lg:w-[560px] object-center p-4"
                />
                <p className="px-4 pb-4 text-base capitalize font-medium text-[#20475d]">
                  this is description
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Discovery;