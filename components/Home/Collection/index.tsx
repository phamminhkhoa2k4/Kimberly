import { Collection } from "@/types/collection";
import { Product } from "@/types/product";
import { getData } from "@/utils/axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CollectionPage = () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";

    const [pendant,setPendant] = useState<Product[]>();

      useEffect(() => {
        const fetch = async () => {
          await getData({
            endpoint: "/product/filter?categoryName=Vòng Cổ&sortBy=Mới Nhất",
          }).then((pen) => {
              setPendant(pen);
          });
        };
        fetch();
      }, []);
  return (
    <>
      <section>
        <div className="mt-20 mx-auto w-full lg:w-4/5 flex flex-col lg:flex-row lg:items-center justify-center gap-5">
          <div className="w-full lg:w-1/2 h-full relative">
            <Image
              src={"/Collections/bst-3.jpg"}
              alt=""
              height={805}
              width={613}
              className="object-center lg:h-[780px] h-[258px]  object-cover lg:rounded-lg"
            />
            <div className="hidden absolute lg:flex w-full justify-center top-[650px]">
              <Link
                href={"/diamond-pendant"}
                className=" bg-transparent border-2 border-neutral-500 text-[#20475d] rounded-lg px-6 py-3 text-lg font-bold hover:bg-[#20475d] hover:text-white"
              >
                Mặt Dây Chuyền Kim Cương
              </Link>
            </div>
          </div>

          <div className="flex mx-5 lg:mx-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-5 w-full  overflow-y-auto lg:w-1/2">
            {pendant?.slice(0, 4).map((pen) => (
              <Link
                href={`/product/${pen.productId}`}
                key={pen.productId}
                className=" min-w-[200px] lg:w-full h-full border p-2 rounded-lg "
              >
                <Image
                  src={`${baseUrl}/image/id/${
                    (pen.images as string).split(",")[0]
                  }`}
                  alt=""
                  height={297}
                  width={297}
                  className="aspect-square  object-cover object-center rounded-lg"
                />
                <div className="flex flex-col  p-3 py-1 gap-1">
                  <span className="border w-7 flex items-center justify-center h-7 p-1 rounded-full">
                    {pen.metallicColor === "Vàng Chanh" && (
                      <Image
                        src={"/Type/type-gold.png"}
                        alt=""
                        height={20}
                        width={20}
                        className="aspect-square w-5 h-5 object-cover object-center rounded-full"
                      />
                    )}
                    {pen.metallicColor === "Vàng Trắng" && (
                      <Image
                        src={"/Type/type-silver.png"}
                        alt=""
                        height={20}
                        width={20}
                        className="aspect-square w-5 h-5 object-cover object-center rounded-full"
                      />
                    )}
                    {pen.metallicColor === "Vàng Hồng" && (
                      <Image
                        src={"/Type/type-rose.png"}
                        alt=""
                        height={20}
                        width={20}
                        className="aspect-square w-5 h-5 object-cover object-center rounded-full"
                      />
                    )}
                  </span>
                  <div className="flex items-center">
                    <div className="line-clamp-1  font-medium">
                      {pen.productName}
                    </div>
                  </div>
                  <p className="flex items-center gap-2">
                    <span className="flex text-xs font-medium">
                      {pen.price} <span>VND</span>
                    </span>
                    {/* <span className="flex text-xs line-through opacity-60">
                      <span>29.750,000</span>
                      <span>VND</span>
                    </span> */}
                    {/* <span className="hidden lg:block text-red-500">(-16%)</span> */}
                  </p>
                  {/* <span className="lg:hidden text-red-500">(-16%)</span> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center my-5">
          <Link
            href={"/diamond-pendant"}
            className="lg:hidden bg-transparent border-2 border-neutral-500 text-[#20475d] lg:rounded-lg px-6 py-3 text-lg font-bold hover:bg-[#20475d] hover:text-white"
          >
            Mặt Dây Chuyền Kim Cương
          </Link>
        </div>
      </section>
    </>
  );
};

export default CollectionPage;
