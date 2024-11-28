import Image from "next/image";

const NewsDetail = () => {
  return (
    <>
      <section className="lg:mx-auto mx-5 lg:w-3/4">
        <div className="text-lg text-[#20475d] text-center py-5">
          05:50 CH - Thứ Tư | 06/11/2024
        </div>
        <div className="text-3xl text-center font-bold mb-8">
          Sinh Nhật Rực Rỡ, Vạn Deal Bất Ngờ
        </div>
        <p className="text-lg lg:mx-10 mb-10">
          Chào đón sự kiện sinh nhật 11/11, Jemmia tự hào đánh dấu cột mốc đáng
          nhớ trong hành trình mang đến cho khách hàng những viên kim cương GIA
          tinh tuyển và trang sức kim cương sang trọng. Nhân dịp này, Jemmia
          muốn gửi lời tri ân chân thành đến tất cả Quý khách hàng đã tin tưởng
          và lựa chọn Jemmia như một người bạn đồng hành trong việc tìm kiếm
          những món trang sức hoàn mỹ, lưu giữ giá trị vượt thời gian.
        </p>
        <Image
          src={
            "https://file.hstatic.net/200000355853/file/kcv-x-hop-l-1200x682_2097f6cb98e741878125e8e99b884533.jpg"
          }
          alt=""
          height={680}
          width={2400}
          className="object-cover object-center w-full h-100 lg:h-[500px] mb-10 "
        />
        <p className="text-lg lg:mx-10 mb-10">
          Jemmia hiểu rằng mỗi viên kim cương không chỉ đơn thuần là một món
          trang sức mà còn mang trong mình giá trị biểu tượng của sự sang trọng
          và đẳng cấp. Vì vậy, Jemmia không ngừng nỗ lực trong việc chọn lọc và
          kiểm định từng viên kim cương, từ khâu khai thác, cắt mài cho đến khi
          viên kim cương được đặt vào khung trang sức. Tất cả đều trải qua quy
          trình kiểm định kỹ lưỡng, nhằm cam kết mang đến cho khách hàng những
          sản phẩm chất lượng tốt nhất, đáp ứng 4 tiêu chuẩn khắt khe của GIA.
        </p>
      </section>
    </>
  );
};

export default NewsDetail;
