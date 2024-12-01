import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { News } from "@/types/news";
import { Promotion } from "@/types/promotion";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar3 } from "react-icons/bs";

type Props = {
  events: News[];
  promotions : Promotion[];
}; 

const Tab = ({events, promotions} : Props) => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";
  function formatDate(dateString: string): string {
    const months = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} Tháng ${month} Năm ${year}`;
  }

  const isoDate = "2024-12-01T10:30:00";
  console.log(formatDate(isoDate)); 

  return (
    <>
      <section className="lg:mx-auto lg:w-3/4 mx-4">
        <Tabs defaultValue="event" className="w-full">
          <TabsList>
            <TabsTrigger value="event">Sự Kiện</TabsTrigger>
            <TabsTrigger value="promotion">Chương Trình Khuyến Mãi</TabsTrigger>
            {/* <TabsTrigger value="knowledge">
              Kiến Thức <span className="hidden lg:block">Kim Cương</span>{" "}
            </TabsTrigger> */}
          </TabsList>
          <TabsContent value="promotion">
            <div
              className={cn(
                "flex lg:flex-row flex-col items-center gap-5 justify-between my-5",
                promotions?.length === 1 ? "lg:flex-col gap-0" : ""
              )}
            >
              <Link
                href={`/news/promotion/${promotions[0]?.jemmia_id}`}
                className={cn(
                  "lg:w-1/2 relative h-[600px]",
                  promotions.length === 1 ? "lg:w-full" : ""
                )}
              >
                <Image
                  src={`${baseUrl}/image/id/${promotions[0]?.thumbnail}`}
                  height={600}
                  width={600}
                  alt=""
                  className="object-cover object-center h-full w-full"
                />
                <div className="absolute flex flex-col gap-3 bottom-5 right-0 left-0 max-w-full mx-10">
                  <div className="flex items-center text-white gap-2">
                    <BsCalendar3 className="h-5 w-5" />
                    <span>{formatDate(promotions[0]?.publishedAt!)}</span>
                  </div>
                  <span className="text-xl font-bold text-white">
                    {promotions[0]?.title}
                  </span>
                  <span className="text-sm text-white line-clamp-2">
                    {promotions[0]?.contentHeader}
                  </span>
                </div>
              </Link>

              <div
                className={cn(
                  "lg:w-1/2 lg:h-[600px] flex flex-col gap-5",
                  promotions.length === 1 ? "hidden" : ""
                )}
              >
                {promotions?.slice(1, 3).map((promotions, index) => (
                  <Link
                    href={`/news/${promotions?.jemmia_id}`}
                    key={index}
                    className="flex flex-col lg:flex-row items-center gap-5 h-1/3"
                  >
                    <Image
                      src={`${baseUrl}/image/id/${promotions?.thumbnail}`}
                      alt=""
                      width={600}
                      height={600}
                      className="object-center object-cover lg:h-full lg:w-1/2"
                    />
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center  gap-2">
                        <BsCalendar3 className="h-5 w-5" />
                        <span>
                          {formatDate(String(promotions?.thumbnail!))}
                        </span>
                      </div>
                      <span className="text-xl font-bold text-[#20475d]">
                        {promotions?.title}
                      </span>
                      <span className="text-sm text-neutral-400 line-clamp-3">
                        {promotions?.contentHeader}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="event">
            <div
              className={cn(
                "flex lg:flex-row flex-col items-center gap-5 justify-between my-5",
                events.length === 1 ? "lg:flex-col gap-0" : ""
              )}
            >
              <Link
                href={`/news/${events[0]?.newsId}`}
                className={cn(
                  "lg:w-1/2 relative h-[600px]",
                  events.length === 1 ? "lg:w-full" : ""
                )}
              >
                <Image
                  src={`${baseUrl}/image/id/${events[0]?.thumbnail}`}
                  height={600}
                  width={600}
                  alt=""
                  className="object-cover object-center h-full w-full"
                />
                <div className="absolute flex flex-col gap-3 bottom-5 right-0 left-0 max-w-full mx-10">
                  <div className="flex items-center text-white gap-2">
                    <BsCalendar3 className="h-5 w-5" />
                    <span>{formatDate(events[0]?.publishedAt!)}</span>
                  </div>
                  <span className="text-xl font-bold text-white">
                    {events[0]?.title}
                  </span>
                  <span className="text-sm text-white line-clamp-2">
                    {events[0]?.contentHeader}
                  </span>
                </div>
              </Link>

              <div
                className={cn(
                  "lg:w-1/2 lg:h-[600px] flex flex-col gap-5",
                  events.length === 1 ? "hidden" : ""
                )}
              >
                {events?.slice(1, 3).map((event, index) => (
                  <Link
                    href={`/news/${event?.newsId}`}
                    key={index}
                    className="flex flex-col lg:flex-row items-center gap-5 h-1/3"
                  >
                    <Image
                      src={`${baseUrl}/image/id/${event?.thumbnail}`}
                      alt=""
                      width={600}
                      height={600}
                      className="object-center object-cover lg:h-full lg:w-1/2"
                    />
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center  gap-2">
                        <BsCalendar3 className="h-5 w-5" />
                        <span>{formatDate(String(event?.thumbnail!))}</span>
                      </div>
                      <span className="text-xl font-bold text-[#20475d]">
                        {event.title}
                      </span>
                      <span className="text-sm text-neutral-400 line-clamp-3">
                        {event.contentHeader}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="knowledge">
            <div className="flex lg:flex-row flex-col items-center gap-5 justify-between my-5">
              <div className="lg:w-1/2 relative h-[600px]">
                <Image
                  src={
                    "https://file.hstatic.net/200000355853/article/ddc_5b51c15c6f914ba3a9b9196ee6579bae_large.jpg"
                  }
                  height={600}
                  width={600}
                  alt=""
                  className="object-cover object-center h-full w-full"
                />
                <div className="absolute flex flex-col gap-3 bottom-5 right-0 left-0 max-w-full mx-10">
                  <div className="flex items-center text-white gap-2">
                    <BsCalendar3 className="h-5 w-5" />
                    <span>19 Tháng 11 Năm 2023</span>
                  </div>
                  <span className="text-xl font-bold text-white">
                    Cột mốc sinh nhật đáng tự hào của Jemmia tại Dubai Diamond
                  </span>
                  <span className="text-sm text-white line-clamp-2">
                    Dubai Diamond Week là chuỗi sự kiện hàng đầu trong ngành
                    công nghiệp kim cương, được tổ chức hằng năm tại Dubai, UAE.
                    Sự kiện đặc biệt này quy tụ các nhà lãnh đạo, chuyên gia và
                    doanh nghiệp kim cương từ khắp nơi trên thế giới. Dubai
                    Diamond Week là dịp quan trọng để các chuyên gia trong ngành
                    chia sẻ kiến thức, khám phá các xu hướng mới, và xây dựng
                    những mối quan hệ hợp tác chiến lược. Đây không chỉ là nơi
                    để các bên tham gia thảo luận về những cơ hội và thách thức
                    của ngành kim cương toàn cầu mà còn là nền tảng để thúc đẩy
                    sự đổi mới, sáng tạo và mở rộng thị trường kim cương trong
                    tương lai.
                  </span>
                </div>
              </div>
              <div className="lg:w-1/2 lg:h-[600px] flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row items-center gap-5 h-1/3">
                  <Image
                    src={
                      "https://file.hstatic.net/200000355853/article/ddc_5b51c15c6f914ba3a9b9196ee6579bae_large.jpg"
                    }
                    alt=""
                    width={600}
                    height={600}
                    className="object-center object-cover lg:w-1/2"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center  gap-2">
                      <BsCalendar3 className="h-5 w-5" />
                      <span>19 Tháng 11 Năm 2023</span>
                    </div>
                    <span className="text-xl font-bold text-[#20475d]">
                      Cột mốc sinh nhật đáng tự hào của Jemmia tại Dubai Diamond
                    </span>
                    <span className="text-sm text-neutral-400 line-clamp-3">
                      Dubai Diamond Week là chuỗi sự kiện hàng đầu trong ngành
                      công nghiệp kim cương, được tổ chức hằng năm tại Dubai,
                      UAE. Sự kiện đặc biệt này quy tụ các nhà lãnh đạo, chuyên
                      gia và doanh nghiệp kim cương từ khắp nơi trên thế giới.
                      Dubai Diamond Week là dịp quan trọng để các chuyên gia
                      trong ngành chia sẻ kiến thức, khám phá các xu hướng mới,
                      và xây dựng những mối quan hệ hợp tác chiến lược. Đây
                      không chỉ là nơi để các bên tham gia thảo luận về những cơ
                      hội và thách thức của ngành kim cương toàn cầu mà còn là
                      nền tảng để thúc đẩy sự đổi mới, sáng tạo và mở rộng thị
                      trường kim cương trong tương lai.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-5 h-1/3">
                  <Image
                    src={
                      "https://file.hstatic.net/200000355853/article/ddc_5b51c15c6f914ba3a9b9196ee6579bae_large.jpg"
                    }
                    alt=""
                    width={600}
                    height={600}
                    className="object-center object-cover lg:w-1/2"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center  gap-2">
                      <BsCalendar3 className="h-5 w-5" />
                      <span>19 Tháng 11 Năm 2023</span>
                    </div>
                    <span className="text-xl font-bold text-[#20475d]">
                      Cột mốc sinh nhật đáng tự hào của Jemmia tại Dubai Diamond
                    </span>
                    <span className="text-sm text-neutral-400 line-clamp-3">
                      Dubai Diamond Week là chuỗi sự kiện hàng đầu trong ngành
                      công nghiệp kim cương, được tổ chức hằng năm tại Dubai,
                      UAE. Sự kiện đặc biệt này quy tụ các nhà lãnh đạo, chuyên
                      gia và doanh nghiệp kim cương từ khắp nơi trên thế giới.
                      Dubai Diamond Week là dịp quan trọng để các chuyên gia
                      trong ngành chia sẻ kiến thức, khám phá các xu hướng mới,
                      và xây dựng những mối quan hệ hợp tác chiến lược. Đây
                      không chỉ là nơi để các bên tham gia thảo luận về những cơ
                      hội và thách thức của ngành kim cương toàn cầu mà còn là
                      nền tảng để thúc đẩy sự đổi mới, sáng tạo và mở rộng thị
                      trường kim cương trong tương lai.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-5 h-1/3">
                  <Image
                    src={
                      "https://file.hstatic.net/200000355853/article/ddc_5b51c15c6f914ba3a9b9196ee6579bae_large.jpg"
                    }
                    alt=""
                    width={600}
                    height={600}
                    className="object-center object-cover lg:w-1/2"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center  gap-2">
                      <BsCalendar3 className="h-5 w-5" />
                      <span>19 Tháng 11 Năm 2023</span>
                    </div>
                    <span className="text-xl font-bold text-[#20475d]">
                      Cột mốc sinh nhật đáng tự hào của Jemmia tại Dubai Diamond
                    </span>
                    <span className="text-sm text-neutral-400 line-clamp-3">
                      Dubai Diamond Week là chuỗi sự kiện hàng đầu trong ngành
                      công nghiệp kim cương, được tổ chức hằng năm tại Dubai,
                      UAE. Sự kiện đặc biệt này quy tụ các nhà lãnh đạo, chuyên
                      gia và doanh nghiệp kim cương từ khắp nơi trên thế giới.
                      Dubai Diamond Week là dịp quan trọng để các chuyên gia
                      trong ngành chia sẻ kiến thức, khám phá các xu hướng mới,
                      và xây dựng những mối quan hệ hợp tác chiến lược. Đây
                      không chỉ là nơi để các bên tham gia thảo luận về những cơ
                      hội và thách thức của ngành kim cương toàn cầu mà còn là
                      nền tảng để thúc đẩy sự đổi mới, sáng tạo và mở rộng thị
                      trường kim cương trong tương lai.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default Tab;
