


import { Promotion } from "@/types/promotion";
import Image from "next/image";

type Props = {
  promotion: Promotion;
};

const PromotionDetail = ({ promotion }: Props) => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";
  function formatDateTime(dateTimeString: string): string {
    const date = new Date(dateTimeString);

    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const period = date.getHours() >= 12 ? "CH" : "SA";

    const dayNames = [
      "Chủ Nhật",
      "Thứ Hai",
      "Thứ Ba",
      "Thứ Tư",
      "Thứ Năm",
      "Thứ Sáu",
      "Thứ Bảy",
    ];
    const dayOfWeek = dayNames[date.getDay()];

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${hours}:${minutes} ${period} - ${dayOfWeek} | ${day}/${month}/${year}`;
  }

  return (
    <>
      <section className="lg:mx-auto mx-5 lg:w-3/4">
        <div className="text-lg text-[#20475d] text-center py-5">
          {formatDateTime(promotion?.publishedAt!)}
        </div>
        <div className="text-3xl text-center font-bold mb-8">
          {promotion?.title}
        </div>
        <p className="text-lg lg:mx-10 mb-10">{promotion?.contentHeader}</p>
        <Image
          src={`${baseUrl}/image/id/${promotion?.image}`}
          alt=""
          height={680}
          width={2400}
          className="object-cover object-center w-full h-100 lg:h-[500px] mb-10 "
        />
        <p className="text-lg lg:mx-10 mb-10">{promotion?.contentFooter}</p>
      </section>
    </>
  );
};

export default PromotionDetail;
