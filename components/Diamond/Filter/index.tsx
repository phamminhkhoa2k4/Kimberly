import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { IoRefreshOutline } from "react-icons/io5";
const Filter = () => {
  const [shape, setShape] = useState<"Round" | "Oval" | "Emerald" | "Pear">(
    "Round"
  );
  const [range, setRange] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [carat, setCarat] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>(0);
  const [size, setSize] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>(0);
  const [color, setColor] = useState<
    "None" | "All" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M"
  >("None");
  const [clarity, setClarity] = useState<
    | "None"
    | "All"
    | "IF"
    | "VVS1"
    | "VVS2"
    | "VS1"
    | "VS2"
    | "SI1"
    | "SI2"
    | "I1"
    | "I2"
  >("None");
  return (
    <>
      <section className="mt-5 mx-auto  w-11/12 lg:w-3/4 text-[#20475d] mb-20">
        <div className="lg:text-lg text-2xl lg:font-bold font-semibold text-center lg:text-left">
          Chọn Viên Kim Cương
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-5 justify-between ">
          <div className="lg:w-1/4">
            <div className="flex items-center gap-2 py-2">
              <span className="font-bold text-sm text-nowrap ">
                Hình Dạng (Shape):{" "}
              </span>
              <span className="text-sm font-medium">{shape}</span>
            </div>
            <div className="flex items-center gap-0 mb-5">
              <Image
                src={"/Shape/round.png"}
                width={60}
                height={60}
                alt=""
                className={cn(
                  "object-contain object-center w-[55] h-[50px] lg:w-[60px] lg:h-[55px] p-2 ",
                  shape === "Round" ? "border-b-4" : ""
                )}
                onClick={() => setShape("Round")}
              />
              <Image
                src={"/Shape/oval.png"}
                width={60}
                height={60}
                alt=""
                className={cn(
                  "object-contain object-center w-[55] h-[50px] lg:w-[60px] lg:h-[55px] p-2 ",
                  shape === "Oval" ? "border-b-4" : ""
                )}
                onClick={() => setShape("Oval")}
              />
              <Image
                src={"/Shape/emerald.png"}
                width={60}
                height={60}
                alt=""
                className={cn(
                  "object-contain object-center w-[55] h-[50px] lg:w-[60px] lg:h-[55px] p-2 ",
                  shape === "Emerald" ? "border-b-4" : ""
                )}
                onClick={() => setShape("Emerald")}
              />
              <Image
                src={"/Shape/pear.png"}
                width={60}
                height={60}
                alt=""
                className={cn(
                  "object-contain object-center w-[55] h-[50px] lg:w-[60px] lg:h-[55px] p-2 ",
                  shape === "Pear" ? "border-b-4" : ""
                )}
                onClick={() => setShape("Pear")}
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <span className="text-sm font-bold">Giá (Price)</span>
              <div className="flex lg:flex-col gap-3 flex-wrap  max-w-[360px] lg:max-w-none">
                <div
                  className={cn(
                    "border rounded-md  py-3 hover:border-neutral-600 text-sm font-medium text-center text-nowrap grow px-2 basis-[calc(25%-0.5rem)]  lg:basis-auto ",
                    range === 1
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setRange(1)}
                >
                  Dưới 100 triệu đồng
                </div>
                <div
                  className={cn(
                    "border rounded-md  py-3 hover:border-neutral-600 text-sm font-medium text-center text-nowrap grow px-2 basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    range === 2
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setRange(2)}
                >
                  Từ 100 - 250 triệu đồng
                </div>
                <div
                  className={cn(
                    "border rounded-md  py-3 hover:border-neutral-600 text-sm font-medium text-center text-nowrap grow px-2 basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    range === 3
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setRange(3)}
                >
                  Từ 250 - 500 triệu đồng
                </div>
                <div
                  className={cn(
                    "border rounded-md  py-3 hover:border-neutral-600 text-sm font-medium text-center text-nowrap grow px-2 basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    range === 4
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setRange(4)}
                >
                  Trên 500 triệu đồng
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/4">
            <div className="mb-5">
              <span className="font-bold text-sm py-2 ">
                Trọng Lượng (Carat)
              </span>
              <div className="flex items-center gap-2 mt-4 flex-wrap max-w-[360px] lg:max-w-none">
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    carat === 1
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setCarat(1)}
                >
                  Tất Cả
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    carat === 2
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setCarat(2)}
                >
                  0.3 - 0.49
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    carat === 3
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setCarat(3)}
                >
                  0.5 - 0.89
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    carat === 4
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setCarat(4)}
                >
                  0.9 - 1.3
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    carat === 5
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setCarat(5)}
                >
                  1.3 - 1.9
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    carat === 6
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setCarat(6)}
                >
                  2.0 - 3.0
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    carat === 7
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setCarat(7)}
                >
                  Trên 3.0
                </div>
              </div>
            </div>
            <div className="mb-5">
              <span className="font-bold text-sm py-2 ">Kích Thước (Size)</span>
              <div className="flex items-center gap-2 mt-4 flex-wrap  max-w-[360px] lg:max-w-none">
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    size === 1
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setSize(1)}
                >
                  Tất Cả
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    size === 2
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setSize(2)}
                >
                  3.6 - 4.2
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    size === 3
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setSize(3)}
                >
                  4.3 - 4.9
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    size === 4
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setSize(4)}
                >
                  5.0 - 5.9
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    size === 5
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setSize(5)}
                >
                  6.0 - 6.9
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    size === 6
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setSize(6)}
                >
                  7.0 - 7.9
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    size === 7
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setSize(7)}
                >
                  8.0 - 8.9
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3 rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    size === 8
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setSize(8)}
                >
                  Trên 9.0
                </div>
              </div>
            </div>
            <div className="mb-5">
              <span className="font-bold text-sm py-2 ">Cấp Màu (Color)</span>
              <div className="flex items-center gap-2 mt-4 flex-wrap  max-w-[360px] lg:max-w-none">
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    color === "All"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setColor("All")}
                >
                  Tất Cả
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    color === "D"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setColor("D")}
                >
                  D
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    color === "E"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setColor("E")}
                >
                  E
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    color === "F"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setColor("F")}
                >
                  F
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    color === "G"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setColor("G")}
                >
                  G
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    color === "H"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setColor("H")}
                >
                  H
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    color === "I"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setColor("I")}
                >
                  I
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    color === "J"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setColor("J")}
                >
                  J
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    color === "K"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setColor("K")}
                >
                  K
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    color === "L"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setColor("L")}
                >
                  L
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    color === "M"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setColor("M")}
                >
                  M
                </div>
              </div>
            </div>
            <div className="mb-5">
              <span className="font-bold text-sm py-2 ">
                Độ Tinh Khiết (Clarity)
              </span>
              <div className="flex items-center gap-2 mt-4 w-full flex-wrap  max-w-[360px] lg:max-w-none">
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    clarity === "All"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setClarity("All")}
                >
                  Tất Cả
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    clarity === "IF"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setClarity("IF")}
                >
                  IF
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    clarity === "VVS1"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setClarity("VVS1")}
                >
                  VVS1
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    clarity === "VVS2"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setClarity("VVS2")}
                >
                  VVS2
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    clarity === "VS1"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setClarity("VS1")}
                >
                  VS1
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    clarity === "VS2"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setClarity("VS2")}
                >
                  VS2
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    clarity === "SI1"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setClarity("SI1")}
                >
                  SI1
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    clarity === "SI2"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setClarity("SI2")}
                >
                  SI2
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    clarity === "I1"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setClarity("I1")}
                >
                  I1
                </div>
                <div
                  className={cn(
                    "text-sm font-medium border text-center py-3  rounded-md hover:border-slate-500 text-nowrap grow basis-[calc(25%-0.5rem)]  lg:basis-auto",
                    clarity === "I2"
                      ? "bg-slate-300 border-slate-300 hover:border-slate-300"
                      : ""
                  )}
                  onClick={() => setClarity("I2")}
                >
                  I2
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-5 pt-5">
              <button className="flex items-center gap-1">
                <IoRefreshOutline className="h-6 w-6" />
                <span className="text-base font-medium underline underline-offset-8">
                  Làm Mới Bộ Lọc
                </span>
              </button>
              <button className="uppercase border rounded-md bg-slate-700 text-white px-6 py-3">
                tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
