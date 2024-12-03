"use client";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/hooks/useNavigation";
import { getData } from "@/utils/axios";
import { Product } from "@/types/product";
const Header = () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";
  const { isNavigating } = useNavigation();
  const [query,setQuery] = useState<string>();
  const [result, setResult] = useState<Product[]>();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const handleScroll = debounce(() => {
    setScrollY(window.scrollY);
  }, 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("scroll", scrollY);
  }, [scrollY]);

  useEffect(() => {
    setIsOpenMenu(false);
    console.log(isNavigating);
    
  }, [isNavigating]);



  const fetchSearch = useCallback(
    debounce(async (query: string) => {
      if (query?.trim()) {
        await getData({ endpoint: `/product/search/${query}` }).then((data) => {
          setResult(data);
        })
      }
    }, 500), 
    []
  );

  useEffect(() => {
    fetchSearch(query!);

    return () => {
      fetchSearch.cancel();
    };
  }, [query, fetchSearch]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-md">
        <div
          className={cn(
            " lg:hidden items-center gap-5 py-2 px-2 border-b",
            scrollY > 40 ? "hidden" : "flex"
          )}
        >
          <div className="flex items-center gap-1">
            <CiLocationOn className="h-5 w-5" />
            <div className="text-sm text-nowrap">Vị trí của chúng tôi</div>
          </div>
          <div className="flex items-center gap-3">
            <TfiHeadphoneAlt className="h-4 w-4" />
            <div className="text-sm text-nowrap">Liên lạc với chúng tôi</div>
          </div>
        </div>
        <div className="mx-auto w-3/4 p-3 flex gap-4 flex-col">
          <div
            className={cn(
              "transition-all  duration-100 ease-in-out  items-center justify-between",
              scrollY > 70 ? "lg:hidden flex" : "flex"
            )}
          >
            <div className="flex lg:hidden items-center gap-5">
              <RxHamburgerMenu
                className="h-6 w-6"
                onClick={() => setIsOpenMenu((prev) => !prev)}
              />
            </div>
            <div className="items-center gap-5 sm:flex hidden ">
              <Link
                href="https://www.google.com/maps?q=10.045279796211569, 105.78267762488404"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLocationOn className="h-6 w-6" />
              </Link>
              <Link href="tel:+84939 843 366">
                <TfiHeadphoneAlt className="h-5 w-5" />
              </Link>
            </div>
            <Link href="/">
              <div className="cursor-pointer">
                <Image
                  src={"/Logo/gem.jpg"}
                  alt="Logo Kimberly"
                  height={130}
                  width={130}
                  className="object-contain lg:block hidden object-center"
                />
                <Image
                  src={"/Logo/gem.jpg"}
                  alt="Logo Kimberly"
                  height={90}
                  width={90}
                  className="object-contain sm:hidden object-center"
                />
              </div>
            </Link>

            <div className="flex items-center lg:hidden">
              <Popover onOpenChange={setIsSearch} open={isSearch}>
                <PopoverTrigger>
                  {!isSearch && (
                    <GoSearch
                      className="w-6 h-6"
                      onClick={() => setIsSearch(false)}
                    />
                  )}
                  {isSearch && (
                    <AiOutlineClose
                      className="w-6 h-6"
                      onClick={() => setIsSearch(true)}
                    />
                  )}
                </PopoverTrigger>
                <PopoverContent className="lg:mt-8 lg:mr-10 mt-5 relative  lg:min-w-full w-[390px] lg:w-full ">
                  <div className="absolute top-[6px] right-20">
                    <div className="relative">
                      {/* Shadow */}
                      <div className="absolute -top-5  w-0 h-0 border-x-[15px] border-x-transparent border-b-[15px] border-b-gray-100"></div>
                      {/* Tam giác chính */}
                      <div className="absolute -top-4  w-0 h-0 border-x-[15px] border-x-transparent border-b-[15px] border-b-white"></div>
                    </div>
                  </div>

                  <div className="p-1 w-full flex flex-col items-center">
                    <div className="border-b text-lg uppercase font-medium text-center pb-1">
                      Tìm Kiếm
                    </div>
                    <div className="flex items-center justify-center mt-3 relative">
                      <IoSearchOutline className="absolute right-5 mt-[1px] h-6 w-6" />
                      <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none border-2 rounded-full py-2 pl-5 pr-14 lg:pr-10 border-neutral-500 lg:rounded-sm w-[350px] lg:w-[400px]"
                      />
                    </div>

                    <div className="flex flex-col items-center ">
                      {result?.slice(0, 4).map((re) => (
                        <Link
                          href={`/product/${re.productId}`}
                          className="border-b flex w-[390px]  lg:px-0 px-5 lg:w-[400px] items-center py-5 gap-5"
                        >
                          <Image
                            src={`${baseUrl}/image/id/${
                              (re.images as string).split(",")[0]
                            }`}
                            width={100}
                            height={116}
                            alt=""
                            className="object-cover w-[50px] lg:w-[60px]  object-center"
                          />
                          <div className=" ">
                            <div className="group ">
                              <p className="group-hover:text-[#20475d] font-medium">
                                {re.productName}
                              </p>
                              {/* <p className="group-hover:text-[#20475d] font-me">
                                Round/7.2x7.2/G/VVS1/Faint/1.42CT
                              </p> */}
                            </div>
                            <p className="flex items-center gap-2">
                              <span className="text-sm font-bold">
                                {re.price} <span>VND</span>
                              </span>
                              {/* <span className="text-sm font-semibold text-neutral-500 line-through ">
                                444,545,400<span>VND</span>
                              </span> */}
                            </p>
                          </div>
                        </Link>
                      ))}

                      {result && result.length > 4 && (
                        <Link
                          href={`/search?q=${query}`}
                          className="flex items-center justify-center underline mt-4"
                        >
                          Xem tất cả {result.length} sản phẩm
                        </Link>
                      )}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div className="hidden items-center lg:flex">
              <Popover>
                <PopoverTrigger>
                  <GoSearch className="w-6 h-6" />
                </PopoverTrigger>
                <PopoverContent
                  className={cn(
                    "mt-8 mr-32 relative min-w-[500px]",
                    scrollY > 70 ? "hidden" : ""
                  )}
                >
                  <div className="absolute top-[6px] right-20">
                    <div className="relative">
                      {/* Shadow */}
                      <div className="absolute -top-5  w-0 h-0 border-x-[15px] border-x-transparent border-b-[15px] border-b-gray-100"></div>
                      {/* Tam giác chính */}
                      <div className="absolute -top-4  w-0 h-0 border-x-[15px] border-x-transparent border-b-[15px] border-b-white"></div>
                    </div>
                  </div>

                  <div className="p-1 min-w-[400px]">
                    <div className="border-b text-lg uppercase font-medium text-center pb-1">
                      Tìm Kiếm
                    </div>
                    <div className="flex items-center justify-center mt-3 relative">
                      <IoSearchOutline className="absolute right-10 mt-[1px] h-6 w-6" />
                      <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        type="search"
                        className="outline-none border-2 py-2 pl-4 pr-10 border-neutral-500 rounded-sm w-[400px]"
                      />
                    </div>
                    <div className="flex flex-col items-center ">
                      {result?.slice(0, 4).map((re) => (
                        <Link href={`/product/${re.productId}`} className="border-b flex w-[400px] items-center py-5 gap-5">
                          <Image
                            src={`${baseUrl}/image/id/${
                              (re.images as string).split(",")[0]
                            }`}
                            width={100}
                            height={116}
                            alt=""
                            className="object-cover w-[60px]  object-center"
                          />
                          <div className=" ">
                            <div className="group ">
                              <p className="group-hover:text-[#20475d] font-medium">
                                {re.productName}
                              </p>
                              {/* <p className="group-hover:text-[#20475d] font-me">
                              Round/7.2x7.2/G/VVS1/Faint/1.42CT
                            </p> */}
                            </div>
                            <p className="flex items-center gap-2">
                              <span className="text-sm font-bold">
                                {re.price}
                                <span>VND</span>
                              </span>
                              {/* <span className="text-sm font-semibold text-neutral-500 line-through ">
                              444,545,400<span>VND</span>
                            </span> */}
                            </p>
                          </div>
                        </Link>
                      ))}

                      {result && result.length > 4 && (
                        <Link
                          href={`/search?q=${query}`}
                          className="flex items-center justify-center underline mt-4"
                        >
                          Xem tất cả {result.length} sản phẩm
                        </Link>
                      )}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <nav className="hidden lg:flex  items-center justify-between">
            <Link
              href="/"
              className="relative px-3 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
            >
              Kimberly
            </Link>
            <HoverCard openDelay={20} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div className="relative px-3 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                  Trang Sức Kim Cương
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="">
                <div className="flex flex-col justify-center gap-2">
                  <HoverCard openDelay={20} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <Link
                        href={"/diamond-ring"}
                        className="relative px-2 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                      >
                        Nhẫn Kim Cương
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="absolute -top-[60px] left-32 mt-2 p-4 bg-white rounded-md shadow-lg">
                      <div className="flex flex-col justify-center gap-2">
                        <Link
                          href={"/women-diamond-ring"}
                          className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                        >
                          Nhẫn Kim Cương Nữ
                        </Link>
                        <Link
                          href={"/men-diamond-ring"}
                          className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                        >
                          Nhẫn Kim Cương Nam
                        </Link>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <Link
                    href={"/wedding-ring"}
                    className="relative px-2 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                  >
                    Nhẫn Cưới
                  </Link>
                  <Link
                    href={"/diamond-earring"}
                    className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                  >
                    Bông Tai Kim Cương
                  </Link>
                  <Link
                    href={"/diamond-pendant"}
                    className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                  >
                    Mặt Dây Chuyền Kim Cương
                  </Link>
                  <Link
                    href={"/diamond-bracelet-bangle"}
                    className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                  >
                    Lắc & Vòng Tay Kim Cương
                  </Link>
                  <Link
                    href={"/diamond-jewelry-set"}
                    className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                  >
                    Bộ Trang Sức Kim Cương
                  </Link>
                </div>
              </HoverCardContent>
            </HoverCard>
            <Link
              href="/diamond"
              className="relative px-3 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
            >
              Kim Cương Viên
            </Link>

            <HoverCard openDelay={20} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div className="relative px-3 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                  Bộ Sưu Tập
                </div>
              </HoverCardTrigger>
              {/* <HoverCardContent className="">
                <div className="flex flex-col justify-center gap-2">
                  <Link
                    href={"/collections/stella"}
                    className="capitalize text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                  >
                    Bộ sưu tập stella
                  </Link>
                  <Link
                    href={"/collections/stella"}
                    className=" capitalize text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                  >
                    Bộ sưu tập lotus
                  </Link>
                  <Link
                    href={"/collections/stella"}
                    className=" capitalize text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                  >
                    Bộ sưu tập love Knot
                  </Link>
                  <Link
                    href={"/collections/stella"}
                    className=" capitalize text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                  >
                    Bộ sưu tập camellia
                  </Link>
                </div>
              </HoverCardContent> */}
            </HoverCard>

            <Link
              href="/news"
              className="relative px-3 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
            >
              Tin Tức
            </Link>
          </nav>
        </div>
      </header>
      <div
        className={`w-full z-[51] lg:hidden bg-white text-white h-screen py-5 top-0 fixed transition-transform duration-300 ease-in-out ${
          isOpenMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative flex items-center justify-center border-b-2 h-24">
          <Image
            src={"/Logo/gem.jpg"}
            alt="Logo Kimberly"
            height={90}
            width={90}
            className="object-contain sm:hidden object-center"
          />
          <IoCloseCircleOutline
            className="absolute right-5 top-0 h-8 w-8 text-neutral-500"
            onClick={() => setIsOpenMenu(false)}
          />
        </div>
        <div className=" my-5">
          <div>
            <Link
              href="/"
              className=" text-black  py-3 px-6 text-lg uppercase hover:bg-slate-50 rounded-md block "
            >
              Kimberly
            </Link>
          </div>
          <div>
            <Link
              href="/diamond"
              className=" text-black  py-3 px-6 text-lg uppercase hover:bg-slate-50 rounded-md block "
            >
              Kim Cương viên
            </Link>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className=" text-black  py-3 px-6 text-lg uppercase hover:bg-slate-50 rounded-md block ">
                    Trang Sức Kim Cương
                  </div>
                </AccordionTrigger>
                <AccordionContent className="mx-3">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div>
                          <Link
                            href="/diamond-ring"
                            className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                          >
                            Nhẵn Kim Cương
                          </Link>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="mx-3">
                        <div>
                          <Link
                            href="/women-diamond-ring"
                            className=" text-black  py-3 px-6 text-sm uppercase hover:bg-slate-50 rounded-md block "
                          >
                            Nhẵn Kim Cương Nữ
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="/men-diamond-ring"
                            className=" text-black  py-3 px-6 text-sm uppercase hover:bg-slate-50 rounded-md block "
                          >
                            Nhẵn Kim Cương Nam
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div>
                    <Link
                      href="/wedding-ring"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Nhẫn cưới
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="/diamond-earring"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Bông Tai Kim Cương
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/diamond-pendant"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Mặt dây chuyền kim cương
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/diamond-bracelet-bangle"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Lắc & Vòng Tay Kim Cương
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/diamond-jewelry-set"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Bộ Trang Sức Kim Cương
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className=" text-black  py-3 px-6 text-lg uppercase hover:bg-slate-50 rounded-md block ">
                    bộ sưa tập
                  </div>
                </AccordionTrigger>
                {/* <AccordionContent className="mx-3">
                  <div>
                    <Link
                      href="/collections/stella"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Bộ Sưu Tập Stella
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/collections/stella"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Bộ Sưu Tập Lotus
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/collections/stella"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Bộ Sưu Tập Love Knot
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/collections/stella"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Bộ Sưu Tập Camelia
                    </Link>
                  </div>
                </AccordionContent> */}
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Link
              href="/news"
              className=" text-black  py-3 px-6 text-lg uppercase hover:bg-slate-50 rounded-md block "
            >
              Tin Tức
            </Link>
          </div>
        </div>
        <div className="w-full bg-black h-full space-y-2 p-6">
          <Link
            href="https://www.google.com/maps?q=10.045279796211569, 105.78267762488404"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 cursor-pointer my-5"
          >
            <div className="w-6">
              <CiLocationOn className="h-6 w-6" />
            </div>
            <div className="text-base">Vị trí của chúng tôi</div>
          </Link>
          <Link
            href="tel:+84939 843 366"
            className="flex items-center gap-3 cursor-pointer my-5"
          >
            <div className="w-6">
              <TfiHeadphoneAlt className="h-5 w-5" />
            </div>
            <div className="text-base">Liên lạc với chúng tôi</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
