"use client";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useState } from "react";
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b shadow-md">
        <div className="flex lg:hidden items-center gap-5 py-2 px-4 border-b">
          <div className="flex items-center gap-3">
            <CiLocationOn className="h-6 w-6" />
            <div className="text-base">Vị trí cửa chúng tôi</div>
          </div>
          <div className="flex items-center gap-3">
            <TfiHeadphoneAlt className="h-5 w-5" />
            <div className="text-base">Liên lạc với chúng tôi</div>
          </div>
        </div>
        <div className="mx-auto w-3/4 p-3 flex gap-4 flex-col">
          <div className="flex items-center justify-between">
            <div className="flex lg:hidden items-center gap-5">
              <RxHamburgerMenu
                className="h-6 w-6"
                onClick={() => setIsOpenMenu((prev) => !prev)}
              />
            </div>
            <div className="items-center gap-5 sm:flex hidden ">
              <CiLocationOn className="h-6 w-6" />
              <TfiHeadphoneAlt className="h-5 w-5" />
            </div>
            <div>
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
            <div>
              <GoSearch className="w-6 h-6" />
            </div>
          </div>
          <nav className="hidden lg:flex  items-center justify-between">
            <Link
              href="#"
              className="relative px-3 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
            >
              Kimberly
            </Link>
            <Link
              href="#"
              className="relative px-3 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
            >
              Kim Cương Viên
            </Link>
            <HoverCard openDelay={20} closeDelay={100}>
              <HoverCardTrigger className="relative px-3 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                Trang Sức Kim Cương
              </HoverCardTrigger>
              <HoverCardContent className="">
                <div className="flex flex-col justify-center gap-2">
                  <HoverCard openDelay={20} closeDelay={100}>
                    <HoverCardTrigger className="relative px-2 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                      Nhẵn Cưới
                    </HoverCardTrigger>
                    <HoverCardContent className="absolute -top-[60px] left-32 mt-2 p-4 bg-white rounded-md shadow-lg">
                      <div className="flex flex-col justify-center gap-2">
                        <div className=" text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                          Nhẵn Cuới kim Cương
                        </div>
                        <div className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                          Nhẵn Cầu Hôn Kim Cương
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <HoverCard openDelay={20} closeDelay={100}>
                    <HoverCardTrigger className="relative px-2 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                      Nhẵn kim cương
                    </HoverCardTrigger>
                    <HoverCardContent className="absolute -top-[60px] left-32 mt-2 p-4 bg-white rounded-md shadow-lg">
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                          Nhẵn kim cương nữ
                        </div>
                        <div className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                          Lắc & vồng tay kim nam
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <div className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                    Nhẵn Cưới
                  </div>
                  <div className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                    Mặt dây chuyền kim cương
                  </div>
                  <div className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                    Lắc & vồng tay kim cương
                  </div>
                  <div className="text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                    Bộ trang sức kim cương
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard openDelay={20} closeDelay={100}>
              <HoverCardTrigger className="relative px-3 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                Bộ sưu tập
              </HoverCardTrigger>
              <HoverCardContent className="">
                <div className="flex flex-col justify-center gap-2">
                  <div className=" capitalize text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                    Bộ sưu tập stella
                  </div>
                  <div className=" capitalize text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                    Bộ sưu tập lotus
                  </div>
                  <div className=" capitalize text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                    Bộ sưu tập love Knot
                  </div>
                  <div className=" capitalize text-nowrap relative px-2 py-1 rounded-sm overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out">
                    Bộ sưu tập camellia
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <Link
              href="#"
              className="relative px-3 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
            >
              Tin Tức
            </Link>
          </nav>
        </div>
      </header>
      <div
        className={`w-full lg:hidden bg-white text-white h-screen py-5 fixed transition-transform duration-300 ease-in-out ${
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
            <a
              href="#"
              className=" text-black  py-3 px-6 text-lg uppercase hover:bg-slate-50 rounded-md block "
            >
              Kimberly
            </a>
          </div>
          <div>
            <a
              href="#"
              className=" text-black  py-3 px-6 text-lg uppercase hover:bg-slate-50 rounded-md block "
            >
              Kim Cương viên
            </a>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <a
                    href="#"
                    className=" text-black  py-3 px-6 text-lg uppercase hover:bg-slate-50 rounded-md block "
                  >
                    Trang Sức Kim Cương
                  </a>
                </AccordionTrigger>
                <AccordionContent className="mx-3">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div>
                          <a
                            href="#"
                            className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                          >
                            Nhẵn Kim Cương
                          </a>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="mx-3">
                        <div>
                          <a
                            href="#"
                            className=" text-black  py-3 px-6 text-sm uppercase hover:bg-slate-50 rounded-md block "
                          >
                            Nhẵn Kim Cương Nữ
                          </a>
                        </div>
                        <div>
                          <a
                            href="#"
                            className=" text-black  py-3 px-6 text-sm uppercase hover:bg-slate-50 rounded-md block "
                          >
                            Nhẵn Kim Cương Nam
                          </a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div>
                          <a
                            href="#"
                            className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                          >
                            Trang Sức cưới
                          </a>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="mx-3">
                        <div>
                          <a
                            href="#"
                            className=" text-black  py-3 px-6 text-sm uppercase hover:bg-slate-50 rounded-md block "
                          >
                            Nhẵn Cưới Kim Cương
                          </a>
                        </div>
                        <div>
                          <a
                            href="#"
                            className=" text-black  py-3 px-6 text-sm uppercase hover:bg-slate-50 rounded-md block "
                          >
                            Nhẵn Cầu Hôn Kim Cương
                          </a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div>
                    <a
                      href="#"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Bông Tai Kim Cương
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Mặt dây chuyền kim cương
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Lắc & Vòng Tay Kim Cương
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Bộ Trang Sức Kim Cương
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <a
                    href="#"
                    className=" text-black  py-3 px-6 text-lg uppercase hover:bg-slate-50 rounded-md block "
                  >
                    bộ sưa tập
                  </a>
                </AccordionTrigger>
                <AccordionContent className="mx-3">
                  <div>
                    <a
                      href="#"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Bộ Sưu Tập Stella
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Bộ Sưu Tập Lotus
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Bộ Sưu Tập Love Knot
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className=" text-black  py-3 px-6 text-base uppercase hover:bg-slate-50 rounded-md block "
                    >
                      Bộ Sưu Tập Camelia
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <a
              href="#"
              className=" text-black  py-3 px-6 text-lg uppercase hover:bg-slate-50 rounded-md block "
            >
              Tin Tức
            </a>
          </div>
        </div>
        <div className="w-full bg-black h-full space-y-2 p-6">
          <div className="flex items-center gap-3 cursor-pointer my-5">
            <div className="w-6">
              <CiLocationOn className="h-6 w-6" />
            </div>
            <div className="text-base">Vị trí cửa chúng tôi</div>
          </div>
          <div className="flex items-center gap-3 cursor-pointer my-5">
            <div className="w-6">
              <TfiHeadphoneAlt className="h-5 w-5" />
            </div>
            <div className="text-base">Liên lạc với chúng tôi</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
