"use client"
import Banner from "@/components/Banner";
import Breadcrumb from "@/components/Breadcrumb";
import { cn } from "@/lib/utils";
import debounce from "lodash.debounce";
import { useEffect, useState } from "react";


const WomenRing = () => {
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
          <Breadcrumb
            breadcrumbs={[{ title: "Trang Nhẫn Nữ", url: "/women-ring" }]}
          />
          <Banner
            imageUrl="/Banner/banner-women-ring.png"
            imageUrlMobile="/Banner/banner-women-ring-mobile.png"
          />
        </div>
      </>
    );
}

export default WomenRing;