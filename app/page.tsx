"use client"
import Banner from "@/components/Home/Banner";
import Collection from "@/components/Home/Collection";
import Collections from "@/components/Home/Collections";
import Discovery from "@/components/Home/Discovery";
import Inspection from "@/components/Home/Inspection";
import ProductCatalog from "@/components/Home/ProductCatalog";
import Slider from "@/components/Home/Slider";
import { cn } from "@/lib/utils";
import debounce from "lodash.debounce";
import { useEffect, useState } from "react";


const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = debounce(() => {
    setScrollY(window.scrollY);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={cn("transition-all duration-75", scrollY > 70 ? "mt-[57px]" : "mt-[135px]")}>
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
}


export default Home;