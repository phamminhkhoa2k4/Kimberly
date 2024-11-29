"use client";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoRefreshOutline } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Product } from "@/types/product";
import { getData } from "@/utils/axios";

type Props = {
  isGender?: boolean;
  isType?: boolean;
  isColor?: boolean;
  isMaterial?: boolean;
  isPrice?: boolean;
  rings?: Product[];
  setRings: (value: Product[]) => void;
  categoryName: string;
};

const Filter = ({
  isGender = false,
  isType = false,
  isColor = false,
  isMaterial = false,
  isPrice = false,
  setRings,
  categoryName,
}: Props) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [jewelryType, setJewelryType] = useState<string[]>([]);
  const [material, setMaterial] = useState<string[]>([]);
  const [metallicColor, setMetallicColor] = useState<string[]>([]);
  const [price, setPrice] = useState<{
    minValue: string;
    maxValue: string;
    name: string;
  } | null>(null);
  const [sortBy, setSortBy] = useState<string>("Mới Nhất");
  const [gender, setGender] = useState<"Nam" | "Nữ" | "None">("None");

  const handleRemoveFilter = (value: string) => {
    if (jewelryType.includes(value)) {
      setJewelryType((prev) => prev.filter((item) => item !== value));
    } else if (material.includes(value)) {
      setMaterial((prev) => prev.filter((item) => item !== value));
    } else if (metallicColor.includes(value)) {
      setMetallicColor((prev) => prev.filter((item) => item !== value));
    } else if (price?.name === value) {
      setPrice(null);
    } else if (gender === value) {
      setGender("None");
    }
  };

  const handleResetFilters = () => {
    setJewelryType([]);
    setMaterial([]);
    setMetallicColor([]);
    setPrice(null);
    setGender("None");
  };

  const handleColorClick = (color: string) => {
    setMetallicColor((prev) =>
      prev.includes(color) ? prev.filter((item) => item !== color) : [color]
    );
  };

  const priceRanges = [
    { name: "Dưới 100 triệu", minValue: 0, maxValue: 100 },
    { name: "Từ 100 triệu - 250 triệu", minValue: 100, maxValue: 250 },
    { name: "Từ 250 triệu - 500 triệu", minValue: 250, maxValue: 500 },
    { name: "Từ 500 triệu - 1 tỷ", minValue: 500, maxValue: 1000 },
    { name: "Trên 1 tỷ", minValue: 1000, maxValue: 100000 },
  ];

  const queryString = useMemo(() => {
    const params = new URLSearchParams();

    if (material && material.length > 0) {
      params.append("materials", material.join("&materials="));
    }

    if (metallicColor && metallicColor.length > 0) {
      params.append("metallicColors", metallicColor.join("&metallicColors="));
    }

    if (gender !== "None") {
      params.append("gender", gender);
    }

    if (price !== null) {
      params.append("minPrice", price.minValue);
      params.append("maxPrice", price.maxValue);
    } else {
      params.append("minPrice", "0");
      params.append("maxPrice", "100000");
    }
    params.append("sortBy", sortBy);
    params.append("categoryName", categoryName);

    return params.toString();
  }, [material, metallicColor, gender, sortBy, price]);

  useEffect(() => {
    console.log(price);
  }, [price]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rings = await getData({
          endpoint: `http://localhost:8080/api/product/filter?${queryString}`,
        });
        setRings(rings);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [queryString]);

  return (
    <section className="lg:mx-auto lg:w-3/4 mx-5 my-5">
      <div className="text-sm text-neutral-500 py-3">Hiển Thị 24 Trên 352</div>
      <div className="flex items-center justify-between ">
        {/* Bộ lọc */}
        <div className="lg:flex items-center w-2/4 justify-between hidden">
          <div className="flex items-center gap-1">
            <CiFilter className="h-5 w-5" />
            <span className="text-sm text-nowrap">Lọc Theo :</span>
          </div>
          {/* Loại Trang Sức */}
          {isType && (
            <div className="group">
              <HoverCard openDelay={20} closeDelay={20}>
                <HoverCardTrigger>
                  <div className="flex items-center gap-1 group">
                    <span className="text-sm text-nowrap">Loại Trang Sức</span>
                    <IoIosArrowDown className="h-5 w-5 group-hover:rotate-180 transition-transform" />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex flex-col gap-2">
                    {["Vỏ Nhẫn Nữ", "Nhẫn Nữ Nguyên Chiếc"].map((type) => (
                      <div
                        key={type}
                        className={`text-sm px-4 py-3 text-neutral-700 font-medium hover:text-white hover:bg-slate-300 rounded-lg cursor-pointer ${
                          jewelryType.includes(type)
                            ? "bg-slate-300 text-white"
                            : ""
                        }`}
                        onClick={() =>
                          setJewelryType((prev) =>
                            prev.includes(type)
                              ? prev.filter((item) => item !== type)
                              : [...prev, type]
                          )
                        }
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          )}

          {/* Giới Tính */}
          {isGender && (
            <div className="group">
              <HoverCard openDelay={20} closeDelay={20}>
                <HoverCardTrigger>
                  <div className="flex items-center gap-1 group">
                    <span className="text-sm text-nowrap">Giới Tính</span>
                    <IoIosArrowDown className="h-5 w-5 group-hover:rotate-180 transition-transform" />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex flex-col gap-2">
                    <div
                      className={`text-sm px-4 py-3 text-neutral-700 font-medium hover:text-white hover:bg-slate-300 rounded-lg cursor-pointer ${
                        gender === "Nam" ? "bg-slate-300 text-white" : ""
                      }`}
                      onClick={() => setGender("Nam")}
                    >
                      Nam
                    </div>
                    <div
                      className={`text-sm px-4 py-3 text-neutral-700 font-medium hover:text-white hover:bg-slate-300 rounded-lg cursor-pointer ${
                        gender === "Nữ" ? "bg-slate-300 text-white" : ""
                      }`}
                      onClick={() => setGender("Nữ")}
                    >
                      Nữ
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          )}

          {/* Chất Liệu */}
          {isMaterial && (
            <div className="group">
              <HoverCard openDelay={20} closeDelay={20}>
                <HoverCardTrigger>
                  <div className="flex items-center gap-1 group">
                    <span className="text-sm text-nowrap">Chất Liệu</span>
                    <IoIosArrowDown className="h-5 w-5 group-hover:rotate-180 transition-transform" />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex flex-col gap-2">
                    {["Vàng 18k", "Vàng 14k"].map((mat) => (
                      <div
                        key={mat}
                        className={`text-sm px-4 py-3 text-neutral-700 font-medium hover:text-white hover:bg-slate-300 rounded-lg cursor-pointer ${
                          material.includes(mat)
                            ? "bg-slate-300 text-white"
                            : ""
                        }`}
                        onClick={() =>
                          setMaterial((prev) =>
                            prev.includes(mat)
                              ? prev.filter((item) => item !== mat)
                              : [mat]
                          )
                        }
                      >
                        {mat}
                      </div>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          )}

          {/* Màu Kim Loại */}
          {isColor && (
            <div className="group">
              <HoverCard openDelay={20} closeDelay={20}>
                <HoverCardTrigger>
                  <div className="flex items-center gap-1 group">
                    <span className="text-sm text-nowrap">Màu Kim Loại</span>
                    <IoIosArrowDown className="h-5 w-5 group-hover:rotate-180 transition-transform" />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex items-center gap-5">
                    <div
                      className={`p-1 border rounded-full cursor-pointer ${
                        metallicColor.includes("Vàng Vàng")
                          ? "border-blue-500 border-2"
                          : ""
                      }`}
                      onClick={() =>
                        setMetallicColor((prev) =>
                          prev.includes("Vàng Vàng")
                            ? prev.filter((item) => item !== "Vàng Vàng")
                            : ["Vàng Vàng"]
                        )
                      }
                    >
                      <Image
                        src={`/Type/type-gold.png`}
                        alt=""
                        height={100}
                        width={100}
                        className="w-[40px] h-[40px] object-cover object-center"
                      />
                    </div>
                    <div
                      className={`p-1 border rounded-full cursor-pointer ${
                        metallicColor.includes("Vàng Trắng")
                          ? "border-blue-500 border-2"
                          : ""
                      }`}
                      onClick={() =>
                        setMetallicColor((prev) =>
                          prev.includes("Vàng Trắng")
                            ? prev.filter((item) => item !== "Vàng Trắng")
                            : ["Vàng Trắng"]
                        )
                      }
                    >
                      <Image
                        src={`/Type/type-silver.png`}
                        alt=""
                        height={100}
                        width={100}
                        className="w-[40px] h-[40px] object-cover object-center"
                      />
                    </div>
                    <div
                      className={`p-1 border rounded-full cursor-pointer ${
                        metallicColor.includes("Vàng Hồng")
                          ? "border-blue-500 border-2"
                          : ""
                      }`}
                      onClick={() =>
                        setMetallicColor((prev) =>
                          prev.includes("Vàng Hồng")
                            ? prev.filter((item) => item !== "Vàng Hồng")
                            : ["Vàng Hồng"]
                        )
                      }
                    >
                      <Image
                        src={`/Type/type-rose.png`}
                        alt=""
                        height={100}
                        width={100}
                        className="w-[40px] h-[40px] object-cover object-center"
                      />
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          )}

          {/* Giá */}
          {isPrice && (
            <div className="group">
              <HoverCard openDelay={20} closeDelay={20}>
                <HoverCardTrigger>
                  <div className="flex items-center gap-1 group">
                    <span className="text-sm text-nowrap">Giá</span>
                    <IoIosArrowDown className="h-5 w-5 group-hover:rotate-180 transition-transform" />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex flex-col gap-2">
                    {priceRanges.map((p) => (
                      <div
                        key={p.name}
                        className={`text-sm px-4 py-3 text-neutral-700 font-medium hover:text-white hover:bg-slate-300 rounded-lg cursor-pointer ${
                          price?.name === p.name
                            ? "bg-slate-300 text-white"
                            : ""
                        }`}
                        onClick={() =>
                          setPrice(
                            price?.name === p.name
                              ? null
                              : {
                                  name: p.name,
                                  maxValue: String(p.maxValue),
                                  minValue: String(p.minValue),
                                }
                          )
                        }
                      >
                        {p.name}
                      </div>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          )}
        </div>
        {/* Sắp Xếp Theo */}
        <div className="group">
          <HoverCard openDelay={20} closeDelay={20}>
            <HoverCardTrigger>
              <div className="flex items-center gap-2">
                <span className="text-sm">Sắp Xếp Theo:</span>
                <span className="text-sm font-medium">{sortBy}</span>
                <IoIosArrowDown className="h-5 w-5 group-hover:rotate-180 transition-transform" />
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex flex-col gap-2">
                {["Mới Nhất", "Giá Thấp Đến Cao", "Giá Cao Đến Thấp"].map(
                  (option) => (
                    <div
                      key={option}
                      className={`text-sm px-4 py-3 text-neutral-700 font-medium hover:text-white hover:bg-slate-300 rounded-lg cursor-pointer ${
                        sortBy === option ? "bg-slate-300 text-white" : ""
                      }`}
                      onClick={() => setSortBy(option)}
                    >
                      {option}
                    </div>
                  )
                )}
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <Sheet open={openFilter} onOpenChange={setOpenFilter}>
          <SheetTrigger asChild>
            <div
              className="border-2 rounded-lg flex items-center gap-2 px-4 py-2 lg:hidden"
              onClick={() => setOpenFilter(true)}
            >
              <CiFilter className="h-5 w-5" />
              <span className="text-sm font-medium">Lọc</span>
            </div>
          </SheetTrigger>
          <SheetContent className="w-full ">
            <div className="relative h-screen">
              <div className="px-5 py-4 flex items-center justify-between bg-slate-100">
                <span className="uppercase text-sm font-medium">
                  Lọc Sản Phẩm
                </span>
                <IoMdClose
                  className="h-5 w-5 hover:scale-95"
                  onClick={() => setOpenFilter(false)}
                />
              </div>
              <div className="overflow-y-auto mb-7">
                {isType && (
                  <div className="px-5 mt-5">
                    <span className="font-bold ">Loại Trang Sức</span>
                    <div className="flex items-center gap-5 mt-5 border-b-2 pb-5">
                      {["Vỏ Nhẫn Nữ", "Nhẫn Nữ Nguyên Chiếc"].map(
                        (type, index) => (
                          <div
                            key={index}
                            className={`border rounded-lg py-2 text-sm basis-[calc(50%-0.5rem)] text-center  ${
                              jewelryType.includes(type)
                                ? "bg-[#20475d] text-white"
                                : ""
                            }`}
                            onClick={() =>
                              setJewelryType((prev) =>
                                prev.includes(type)
                                  ? prev.filter((item) => item !== type)
                                  : [...prev, type]
                              )
                            }
                          >
                            {type}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
                {isGender && (
                  <div className="px-5 mt-5">
                    <span className="font-bold ">Giới Tính</span>
                    <div className="flex items-center gap-5 mt-5 border-b-2 pb-5">
                      <div
                        className={`border rounded-lg py-2 text-sm basis-[calc(50%-0.5rem)] text-center  ${
                          gender === "Nam" ? "bg-[#20475d] text-white" : ""
                        }`}
                        onClick={() => setGender("Nam")}
                      >
                        Nam
                      </div>
                      <div
                        className={`border rounded-lg py-2 text-sm basis-[calc(50%-0.5rem)] text-center  ${
                          gender === "Nữ" ? "bg-[#20475d] text-white" : ""
                        }`}
                        onClick={() => setGender("Nữ")}
                      >
                        Nữ
                      </div>
                    </div>
                  </div>
                )}
                {isMaterial && (
                  <div className="px-5 mt-5 ">
                    <span className="font-bold ">Chất Liệu</span>
                    <div className="flex items-center gap-5 mt-5 border-b-2 pb-5">
                      {["Vàng 18k", "Vàng 14k"].map((mat, index) => (
                        <div
                          key={index}
                          className={`border rounded-lg py-2 text-sm  basis-[calc(50%-0.5rem)] text-center  ${
                            material.includes(mat)
                              ? "bg-[#20475d] text-white"
                              : ""
                          }`}
                          onClick={() =>
                            setMaterial((prev) =>
                              prev.includes(mat)
                                ? prev.filter((item) => item !== mat)
                                : [mat]
                            )
                          }
                        >
                          {mat}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {isColor && (
                  <div className="px-5 mt-5 ">
                    <span className="font-bold ">Màu Kim Loại</span>
                    <div className="flex items-center gap-5 mt-5 border-b-2 pb-5 ">
                      <span
                        className={`p-1 border rounded-full cursor-pointer transition-all ${
                          metallicColor.includes("Vàng Vàng")
                            ? "border-[#20475d] border-2"
                            : ""
                        }`}
                        onClick={() => handleColorClick("Vàng Vàng")}
                      >
                        <Image
                          src={"/Type/type-gold.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-8 w-8 object-cover object-center"
                        />
                      </span>
                      <span
                        className={`p-1 border rounded-full cursor-pointer transition-all ${
                          metallicColor.includes("Vàng Trắng")
                            ? "border-[#20475d] border-2"
                            : ""
                        }`}
                        onClick={() => handleColorClick("Vàng Trắng")}
                      >
                        <Image
                          src={"/Type/type-silver.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-8 w-8 object-cover object-center"
                        />
                      </span>
                      <span
                        className={`p-1 border rounded-full cursor-pointer transition-all ${
                          metallicColor.includes("Vàng Hồng")
                            ? "border-[#20475d] border-2"
                            : ""
                        }`}
                        onClick={() => handleColorClick("Vàng Hồng")}
                      >
                        <Image
                          src={"/Type/type-rose.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-8 w-8 object-cover object-center"
                        />
                      </span>
                    </div>
                  </div>
                )}
                {isPrice && (
                  <div className="px-5 mt-5 ">
                    <span className="font-bold ">Giá (VND)</span>
                    <div className="grid grid-cols-2 gap-5 mt-5 border-b-2 pb-5">
                      {priceRanges.map((p, index) => (
                        <div
                          key={index}
                          className={`border rounded-lg py-2 px-2 text-sm text-nowrap basis-[calc(50%-0.5rem)] text-center ${
                            p.name === price?.name
                              ? "bg-[#20475d] text-white"
                              : ""
                          }`}
                          onClick={() =>
                            setPrice(
                              price?.name === p.name
                                ? null
                                : {
                                    name: p.name,
                                    maxValue: String(p.maxValue),
                                    minValue: String(p.minValue),
                                  }
                            )
                          }
                        >
                          {p.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="px-5 absolute left-0 right-0 pb-3 bottom-0 w-full  gap-5 flex items-center bg-white">
                <div
                  className="border rounded-md py-3 w-full text-center"
                  onClick={handleResetFilters}
                >
                  Làm Mới
                </div>
                <div className="border rounded-md py-3 bg-black text-white w-full text-center">
                  Áp Dụng
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* Hiển Thị Bộ Lọc */}
      <div className="hidden lg:flex items-center justify-between my-5">
        <div className="flex items-center gap-3 flex-wrap">
          {[
            ...jewelryType,
            ...material,
            ...metallicColor,
            price?.name,
            ...(gender !== "None" ? [gender] : []),
          ]
            .filter(Boolean)
            .map((filter, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 rounded-full px-3 py-1.5 bg-[#20475d]">
                  <span className="text-xs font-medium text-white">
                    {filter}
                  </span>
                  <IoMdClose
                    className="h-4 w-4 text-white cursor-pointer hover:text-gray-200"
                    onClick={() => handleRemoveFilter(filter!)}
                  />
                </div>
              </div>
            ))}
        </div>
        {/* Làm Mới Bộ Lọc */}
        {(jewelryType.length > 0 ||
          material.length > 0 ||
          metallicColor.length > 0 ||
          price !== null ||
          gender !== "None") && (
          <div
            className="hidden lg:flex items-center gap-2 cursor-pointer hover:text-gray-600"
            onClick={handleResetFilters}
          >
            <IoRefreshOutline className="h-5 w-5" />
            <span className="underline-offset-4 underline">Làm Mới Bộ Lọc</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Filter;
