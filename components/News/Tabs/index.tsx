import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { BsCalendar3 } from "react-icons/bs";

const Tab = () => {
  return (
    <>
      <section className="lg:mx-auto lg:w-3/4 mx-4">
        <Tabs defaultValue="promotion" className="w-full">
          <TabsList>
            <TabsTrigger value="promotion">Chương Trình Khuyến Mãi</TabsTrigger>
            <TabsTrigger value="event">Sự Kiện</TabsTrigger>
            <TabsTrigger value="knowledge">
              Kiến Thức <span className="hidden lg:block">Kim Cương</span>{" "}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="promotion">
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
          <TabsContent value="event">
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
