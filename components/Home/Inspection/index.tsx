import Image from "next/image";
import Link from "next/link";

const Inspection = () => {
  return (
    <>
      <section className="mb-10">
        <div className="relative w-full h-[637px] lg:h-[620px] mt-10">
          <Image
            src={
              "https://file.hstatic.net/200000355853/file/home_banner_01.jpeg"
            }
            alt=""
            height={620}
            width={1528}
            className="hidden lg:block object-cover object-center w-full h-full"
          />
          <Image
            src={
              "https://file.hstatic.net/200000355853/file/home_banner_01.jpeg"
            }
            alt=""
            height={637}
            width={1528}
            className=" lg:hidden object-cover object-center w-full h-full"
          />
          <div className="hidden lg:flex absolute top-20 left-28  flex-col gap-5 max-w-[575px]">
            <h1 className="font-semibold text-lg text-white">
              Kimberly - Diamond Jewelry tự hào là đối tác được Viện Ngọc Học
              Hoa Kỳ (GIA) chứng nhận trên ba phương diện:
            </h1>
            <ul>
              <li className="text-white">- Nhà phân phối chính ngạch</li>
              <li className="text-white">
                - Đơn vị được GIA đào tạo và chuẩn hóa kiến thức chuyên gia
              </li>
              <li className="text-white">
                - Đơn vị được GIA phân loại và đánh giá kim cương
              </li>
            </ul>
            <p className="text-white">
              Tại Kimberly, mỗi viên kim cương, dù là nhỏ hay lớn, đều được kiểm
              định kỹ lưỡng trước khi đến tay khách hàng. Quá trình này sử dụng
              các thiết bị hiện đại nhập khẩu từ GIA, đảm bảo mỗi viên kim cương
              đều đạt chất lượng cao nhất, mang lại sự an tâm tuyệt đối.
            </p>
          </div>
          <Link
            href={"#"}
            className="hidden lg:block absolute bottom-24 left-28  bg-transparent border-2 border-white text-white lg:rounded-lg px-6 py-3 text-lg font-bold hover:bg-[#20475d] hover:text-white"
          >
            Mặt Dây Chuyền Kim Cương
          </Link>
          <div className="absolute lg:hidden top-16 w-full flex items-center justify-center">
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
              <div className="flex justify-center mt-5">
                <Link
                  href={"#"}
                  className="px-6 py-2 text-white bg-[#20475d] font-semibold text-base"
                >
                  Khám Phá Bảng Giá
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inspection;
