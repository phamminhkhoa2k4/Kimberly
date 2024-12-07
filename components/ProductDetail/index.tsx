import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import debounce from "lodash.debounce";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SlRefresh } from "react-icons/sl";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { GiChisel } from "react-icons/gi";  
import { PiSealCheckLight } from "react-icons/pi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = debounce(() => {
    setScrollY(window.scrollY);
  }, 10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    console.log("scroll", scrollY);
  }, [scrollY]);
  return (
    <>
      <section className="lg:mx-auto lg:w-3/4 mx-5 mt-5">
        <div className="flex lg:flex-row flex-col gap-8 items-start ">
          <div className="lg:w-7/12">
            <div className="lg:grid flex lg:grid-cols-2 lg:grid-rows-4 grid-cols-1 gap-5 overflow-x-scroll lg:overflow-x-hidden scrollbar-hide">
              <Image
                src={`${baseUrl}/image/id/${
                  (product?.images as string)?.split(",")[0]
                }`}
                alt=""
                height={1024}
                width={1024}
                className="object-cover object-center lg:col-span-2 lg:row-span-2 rounded-md overflow-hidden shadow-md border flex-shrink-0"
              />
              {(product?.images as string)
                ?.split(",")
                .slice(1, 5)
                .map((image) => (
                  <Image
                    key={image}
                    src={`${baseUrl}/image/id/${image}`}
                    alt=""
                    height={1024}
                    width={1024}
                    className="object-cover object-center aspect-square rounded-md overflow-hidden shadow-md border flex-shrink-0"
                  />
                ))}
            </div>
          </div>
          <div
            className={cn(
              "lg:w-5/12 ",
              scrollY >= 70 ? "" : "",
              scrollY >= 800
                ? // " lg:relative"
                  ""
                : ""
            )}
          >
            <div
              className={cn(
                "",
                scrollY >= 70 ? "lg:fixed lg:top-16 lg:w-[461.41px]" : "",
                scrollY >= 800 ? "lg:absolute lg:top-[400px] w-full " : ""
              )}
            >
              <div className="flex items-start gap-2 text-2xl lg:text-4xl  font-bold">
                {product?.productName}
              </div>
              {product?.price > 0 && (
                <div className="text-xl font-semibold my-5">
                  {product?.price} VND
                </div>
              )}
              {product?.isIncludeMasterDiamond && (
                <p className="text-sm font-medium py-3 text-[#20475d]">
                  Giá trên là giá vỏ trang sức chưa bao gồm viên chủ.
                </p>
              )}
              <div className="flex items-center gap-2 my-3">
                <span className="font-semibold">Kiểu Dáng Viên:</span>
                <span>{product?.shape}</span>
              </div>
              <div>
                {product?.shape === "Round" && (
                  <Image
                    src={"/Shape/round.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center aspect-square"
                  />
                )}
                {product?.shape === "Oval" && (
                  <Image
                    src={"/Shape/oval.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center aspect-square"
                  />
                )}
                {product?.shape === "Pear" && (
                  <Image
                    src={"/Shape/pear.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center aspect-square"
                  />
                )}
                {product?.shape === "Emerald" && (
                  <Image
                    src={"/Shape/emerald.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center aspect-square"
                  />
                )}
              </div>
              <div className="flex items-center gap-2 my-3">
                <span className="font-semibold">Màu Kim Loại:</span>
                <span>{product?.metallicColor}</span>
              </div>
              <div className="border-[#20475d] border p-1 aspect-square w-[51px] rounded-full flex items-center justify-center ">
                {product?.metallicColor === "Vàng Chanh" && (
                  <Image
                    src={"/Type/type-gold.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center "
                  />
                )}
                {product?.metallicColor === "Vàng Trắng" && (
                  <Image
                    src={"/Type/type-silver.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center "
                  />
                )}
                {product?.metallicColor === "Vàng Hồng" && (
                  <Image
                    src={"/Type/type-rose.png"}
                    alt=""
                    height={64}
                    width={64}
                    className="w-10 h-10 object-cover object-center "
                  />
                )}
              </div>
              <div className="flex items-center gap-2 mb-3 py-3">
                <span className="font-semibold">Chất Liệu:</span>
              </div>
              <span className="px-6 py-3 border-[#20475d] border rounded-lg">
                {product?.material}
              </span>
              {product?.ringBelt && product?.ringBelt === "Đai Trơn" && (
                <>
                  <div className="flex items-center gap-2 mt-3 py-3">
                    <span className="font-semibold">Đai:</span>
                    <span>{product?.ringBelt}</span>
                  </div>
                  <div className=" mt-5border-[#20475d] border p-1 aspect-square w-[51px] rounded-full flex items-center justify-center ">
                    <Image
                      src={"/dai-tam.png"}
                      alt=""
                      height={64}
                      width={64}
                      className="w-10 h-10 object-cover object-center "
                    />
                  </div>
                </>
              )}
              {product?.ringBelt && product?.ringBelt === "Đai Nhám" && (
                <>
                  <div className="flex items-center gap-2 mt-3 py-3">
                    <span className="font-semibold">Đai:</span>
                    <span>{product?.ringBelt}</span>
                  </div>
                  <div className=" mt-5border-[#20475d] border p-1 aspect-square w-[51px] rounded-full flex items-center justify-center ">
                    <Image
                      src={"/dai-tam.png"}
                      alt=""
                      height={64}
                      width={64}
                      className="w-10 h-10 object-cover object-center "
                    />
                  </div>
                </>
              )}
              {product?.ringBelt && product?.ringBelt === "Đai Đính Xoàn" && (
                <>
                  <div className="flex items-center gap-2 mt-3 py-3">
                    <span className="font-semibold">Đai:</span>
                    <span>{product?.ringBelt}</span>
                  </div>
                  <div className=" mt-5border-[#20475d] border p-1 aspect-square w-[51px] rounded-full flex items-center justify-center ">
                    <Image
                      src={"/dai-tam.png"}
                      alt=""
                      height={64}
                      width={64}
                      className="w-10 h-10 object-cover object-center "
                    />
                  </div>
                </>
              )}
              <div className="flex flex-col gap-5 mt-5 ">
                <p className="text-center lg:text-base text-sm">
                  Gọi ngay{" "}
                  <Link
                    href={"tel:+84346 919 999"}
                    className="font-bold  underline text-[#20475d]"
                  >
                    0346 919 999
                  </Link>{" "}
                  để được hỗ trợ nhanh.
                </p>
                <div className="grid grid-cols-2 gap-1 gap-y-5 justify-center items-center lg:gap-5 -mr-10 lg:mx-0">
                  <div className="flex items-center gap-1">
                    <SlRefresh className="lg:h-7 lg:w-7" />
                    <span className="text-xs lg:text-base  text-nowrap">
                      Thu mua,thu đổi dễ dàng
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <PiSealCheckLight className="lg:h-7 lg:w-7" />
                    <span className="text-xs lg:text-base text-nowrap">
                      Bảo hành trọn đời
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LiaShuttleVanSolid className="lg:h-7 lg:w-7" />
                    <span className="text-xs lg:text-base text-nowrap">
                      Hỗ trợ giao trong ngày
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GiChisel className="lg:h-7 lg:w-7" />
                    <span className="text-xs lg:text-base text-nowrap">
                      Miễn phí khắc nhẫn
                    </span>
                  </div>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b py-2">
                    <AccordionTrigger className="font-medium text-sm lg:text-base">
                      Chi tiết sản phẩm
                    </AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b py-2">
                    <AccordionTrigger className="font-medium text-sm lg:text-base">
                      Khám phá chất lượng kim cương Kimberly
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc">
                        <li className="py-1">
                          Tất cả trang sức hoàn toàn chuẩn xác về hàm lượng và
                          trọng lượng vàng, được kiểm định chặt chẽ bằng máy
                          quang phổ.
                        </li>
                        <li className="py-1">
                          100% Trang sức kim cương đều có chứng nhận đạt tiêu
                          chuẩn GIA.
                        </li>
                        <li className="py-1">
                          Toàn bộ sản phẩm trang sức tại Jemmia có đầy đủ hóa
                          đơn, chứng từ chứng minh nguồn gốc xuất xứ và đầy đủ
                          thông tin về hàm lượng, trọng lượng vàng.
                        </li>
                        <li className="pt-1">
                          Toàn bộ sản phẩm trang sức tại Jemmia có đầy đủ hóa
                          đơn, chứng từ chứng minh nguồn gốc xuất xứ và đầy đủ
                          thông tin về hàm lượng, trọng lượng vàng.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b py-2">
                    <AccordionTrigger className="font-medium text-sm lg:text-base">
                      Câu hỏi thường gặp
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="my-5">
                        <strong>
                          Nếu nhận hàng mà sản phẩm không đạt chất lượng thì
                          sao?
                        </strong>
                        <p>
                          Quý khách hàng vui lòng liên hệ với tư vấn viên trong
                          vòng 24 GIỜ kể từ khi nhận sản phẩm, Kimberly sẽ hỗ
                          trợ đổi hàng hoàn toàn miễn phí trong trường hợp sản
                          phẩm bị lỗi do sản xuất.
                        </p>
                      </div>
                      <div className="my-5">
                        <strong>
                          Mua hàng online làm sao biết kích thước nhẫn nào vừa
                          tay?
                        </strong>
                        <p>
                          Kimberly sẽ gửi tặng bộ đo ni tay đến tận nơi của Quý
                          khách hoàn toàn miễn phí. Bạn chỉ cần chọn ni nhẫn phù
                          hợp và thông báo với tư vấn viên của chúng tôi. Ngoài
                          ra, Kimberly hỗ trợ điều chỉnh size nhẫn miễn phí trọn
                          đời trong trường hợp bạn muốn thay đổi.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
