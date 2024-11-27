

import Image from "next/image";


const LastBanner = () => {
  return (
    <>
      <section className="mb-10">
        <div className="relative w-full h-[637px] lg:h-[420px] mt-10">
          <Image
            src={"/Inspection/inspection-1.png"}
            alt=""
            height={620}
            width={1528}
            className="hidden lg:block object-cover object-center w-full h-full"
          />
          <Image
            src={"/Inspection/inspection-2.png"}
            alt=""
            height={637}
            width={1528}
            className=" lg:hidden object-cover object-center w-full h-full"
          />
          <div className="hidden lg:flex absolute top-20 left-28  flex-col gap-5 max-w-[575px]">
            <h1 className="font-semibold text-lg text-white">
              Kimberly Diamond - Chuyên Gia Kim Cương
            </h1>

            <p className="text-white">
              Jemmia là thương hiệu trang sức kim cương hàng đầu Việt Nam mang
              tinh thần dân tộc, tiếp biến tinh hoa văn hóa và nghệ thuật vào
              từng bộ sưu tập trang sức.
            </p>
            <p className="text-white">
              Mỗi viên kim cương đều được nhập khẩu hải quan chính ngạch, trải
              qua quá trình kiểm định nghiêm ngặt theo tiêu chuẩn 4C của GIA.
              Jemmia chỉ chấp nhận 2% số lượng viên kim cương đẹp nhất trên thế
              giới, đảm bảo chất lượng hoàn hảo và giá trị bền vững cho khách
              hàng.
            </p>
          </div>
          {/* <div className="absolute lg:hidden top-16 w-full flex items-center justify-center">
            <div className="max-w-[300px] flex flex-col items">
              <div className="text-base font-bold text-white uppercase my-5">
                kim cương tiêu chuẩn quốc tế
              </div>
              <div className="text-white text-sm">
                Tại Kimberly, mỗi viên kim cương, dù là nhỏ hay lớn, đều được
                kiểm định kỹ lưỡng trước khi đến tay khách hàng. Quá trình này
                sử dụng các thiết bị hiện đại nhập khẩu từ GIA, đảm bảo mỗi viên
                kim cương đều đạt chất lượng cao nhất, mang lại sự an tâm tuyệt
                đối.
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default LastBanner;
