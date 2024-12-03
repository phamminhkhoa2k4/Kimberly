import Image from "next/image";
import Link from "next/link";

const Inspection = () => {
  return (
    <>
      <section className="mb-10">
        <div className="relative w-full h-[637px] lg:h-[620px] mt-10">
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
              Kimberly tự hào là thương hiệu kim cương hàng đầu được Viện Ngọc
              Học Hoa Kỳ (GIA) công nhận trên các phương diện:
            </h1>
            <ul>
              <li className="text-white">
                - Nhà cung cấp kim cương chính hãng với nguồn gốc minh bạch.
              </li>
              <li className="text-white">
                - Đội ngũ chuyên gia được đào tạo chuẩn GIA, đảm bảo kiến thức
                và kỹ năng chuyên sâu.
              </li>
              <li className="text-white">
                - Dịch vụ phân loại và kiểm định chất lượng kim cương theo tiêu
                chuẩn quốc tế.
              </li>
            </ul>
            <p className="text-white">
              Tại Kimberly, mỗi viên kim cương – dù là tinh tế hay rực rỡ – đều
              trải qua quy trình kiểm định nghiêm ngặt với công nghệ tiên tiến
              từ GIA. Chúng tôi cam kết mang đến cho khách hàng những viên kim
              cương hoàn hảo về chất lượng, cùng trải nghiệm mua sắm đầy tin cậy
              và đẳng cấp.
            </p>
          </div>
          <Link
            href={"/diamond"}
            className="hidden lg:block absolute bottom-24 left-28  bg-transparent border-2 border-white text-white lg:rounded-lg px-6 py-3 text-lg font-bold hover:bg-[#20475d] hover:text-white"
          >
            Tìm Kim Cương Viên
          </Link>
          <div className="absolute lg:hidden top-16 w-full flex items-center justify-center">
            <div className="max-w-[300px] flex flex-col items">
              {/* <div className="text-base font-bold text-white uppercase my-5">
                kim cương tiêu chuẩn quốc tế
              </div>
              <div className="text-white text-sm">
                Tại Kimberly, mỗi viên kim cương, dù là nhỏ hay lớn, đều được
                kiểm định kỹ lưỡng trước khi đến tay khách hàng. Quá trình này
                sử dụng các thiết bị hiện đại nhập khẩu từ GIA, đảm bảo mỗi viên
                kim cương đều đạt chất lượng cao nhất, mang lại sự an tâm tuyệt
                đối.
              </div> */}
              <div className="flex justify-center mt-52">
                <Link
                  href={"/diamond"}
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
