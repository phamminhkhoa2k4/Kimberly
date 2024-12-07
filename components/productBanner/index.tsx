import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  rings: Product[];
  setCount:(value : number) => void;
  count : number;
};

const ProductBanner = ({ rings ,setCount ,count}: Props) => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";
  const [products,setProducts] = useState<Product[]>([])
  useEffect(() => {
    setProducts(rings.slice(0, 24 * count));
  }, [rings, count]);

  return (
    <section className="lg:mx-auto lg:w-3/4 mx-5 ">
      <div className="grid grid-cols-2 lg:grid-cols-4  items-center gap-5 ">
        {products &&
          products.slice(0, 4).map((ring, index) => (
            <Link key={ring.productId} href={`/product/${ring.productId}`}>
              <div key={index} className="flex flex-col  ">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={`${baseUrl}/image/id/${
                      (ring.images as string).split(",")[0]
                    }`}
                    alt=""
                    height={480}
                    width={480}
                    className="aspect-square object-cover rounded-lg object-center transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  {products && ring.metallicColor === "Vàng Chanh" && (
                    <div className="flex ">
                      <span className="border p-1 rounded-full my-3">
                        <Image
                          src={"/Type/type-gold.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-5 w-5"
                        />
                      </span>
                    </div>
                  )}
                  {products && ring.metallicColor == "Vàng Trắng" && (
                    <div className="flex ">
                      <span className="border p-1 rounded-full my-3">
                        <Image
                          src={"/Type/type-silver.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-5 w-5"
                        />
                      </span>
                    </div>
                  )}
                  {products && ring.metallicColor === "Vàng Hồng" && (
                    <div className="flex ">
                      <span className="border p-1 rounded-full my-3">
                        <Image
                          src={"/Type/type-rose.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-5 w-5"
                        />
                      </span>
                    </div>
                  )}

                  <div className="flex items-center font-bold text-sm">
                    <span className="text-sm lg:line-clamp-1">
                      {ring.productName}
                    </span>
                  </div>
                  {ring.price > 0 && (
                    <div className="text-xs py-2">{ring.price}₫</div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        {products && products.length >= 8 && (
          <div className="col-span-2 row-span-2 -mx-5 lg:mx-0 overflow-hidden lg:rounded-lg">
            <Image
              src={"/Banner/product-banner-1.jpg"}
              alt=""
              height={905}
              width={700}
              className="object-cover aspect-square object-center w-full h-[390px]  lg:h-[800px] rounded-lg hover:scale-110"
            />
          </div>
        )}
        {products &&
          products.slice(4, 12).map((ring, index) => (
            <Link key={ring.productId} href={`/product/${ring.productId}`}>
              <div key={index} className="flex flex-col  ">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={`${baseUrl}/image/id/${
                      (ring.images as string).split(",")[0]
                    }`}
                    alt=""
                    height={480}
                    width={480}
                    className="aspect-square object-cover rounded-lg object-center transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  {products && ring.metallicColor === "Vàng Chanh" && (
                    <div className="flex ">
                      <span className="border p-1 rounded-full my-3">
                        <Image
                          src={"/Type/type-gold.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-5 w-5"
                        />
                      </span>
                    </div>
                  )}
                  {products && ring.metallicColor == "Vàng Trắng" && (
                    <div className="flex ">
                      <span className="border p-1 rounded-full my-3">
                        <Image
                          src={"/Type/type-silver.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-5 w-5"
                        />
                      </span>
                    </div>
                  )}
                  {products && ring.metallicColor === "Vàng Hồng" && (
                    <div className="flex ">
                      <span className="border p-1 rounded-full my-3">
                        <Image
                          src={"/Type/type-rose.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-5 w-5"
                        />
                      </span>
                    </div>
                  )}

                  <div className="flex items-center font-bold text-sm">
                    <span className="text-sm lg:line-clamp-1">
                      {ring.productName}
                    </span>
                  </div>
                  {ring.price > 0 && (
                    <div className="text-xs py-2">{ring.price}₫</div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        {products && products.length >= 12 && (
          <div className="col-span-2 lg:col-start-3 lg:row-start-5 row-span-2 -mx-5 lg:mx-0 overflow-hidden lg:rounded-lg">
            <Image
              src={"/Banner/product-banner-1.jpg"}
              alt=""
              height={905}
              width={700}
              className="object-cover aspect-square object-center w-full h-[390px]  lg:h-[800px] rounded-lg hover:scale-110"
            />
          </div>
        )}
        {products &&
          products.slice(12, products.length).map((ring, index) => (
            <Link key={ring.productId} href={`/product/${ring.productId}`}>
              <div key={index} className="flex flex-col  ">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={`${baseUrl}/image/id/${
                      (ring.images as string).split(",")[0]
                    }`}
                    alt=""
                    height={480}
                    width={480}
                    className="aspect-square object-cover rounded-lg object-center transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  {products && ring.metallicColor === "Vàng Chanh" && (
                    <div className="flex ">
                      <span className="border p-1 rounded-full my-3">
                        <Image
                          src={"/Type/type-gold.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-5 w-5"
                        />
                      </span>
                    </div>
                  )}
                  {products && ring.metallicColor == "Vàng Trắng" && (
                    <div className="flex ">
                      <span className="border p-1 rounded-full my-3">
                        <Image
                          src={"/Type/type-silver.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-5 w-5"
                        />
                      </span>
                    </div>
                  )}
                  {products && ring.metallicColor === "Vàng Hồng" && (
                    <div className="flex ">
                      <span className="border p-1 rounded-full my-3">
                        <Image
                          src={"/Type/type-rose.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-5 w-5"
                        />
                      </span>
                    </div>
                  )}

                  <div className="flex items-center font-bold text-sm">
                    <span className="text-sm lg:line-clamp-1">
                      {ring.productName}
                    </span>
                  </div>
                  {ring.price > 0 && (
                    <div className="text-xs py-2">{ring.price}₫</div>
                  )}
                </div>
              </div>
            </Link>
          ))}
      </div>
      { products.length !== rings.length && (
        <div className="flex items-center justify-center my-10">
          <button className=" rounded-lg border-2 px-6 py-3 uppercase font-medium" onClick={() => setCount(count + 1)}>
            xem thêm
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductBanner;
