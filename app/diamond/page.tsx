"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { cn } from "@/lib/utils";
import debounce from "lodash.debounce";
import { useEffect, useState } from "react";

const Diamond = () => {
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
          "transition-all duration-75",
          scrollY > 70 ? "mt-[57px]" : "mt-[135px]"
        )}
      >
        <Breadcrumb
          breadcrumbs={[{ title: "Trang Kim Cương", url: "/diamond" }]}
        />
      </div>
    </>
  );
};

export default Diamond;
