import Image from "next/image";


const ProductDetail = () => {
    return (
      <>
        <section className="lg:mx-auto lg:w-3/4 mx-5 mt-5">
          <div className="flex lg:flex-row flex-col gap-8 items-start ">
            <div className="lg:w-7/12">
              <div className="lg:grid flex lg:grid-cols-2 lg:grid-rows-4 grid-cols-1 gap-5 overflow-x-scroll lg:overflow-x-hidden scrollbar-hide">
         
                  <Image
                    src="https://product.hstatic.net/200000355853/product/round--vang-trang-vang-hong--tam--01_ac69124f0d3646cba9f91e111d3be386_1024x1024.jpg"
                    alt=""
                    height={1024}
                    width={1024}
                    className="object-cover object-center lg:col-span-2 lg:row-span-2 rounded-md overflow-hidden shadow-md border flex-shrink-0"
                  />
                  <Image
                    src="https://product.hstatic.net/200000355853/product/round--vang-trang-vang-hong--tam--01_ac69124f0d3646cba9f91e111d3be386_1024x1024.jpg"
                    alt=""
                    height={1024}
                    width={1024}
                    className="object-cover object-center aspect-square rounded-md overflow-hidden shadow-md border flex-shrink-0"
                  />
                  <Image
                    src="https://product.hstatic.net/200000355853/product/round--vang-trang-vang-hong--tam--01_ac69124f0d3646cba9f91e111d3be386_1024x1024.jpg"
                    alt=""
                    height={1024}
                    width={1024}
                    className="object-cover object-center aspect-square rounded-md overflow-hidden shadow-md border flex-shrink-0"
                  />
                  <Image
                    src="https://product.hstatic.net/200000355853/product/round--vang-trang-vang-hong--tam--01_ac69124f0d3646cba9f91e111d3be386_1024x1024.jpg"
                    alt=""
                    height={1024}
                    width={1024}
                    className="object-cover object-center aspect-square rounded-md overflow-hidden shadow-md border flex-shrink-0"
                  />
                  <Image
                    src="https://product.hstatic.net/200000355853/product/round--vang-trang-vang-hong--tam--01_ac69124f0d3646cba9f91e111d3be386_1024x1024.jpg"
                    alt=""
                    height={1024}
                    width={1024}
                    className="object-cover object-center aspect-square rounded-md overflow-hidden shadow-md border flex-shrink-0"
                  />
            
              </div>
            </div>
            <div className="lg:w-5/12 ">
              <div className="flex items-start gap-2 text-lg font-medium">
                Nhẫn Nữ Kim Cương Tự Nhiên Vàng 18K - WRA00298
              </div>
              <div className="text-xl font-bold my-5">32,679,000₫</div>
              <p className="text-sm font-medium py-3 text-[#20475d]">
                Giá trên là giá vỏ trang sức chưa bao gồm viên chủ.
              </p>
              <div className="flex items-center gap-2 my-3">
                <span className="font-semibold">Kiểu Dáng Viên:</span>
                <span>Round</span>
              </div>
              <div>
                <Image
                  src={"/Shape/round.png"}
                  alt=""
                  height={64}
                  width={64}
                  className="w-10 h-10 object-cover object-center aspect-square"
                />
              </div>
              <div className="flex items-center gap-2 my-3">
                <span className="font-semibold">Màu Kim Loại:</span>
                <span>Vàng Hồng</span>
              </div>
              <div className="border-[#20475d] border p-1 aspect-square w-[51px] rounded-full flex items-center justify-center ">
                <Image
                  src={"/Type/type-rose.png"}
                  alt=""
                  height={64}
                  width={64}
                  className="w-10 h-10 object-cover object-center "
                />
              </div>
              <div className="flex items-center gap-2 mb-3 py-3">
                <span className="font-semibold">Chất Liệu:</span>
              </div>
              <span className="px-6 py-3 border-[#20475d] border rounded-lg">
                Vàng 18K
              </span>
              <div className="flex items-center gap-2 mt-3 py-3">
                <span className="font-semibold">Đai:</span>
                <span>Tấm</span>
              </div>
              <div className=" mt-5border-[#20475d] border p-1 aspect-square w-[51px] rounded-full flex items-center justify-center ">
                <Image
                  src={"https://file.hstatic.net/200000355853/file/dai-tam.png"}
                  alt=""
                  height={64}
                  width={64}
                  className="w-10 h-10 object-cover object-center "
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}


export default ProductDetail;