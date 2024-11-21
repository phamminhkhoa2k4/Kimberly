"use client"
import { cn } from "@/lib/utils";
import debounce from "lodash.debounce";
import { useEffect, useState } from "react";

type Props = {
    children : React.ReactNode;
}

const Body = ({children}: Props) => {
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
        {children}
      </div>
    </>
  );
};

export default Body;
