import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Collections  = () => {
    return (
      <>
        <section className="mx-auto mt-10 lg:mt-16 lg:w-3/4">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="flex flex-col items-center justify-center ">
              <Image
                src={"/Collections/bst-2.jpg"}
                alt=""
                width={499}
                height={624}
                className="object-center rounded-lg lg:h-[624px] lg:w-[500px] w-[173px] h-[216px] object-cover"
              />
              <div className="flex items-center flex-col justify-center gap-3 mt-5 ">
                <div className="text-base font-medium tracking-wider ">
                  Bộ Sưu Tập Stella
                </div>
                <Link href={"#"} className="flex items-center gap-1 group">
                  Xem Chi Tiết{" "}
                  <IoIosArrowForward className="h-5 w-5 group-hover:ml-2 duration-75 ease-linear transition-all	" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <Image
                src={"/Collections/bst-1.jpg"}
                alt=""
                width={499}
                height={624}
                className="object-center lg:h-[624px] lg:w-[500px] w-[173px] h-[216px] rounded-lg object-cover"
              />
              <div className="flex items-center flex-col justify-center gap-3 mt-5 ">
                <div className="text-base font-medium tracking-wider ">
                  Bộ Sưu Tập Stella
                </div>
                <Link href={"#"} className="flex items-center gap-1 group">
                  Xem Chi Tiết{" "}
                  <IoIosArrowForward className="h-5 w-5 group-hover:ml-2 duration-75 ease-linear transition-all	" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}


export default Collections;