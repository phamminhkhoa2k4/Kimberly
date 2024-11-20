import Image from "next/image";


const Product = () => {
    return (
      <>
        <section className="lg:mx-auto lg:w-3/4 mx-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={"/Product/product-1.jpg"}
                  alt=""
                  height={480}
                  width={480}
                  className="aspect-square object-cover rounded-lg object-center transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
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
                <div className="flex items-center font-bold text-sm">
                  <span className="line-clamp-1">
                    Nhẫn Nữ Kim Cương Tự Nhiên Vàng 18K
                  </span>
                  <span>-</span>
                  <span>WRA00475</span>
                </div>
                <div className="text-xs py-2">48,215,000₫</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center my-10">
            <button className="border px-10 font-medium hover:text-white hover:bg-[#20475d] py-2 rounded-lg">
              Xem Thêm
            </button>
          </div>
        </section>
      </>
    );
}

export default Product;