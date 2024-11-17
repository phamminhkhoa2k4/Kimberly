import { SiZalo } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const Footer = () => {
  return (
    <footer className="border-t shadow-sm">
      <div className="w-3/4 mx-auto py-14 hidden lg:block">
        <div className=" grid grid-cols-3 items-start gap-40">
          <div className="flex flex-col justify-center gap-3">
            <div className="text-base font-bold capitalize tracking-wider text-[#20475d]">
              Liên hệ
            </div>
            <div className="text-sm font-medium tracking-wider">
              Cần Thơ <span className="underline">0939 843 366</span>
            </div>
            <div className="text-sm font-medium tracking-wider">
              Hotline CSKH <span className="underline">00303033030</span>
            </div>
            <div className="flex items-center gap-5">
              <SiZalo className="h-5 w-5" />
              <FaFacebookF className="h-5 w-5" />
              <FaYoutube className="h-5 w-5" />
              <FaTiktok className="h-5 w-5" />
              <FaInstagram className="h-5 w-5" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <div className="text-base font-bold capitalize tracking-wider text-[#20475d]">
              Địa Chỉ
            </div>
            <div className="text-sm tracking-wider font-medium">
              53-55-57 Đ. Ung Văn Khiêm, P, Ninh Kiều, Cần Thơ
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <div className="text-base font-bold capitalize tracking-wider text-[#20475d]">
              Chứng Nhận
            </div>
            <Image
              src={"/Certification/GIA.jpg"}
              alt=""
              height={90}
              width={90}
              className="object-cover object-center"
            />
            <Image
              src={"/Certification/pnj.png"}
              alt=""
              height={90}
              width={90}
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="my-3 sm:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="px-6 py-3 text-base font-bold capitalize tracking-wider text-[#20475d]">
                Liên hệ
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-11 flex flex-col gap-2">
              <div className="text-sm font-medium tracking-wider">
                Cần Thơ <span className="underline">0939 843 366</span>
              </div>
              <div className="text-sm font-medium tracking-wider">
                Hotline CSKH <span className="underline">00303033030</span>
              </div>
              <div className="flex items-center gap-5">
                <SiZalo className="h-5 w-5" />
                <FaFacebookF className="h-5 w-5" />
                <FaYoutube className="h-5 w-5" />
                <FaTiktok className="h-5 w-5" />
                <FaInstagram className="h-5 w-5" />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="px-6 py-3 text-base font-bold capitalize tracking-wider text-[#20475d]">
                Địa Chỉ
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-11 flex flex-col gap-2">
              <div className="text-sm tracking-wider font-medium">
                53-55-57 Đ. Ung Văn Khiêm, P, Ninh Kiều, Cần Thơ
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="px-6 py-3 text-base font-bold capitalize tracking-wider text-[#20475d]">
                Chứng Nhận
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex  items-center justify-between px-11   gap-2">
              <Image
                src={"/Certification/GIA.jpg"}
                alt=""
                height={50}
                width={50}
                className="object-cover object-center"
              />
              <Image
                src={"/Certification/pnj.png"}
                alt=""
                height={80}
                width={80}
                className="object-cover object-center"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="border-t w-full flex items-center flex-col gap-5 justify-center py-4">
        <Image
          src={"/Logo/gem.jpg"}
          alt="Logo"
          height={80}
          width={80}
          className="object-contain object-center"
        />
        <div className="text-neutral-700">
          © 2024. Công Ty Cổ Phần Trang Sức Kimberly.{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
