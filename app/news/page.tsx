"use client"
import Breadcrumb from "@/components/Breadcrumb";
import Tab from "@/components/News/Tabs";
import { cn } from "@/lib/utils";
import debounce from "lodash.debounce";
import Image from "next/image";
import { useEffect, useState } from "react";



const News = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = debounce(() => {
    setScrollY(window.scrollY);
  }, 10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={cn(
          "transition-all duration-75 ",
          scrollY > 70 ? "lg:mt-[57px]" : "mt-[120px] lg:mt-[140px]"
        )}
      >
        <Breadcrumb breadcrumbs={[{ title: "Tin Tức", url: "/news" }]} />
        <section className="lg:mx-auto mx-5 lg:w-3/4 h-[103px] lg:h-[394px] mt-5">
          <Image
            src={"/Banner/banner-bracelet.png"}
            alt=""
            height={538}
            width={2048}
            className="object-cover w-full h-full object-center"
          />
        </section>
        <Tab/>
        <div className="my-5 flex justify-center">
            <button className="border rounded-md py-3 px-6 font-medium">Xem Thêm</button>
        </div>
      </div>
    </>
  );
};

export default News;
