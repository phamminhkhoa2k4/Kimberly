import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";




type Props = {
  rings: Product[];
};

const  ProductBanner = ({rings} : Props) => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";
    return (
      <section className="lg:mx-auto lg:w-3/4 mx-5 ">
        <div className="grid grid-cols-2 lg:grid-cols-4  items-center gap-5 ">
          {rings &&
            rings.slice(0, 4).map((ring, index) => (
              <Link href={`/product/${ring.productId}`}>
                <div key={index} className="flex flex-col  ">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={`${baseUrl}/image/id/${ring.images}`}
                      alt=""
                      height={480}
                      width={480}
                      className="aspect-square object-cover rounded-lg object-center transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col">
                    {rings && ring.metallicColor === "Vàng Vàng" && (
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
                    {rings && ring.metallicColor == "Vàng Trắng" && (
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
                    {rings && ring.metallicColor === "Vàng Hồng" && (
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
                      <span className="line-clamp-1">{ring.productName}</span>
                    </div>
                    <div className="text-xs py-2">{ring.price}₫</div>
                  </div>
                </div>
              </Link>
            ))}
          {rings && rings.length >= 8 && (
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
          {rings &&
            rings.slice(4, 12).map((ring, index) => (
              <div key={index} className="flex flex-col  ">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={`${baseUrl}/image/id/${ring.images}`}
                    alt=""
                    height={480}
                    width={480}
                    className="aspect-square object-cover rounded-lg object-center transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  {rings && ring.metallicColor === "Vàng Vàng" && (
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
                  {rings && ring.metallicColor == "Vàng Trắng" && (
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
                  {rings && ring.metallicColor === "Vàng Hồng" && (
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
                    <span className="line-clamp-1">{ring.productName}</span>
                  </div>
                  <div className="text-xs py-2">{ring.price}₫</div>
                </div>
              </div>
            ))}
          {rings && rings.length >= 12 && (
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
          {rings &&
            rings.slice(12, rings.length).map((ring, index) => (
              <div key={index} className="flex flex-col  ">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={`${baseUrl}/image/id/${ring.images}`}
                    alt=""
                    height={480}
                    width={480}
                    className="aspect-square object-cover rounded-lg object-center transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  {rings && ring.metallicColor === "Vàng Vàng" && (
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
                  {rings && ring.metallicColor == "Vàng Trắng" && (
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
                  {rings && ring.metallicColor === "Vàng Hồng" && (
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
                    <span className="line-clamp-1">{ring.productName}</span>
                  </div>
                  <div className="text-xs py-2">{ring.price}₫</div>
                </div>
              </div>
            ))}
        </div>
      </section>
    );
}

export default ProductBanner;