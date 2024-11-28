import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import debounce from "lodash.debounce";
import Image from "next/image";
import { useEffect, useState } from "react";



type Props = {
   product : Product;
}

const ProductDetail = ({product}: Props) => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = debounce(() => {
    setScrollY(window.scrollY);
  }, 10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("scroll", scrollY);
  }, [scrollY]);
  return (
    <>
      <section className="lg:mx-auto lg:w-3/4 mx-5 mt-5">
        <div className="flex lg:flex-row flex-col gap-8 items-start ">
          <div className="lg:w-7/12">
            <div className="lg:grid flex lg:grid-cols-2 lg:grid-rows-4 grid-cols-1 gap-5 overflow-x-scroll lg:overflow-x-hidden scrollbar-hide">
              <Image
                src={`${baseUrl}/image/id/${product?.images}`}
                alt=""
                height={1024}
                width={1024}
                className="object-cover object-center lg:col-span-2 lg:row-span-2 rounded-md overflow-hidden shadow-md border flex-shrink-0"
              />
              <Image
                src={`${baseUrl}/image/id/${product?.images}`}
                alt=""
                height={1024}
                width={1024}
                className="object-cover object-center aspect-square rounded-md overflow-hidden shadow-md border flex-shrink-0"
              />
              <Image
                src={`${baseUrl}/image/id/${product?.images}`}
                alt=""
                height={1024}
                width={1024}
                className="object-cover object-center aspect-square rounded-md overflow-hidden shadow-md border flex-shrink-0"
              />
              <Image
                src={`${baseUrl}/image/id/${product?.images}`}
                alt=""
                height={1024}
                width={1024}
                className="object-cover object-center aspect-square rounded-md overflow-hidden shadow-md border flex-shrink-0"
              />
              <Image
                src={`${baseUrl}/image/id/${product?.images}`}
                alt=""
                height={1024}
                width={1024}
                className="object-cover object-center aspect-square rounded-md overflow-hidden shadow-md border flex-shrink-0"
              />
            </div>
          </div>
          <div className="lg:w-5/12 lg:relative   ">
            <div
              className={cn(
                "",
                scrollY >= 70 ? "lg:fixed lg:top-16" : "",
                scrollY >= 800 ? "lg:absolute lg:top-[790px]" : ""
              )}
            >
              <div className="flex items-start gap-2 text-lg font-medium">
                {product?.productName}
              </div>
              <div className="text-xl font-bold my-5">{product?.price}₫</div>
              {product?.isIncludeMasterDiamond && (
                <p className="text-sm font-medium py-3 text-[#20475d]">
                  Giá trên là giá vỏ trang sức chưa bao gồm viên chủ.
                </p>
              )}
              <div className="flex items-center gap-2 my-3">
                <span className="font-semibold">Kiểu Dáng Viên:</span>
                <span>{product?.shape}</span>
              </div>
              <div>
                {product?.shape === "Round" && (
                  <Image
                    src={"/Shape/round.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center aspect-square"
                  />
                )}
                {product?.shape === "Oval" && (
                  <Image
                    src={"/Shape/oval.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center aspect-square"
                  />
                )}
                {product?.shape === "Pear" && (
                  <Image
                    src={"/Shape/pear.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center aspect-square"
                  />
                )}
                {product?.shape === "Emerald"  && (
                  <Image
                    src={"/Shape/emerald.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center aspect-square"
                  />
                )}
              </div>
              <div className="flex items-center gap-2 my-3">
                <span className="font-semibold">Màu Kim Loại:</span>
                <span>{product?.metallicColor}</span>
              </div>
              <div className="border-[#20475d] border p-1 aspect-square w-[51px] rounded-full flex items-center justify-center ">
                {product?.metallicColor === "Vàng Vàng" && (
                  <Image
                    src={"/Type/type-gold.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center "
                  />
                )}
                {product?.metallicColor === "Vàng Trắng" && (
                  <Image
                    src={"/Type/type-silver.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center "
                  />
                )}
                {product?.metallicColor === "Vàng Hồng" && (
                  <Image
                    src={"/Type/type-rose.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center "
                  />
                )}
              </div>
              <div className="flex items-center gap-2 mb-3 py-3">
                <span className="font-semibold">Chất Liệu:</span>
              </div>
              <span className="px-6 py-3 border-[#20475d] border rounded-lg">
                {product?.material}
              </span>
              <div className="flex items-center gap-2 mt-3 py-3">
                <span className="font-semibold">Đai:</span>
                <span>Tấm</span>
              </div>
              <div className=" mt-5border-[#20475d] border p-1 aspect-square w-[51px] rounded-full flex items-center justify-center ">
                <Image
                  src={"/dai-tam.png"}
                  alt=""
                  height={64}
                  width={64}
                  className="w-10 h-10 object-cover object-center "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default ProductDetail;