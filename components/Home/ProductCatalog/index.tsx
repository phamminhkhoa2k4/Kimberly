import Image from "next/image";

const ProductCatalog = () => {
  return (
    <>
      <section>
        <div className="mt-20 mx-auto w-11/12 lg:w-4/5">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-lg lg:text-xl font-semibold text-[#20475d] uppercase">
              Danh Mục sản phẩm
            </h1>
            <p className="text-sm lg:text-lg font-normal">
              Lựa chọn sản phẩm phù hợp với nhu cầu của bạn
            </p>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 mt-10 gap-5">
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={"https://file.hstatic.net/200000355853/file/nhan_nu.png"}
                alt=""
                className="object-cover rounded-lg object-center aspect-square"
                height={200}
                width={200}
              />
              <div className="text-base font-medium text-[#20475d]">
                Nhẵn Nữ
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={"https://file.hstatic.net/200000355853/file/nhan_nu.png"}
                alt=""
                className="object-cover rounded-lg object-center aspect-square"
                height={200}
                width={200}
              />
              <div className="text-base font-medium text-[#20475d]">
                Nhẵn Nữ
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={"https://file.hstatic.net/200000355853/file/nhan_nu.png"}
                alt=""
                className="object-cover rounded-lg object-center aspect-square"
                height={200}
                width={200}
              />
              <div className="text-base font-medium text-[#20475d]">
                Nhẵn Nữ
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={"https://file.hstatic.net/200000355853/file/nhan_nu.png"}
                alt=""
                className="object-cover rounded-lg object-center aspect-square"
                height={200}
                width={200}
              />
              <div className="text-base font-medium text-[#20475d]">
                Nhẵn Nữ
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={"https://file.hstatic.net/200000355853/file/nhan_nu.png"}
                alt=""
                className="object-cover rounded-lg object-center aspect-square"
                height={200}
                width={200}
              />
              <div className="text-base font-medium text-[#20475d]">
                Nhẵn Nữ
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <Image
                src={"https://file.hstatic.net/200000355853/file/nhan_nu.png"}
                alt=""
                className="object-cover rounded-lg object-center aspect-square"
                height={200}
                width={200}
              />
              <div className="text-base font-medium text-[#20475d]">
                Nhẵn Nữ
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCatalog;