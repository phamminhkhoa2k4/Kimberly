import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Product } from "@/types/product";
import Link from "next/link";

type Props = {
  products : Product[];
};

const Relative = ({ products }: Props) => {
  

  
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerPage = 4;

  const handlePrevClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, products.length - itemsPerPage)
        : Math.max(0, prevIndex - itemsPerPage)
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNextClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <>
      <section className="lg:mx-auto lg:w-3/4 mx-5 overflow-hidden">
        <div className="flex-col hidden lg:flex">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold my-5">Bạn Có Thể Thích</div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevClick}
                disabled={isAnimating}
                className={`hover:bg-gray-100 p-2 rounded-full transition-colors transform active:scale-95 
                  ${isAnimating ? "cursor-not-allowed opacity-50" : ""}`}
              >
                <IoIosArrowBack className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextClick}
                disabled={isAnimating}
                className={`hover:bg-gray-100 p-2 rounded-full transition-colors transform active:scale-95
                  ${isAnimating ? "cursor-not-allowed opacity-50" : ""}`}
              >
                <IoIosArrowForward className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div
              className={`grid grid-cols-4 gap-5 transition-transform duration-500 ease-in-out
                ${
                  isAnimating
                    ? slideDirection === "right"
                      ? "translate-x-[-100%] opacity-0"
                      : "translate-x-[100%] opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
            >
              {visibleProducts.map((product) => (
                <Link
                  key={product.productId}
                  href={`/product/${product.productId}`}
                >
                  {" "}
                  <div
                    key={product.productId}
                    className={`flex flex-col transform transition-all duration-500
                    ${
                      isAnimating
                        ? "scale-95 opacity-0"
                        : "scale-100 opacity-100"
                    }
                    hover:shadow-lg hover:-translate-y-1 rounded-lg p-2`}
                  >
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={`${baseUrl}/image/id/${
                          (product.images as string).split(",")[0]
                        }`}
                        alt=""
                        height={480}
                        width={480}
                        className="aspect-square object-cover rounded-lg object-center transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex">
                        <span className="border p-1 rounded-full my-3 transform transition-transform hover:rotate-12">
                          {product.metallicColor === "Vàng Chanh" && (
                            <Image
                              src={"/Type/type-gold.png"}
                              alt=""
                              height={100}
                              width={100}
                              className="aspect-square h-5 w-5"
                            />
                          )}
                          {product.metallicColor === "Vàng Trắng" && (
                            <Image
                              src={"/Type/type-silver.png"}
                              alt=""
                              height={100}
                              width={100}
                              className="aspect-square h-5 w-5"
                            />
                          )}
                          {product.metallicColor === "Vàng Hồng" && (
                            <Image
                              src={"/Type/type-rose.png"}
                              alt=""
                              height={100}
                              width={100}
                              className="aspect-square h-5 w-5"
                            />
                          )}
                        </span>
                      </div>
                      <div className="flex items-center font-bold text-sm">
                        <span className="line-clamp-1 hover:text-blue-600 transition-colors">
                          {product.productName}
                        </span>
                      </div>
                      <div className="text-xs py-2 font-semibold transform transition-all hover:scale-105">
                        {product.price > 0 ? product.price : ""}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="text-lg font-bold my-5">Bạn Có Thể Thích</div>
          <div className="w-full overflow-x-auto flex ">
            {products.map((product) => (
              <Link
                key={product.productId}
                href={`/product/${product.productId}`}
              >
                <div
                  className={`flex flex-col transform transition-all duration-500
                    ${
                      isAnimating
                        ? "scale-95 opacity-0"
                        : "scale-100 opacity-100"
                    }
                    hover:shadow-lg hover:-translate-y-1 rounded-lg p-2`}
                >
                  <div className="overflow-hidden rounded-lg w-[200px]">
                    <Image
                      src={`${baseUrl}/image/id/${
                        (product.images as string).split(",")[0]
                      }`}
                      alt=""
                      height={480}
                      width={480}
                      className="aspect-square w-full h-full  object-cover rounded-lg object-center transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex">
                      <span className="border p-1 rounded-full my-3 transform transition-transform hover:rotate-12">
                        {product.metallicColor === "Vàng Chanh" && (
                          <Image
                            src={"/Type/type-gold.png"}
                            alt=""
                            height={100}
                            width={100}
                            className="aspect-square h-5 w-5"
                          />
                        )}
                        {product.metallicColor === "Vàng Trắng" && (
                          <Image
                            src={"/Type/type-silver.png"}
                            alt=""
                            height={100}
                            width={100}
                            className="aspect-square h-5 w-5"
                          />
                        )}
                        {product.metallicColor === "Vàng Hồng" && (
                          <Image
                            src={"/Type/type-rose.png"}
                            alt=""
                            height={100}
                            width={100}
                            className="aspect-square h-5 w-5"
                          />
                        )}
                      </span>
                    </div>
                    <div className="flex items-center font-bold text-sm">
                      <span className="line-clamp-1 hover:text-blue-600 transition-colors">
                        {product.productName}
                      </span>
                    </div>
                    <div className="text-xs py-2  font-semibold transform transition-all hover:scale-105">
                      {product.price > 0 ? product.price : ""}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Relative;
