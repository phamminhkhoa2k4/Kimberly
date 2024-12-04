"use client";
import Banner from "@/components/Home/Banner";
import Collection from "@/components/Home/Collection";
import Collections from "@/components/Home/Collections";
import Discovery from "@/components/Home/Discovery";
import Inspection from "@/components/Home/Inspection";
import ProductCatalog from "@/components/Home/ProductCatalog";
import Slider from "@/components/Home/Slider";
import { cn } from "@/lib/utils";
import debounce from "lodash.debounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const handleScroll = debounce(() => {
    setScrollY(window.scrollY);
  }, 100);
  useHotkeys("ctrl+q", () => router.push("/staff/login"));

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <>
      <div
        className={cn(
          "transition-all duration-75",
          scrollY > 70 ? "mt-[57px]" : "lg:mt-[135px] mt-[105px]"
        )}
      >
        <Slider />
        <Collections />
        <ProductCatalog />
        <Collection />
        <Banner />
        <Discovery />
        <Inspection />
      </div>
    </>
  );
};

export default Home;
